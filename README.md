# NPM Packist [![Travis CI Build Status](https://img.shields.io/travis/com/Richienb/npm-packist/master.svg?style=for-the-badge)](https://travis-ci.com/Richienb/npm-packist)

Pack npm modules.

[![NPM Badge](https://nodei.co/npm/npm-packist.png)](https://npmjs.com/package/npm-packist)

## Install

```sh
npm install npm-packist
```

## Usage

```js
const npmPackist = require("npm-packist");

(async () => {
	await npmPackist(".")
	//=> 'C:\\Users\\richi\\Documents\\GitHub\\npm-packist\\the-module-v0.0.0.tgz'
})()
```

## API

### npmPackist(cwd?, options?)

#### cwd

Type: `string`

The directory to pack the modules from.

#### options

Type: `object`

##### fileName

Type: `string`\
Default: (Generated from package name and version)

The filename to save the tgz file as.
