# FancyLog
[![Travis](https://img.shields.io/travis/lolPants/fancylog.svg?maxAge=2592000?style=flat-square)](https://www.npmjs.com/package/fancylog) 

## About
FancyLog - By Jack Baron  
Copyright (c) Jack Baron 2017  
Licensed under ISC License  

## Installation
If you're using Yarn:
```sh
yarn add fancylog
```

If you're using NPM:
```sh
npm install --save fancylog
```

Once installed, require the package with

```js
const log = require('fancylog')
```

## Usage
Call one of the following functions or shortcuts for different levels of warning.

```js
/*
 * Info     (i, info)
 * Debug    (d, debug)
 * Error    (e, error)
 * Verbose  (v, verbose, verb)
 * Warning  (w, warning, warn)
 */
```

Example Call:
```js
// Code
log.i('SOME TEXT HERE')

// Would Output:
// [INFO]    [01/01/1970 00:00:00] SOME TEXT HERE
```

### File Output
To output to a file, pass the file path as an argument when creating the new class

```js
const log = new FancyLog('./default.log')
```

## Further Examples

```js
// Info
log.info('Log Message')
// Debug
log.d('Log Message')
// Error
log.error('Log Message')
// Verbose
log.v('Log Message')
// Warn
log.warn('Log Message')
```

Would Output

```
[INFO]    [01/01/1970 00:00:00] Log Message
[DEBUG]   [01/01/1970 00:00:00] Log Message
[ERROR]   [01/01/1970 00:00:00] Log Message
[VERBOSE] [01/01/1970 00:00:00] Log Message
[WARN]    [01/01/1970 00:00:00] Log Message
```

## Credits
- Jack Baron    (https://github.com/lolpants) - Author
- David Jones   (https://github.com/drj-io)   - create-if-not-exist