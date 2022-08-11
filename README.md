# electron-builder-sandbox-fix

[![Build Status](https://ci.systest.eu/api/badges/gergof/electron-builder-sandbox-fix/status.svg)](https://ci.systest.eu/gergof/electron-builder-sandbox-fix)
[![NPM](https://img.shields.io/npm/v/electron-builder-sandbox-fix)](https://www.npmjs.com/package/electron-builder-sandbox-fix)

Apply no-sandbox flag automatically when required to fix SUID sandbox helper errors.

This script adds a loader script that will disable sandboxing for your electron app if the `unprivileged_userns_clone` kernel option is disabled.

#### Usage

In `electron-builder.json`:

```json
{
	"afterPack": "electron-builder-sandbox-fix"
}
```
