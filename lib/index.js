const fs = require('fs/promises');
const path = require('path');

const chalk = require('chalk');

const log = (message, dotFormatting = chalk.blue) => {
	console.log(`  ${dotFormatting('•')} ${message}`);
};

const afterPackHook = async params => {
	if (process.platform !== 'linux') {
		// this fix is only required on linux
		return;
	}

	log('applying fix for sandboxing on unsupported kernels');

	const executable = path.join(
		params.appOutDir,
		params.packager.executableName
	);

	const loaderScript = `#!/usr/bin/env bash
set -eu

UNPRIVILEGED_USERNS_ENABLED=$(cat /proc/sys/kernel/unprivileged_userns_clone 2>/dev/null)
SCRIPT_DIR="$( cd "$( dirname "\${BASH_SOURCE[0]}" )" && pwd )"

exec "$SCRIPT_DIR/${params.packager.executableName}.bin" "$([[ $UNPRIVILEGED_USERNS_ENABLED == 0 ]] && echo '--no-sandbox')" "$@"
`;

	try {
		await fs.rename(executable, executable + '.bin');
		await fs.writeFile(executable, loaderScript);
	} catch (e) {
		log('failed to create loder for sandbox fix: ' + e.message, chalk.red);
		throw new Error('Failed to create loader for sandbox fix');
	}

	log('sandbox fix successfully applied', chalk.green);
};

module.exports = afterPackHook;
