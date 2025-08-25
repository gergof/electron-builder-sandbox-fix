# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [1.1.1](https://github.com/gergof/electron-builder-sandbox-fix/compare/v1.1.0...v1.1.1) (2025-08-25)

## [1.1.0](https://github.com/gergof/electron-builder-sandbox-fix/compare/v1.0.11...v1.1.0) (2025-04-09)


### Features

* Changed license to MIT ([7d318dc](https://github.com/gergof/electron-builder-sandbox-fix/commit/7d318dc3a020cbfdfe06cc216516d5f646e4a9f9))

### [1.0.11](https://github.com/gergof/electron-builder-sandbox-fix/compare/v1.0.10...v1.0.11) (2024-02-02)


### Bug Fixes

* Consult the electronPlatformName variable to determine the build target platform instead of process.platform to support multi-platform builds ([a2251d7](https://github.com/gergof/electron-builder-sandbox-fix/commit/a2251d7d8f22be807d2142da0cf768c78d4cfb0a))

### [1.0.10](https://github.com/gergof/electron-builder-sandbox-fix/compare/v1.0.9...v1.0.10) (2022-08-12)


### Bug Fixes

* Added missing appInfo for productName argument ([bf7db1b](https://github.com/gergof/electron-builder-sandbox-fix/commit/bf7db1b5fc50624bd6c18949b51c0fb80859d774))

### [1.0.9](https://github.com/gergof/electron-builder-sandbox-fix/compare/v1.0.8...v1.0.9) (2022-08-12)


### Bug Fixes

* **loader:** Update script dir if detected that we're running from /usr/bin ([9300ba6](https://github.com/gergof/electron-builder-sandbox-fix/commit/9300ba6e99ecaa601b8c3c34979e2cd89265ca7a))

### [1.0.8](https://github.com/gergof/electron-builder-sandbox-fix/compare/v1.0.7...v1.0.8) (2022-08-12)


### Bug Fixes

* **loader:** Apply no-sandbox even when /proc file couldn't be read ([828690f](https://github.com/gergof/electron-builder-sandbox-fix/commit/828690fa8c8ad88f7dc5317ea9b351677833d982))

### [1.0.7](https://github.com/gergof/electron-builder-sandbox-fix/compare/v1.0.6...v1.0.7) (2022-08-12)


### Bug Fixes

* **loader:** Don't exit on first error since we might not have read permission on /proc/sys/kernel/unprivileged_userns_clone ([b8be94c](https://github.com/gergof/electron-builder-sandbox-fix/commit/b8be94cdca5db74deb19436501643005d0535d58))

### [1.0.6](https://github.com/gergof/electron-builder-sandbox-fix/compare/v1.0.5...v1.0.6) (2022-08-11)


### Build/CI

* Don't trigger builds on pushes to master ([bd910f0](https://github.com/gergof/electron-builder-sandbox-fix/commit/bd910f012fd420a322dd582a7e6c2b28eb006553))


### Documentation

* Fix typo ([d941b74](https://github.com/gergof/electron-builder-sandbox-fix/commit/d941b745433edea42de532a669530ca39a44b323))

### [1.0.5](https://github.com/gergof/electron-builder-sandbox-fix/compare/v1.0.4...v1.0.5) (2022-08-10)

### [1.0.4](https://github.com/gergof/electron-builder-sandbox-fix/compare/v1.0.3...v1.0.4) (2022-08-10)


### Bug Fixes

* Chmod loader script to 755 ([c65c9ce](https://github.com/gergof/electron-builder-sandbox-fix/commit/c65c9cee5df62638c494f9ebcde453895f6ff982))

### [1.0.3](https://github.com/gergof/electron-builder-sandbox-fix/compare/v1.0.2...v1.0.3) (2022-08-10)


### Bug Fixes

* Fixed typo in loader script ([ddaade6](https://github.com/gergof/electron-builder-sandbox-fix/commit/ddaade6bc6d29938847578cba1d22c4fcc6d9ab8))

### [1.0.2](https://github.com/gergof/electron-builder-sandbox-fix/compare/v1.0.1...v1.0.2) (2022-08-10)


### Bug Fixes

* Fixed typo in module.exports ([81fed75](https://github.com/gergof/electron-builder-sandbox-fix/commit/81fed758749a0270e916710fb9df3012994599f5))

### [1.0.1](https://github.com/gergof/electron-builder-sandbox-fix/compare/v1.0.0...v1.0.1) (2022-08-10)


### Bug Fixes

* Use chalk 4 for require ([ea9819c](https://github.com/gergof/electron-builder-sandbox-fix/commit/ea9819c42242b4e10fd4b3f7823c36fec6fe7daa))

## 1.0.0 (2022-08-10)


### Features

* Created hook with fix ([8ee5ece](https://github.com/gergof/electron-builder-sandbox-fix/commit/8ee5ece5b58dc57e5fb44896bb6350837bfbd9bf))


### Documentation

* Updated readme with badges ([2da497d](https://github.com/gergof/electron-builder-sandbox-fix/commit/2da497dcd85afb03ee28294f5d3cfed3b6548ad3))


### Build/CI

* Signed drone yaml ([7e485f8](https://github.com/gergof/electron-builder-sandbox-fix/commit/7e485f8665bc83be66b510c5fba5347f345ace6f))
