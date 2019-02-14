# 📜 Fancy Log

[![NPM version](https://img.shields.io/npm/v/fancylog.svg?maxAge=3600)](https://www.npmjs.com/package/fancylog)
[![NPM downloads](https://img.shields.io/npm/dt/fancylog.svg?maxAge=3600)](https://www.npmjs.com/package/fancylog)
[![Build status](https://travis-ci.org/lolPants/fancylog.svg)](https://travis-ci.org/lolPants/fancylog)
[![Dependencies](https://img.shields.io/david/lolpants/fancylog.svg?maxAge=3600)](https://david-dm.org/lolpants/fancylog)
[![Coverage Status](https://coveralls.io/repos/github/lolPants/fancylog/badge.svg?branch=master)](https://coveralls.io/github/lolPants/fancylog?branch=master)

_Fancy Logging!_  
Written in TypeScript, compiled down to ES5 for use in any Node.js version!

## 💾 Installation
The package is on the NPM registry as `fancylog`. Simply install it with your NPM client of choice.

## 🔧 Usage
First, import the module:
```js
// CommonJS
const log = require('fancylog')

// ES Modules
import * as log from 'fancylog'
```

From there you can call any of the log level functions:
```js
log.info()
log.debug()
log.error()
log.verbose()
log.warn()
```

You can also instantiate the `FileLogger` class to automatically log to a file as well as the console.
```js
// CommonJS
const { FileLogger } = require('fancylog')

// ES Modules
import { FileLogger } from 'fancylog'

const log = new FileLogger('/path/to/file.log')
log.info()
```

### 📝 Example Output
Calling:
```js
log.info('hello world')
log.debug('hello world')
log.verbose('hello world')
```

Would result in:
```log
[14/02/2019 09:02:54] [INFO]    | hello world
[14/02/2019 09:02:54] [DEBUG]   | hello world
[14/02/2019 09:02:54] [VERBOSE] | hello world
```
