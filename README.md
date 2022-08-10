# electron-builder-sandbox-fix
Apply no-sandbox flag automatically when required to disable SUID sandbox helper errors.

This script adds a loader script that will disable sandboxing for your electron app if the `unprivileged_userns_clone` kernel option is disabled.

#### Usage

In `electron-builder.json`:

```json
{
	"afterPack": "electron-builder-sandbox-fix"
}
```
