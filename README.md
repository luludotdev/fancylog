<h1 align='center'>Fancy Log <a href='https://www.npmjs.com/package/fancylog'><img src='https://img.shields.io/travis/lolPants/fancylog.svg?maxAge=2592000?style=flat-square'/></a></h1>

## Installation
If you're using Yarn: `yarn add fancylog`  
If you're using NPM: `npm install --save fancylog`

Once installed, require the package with

```js
const log = require('fancylog')
```

## Usage
Call one of the following functions or shortcuts for different levels of warning.

<table>
  <tr>
    <th>Logging Level</th>
    <th>Main Method</th>
    <th>Alias</th>
  </tr>
  <tr>
    <td>Info</td>
    <td><code>log.info</code></td>
    <td><code>log.i</code></td>
  </tr>
  <tr>
    <td>Debug</td>
    <td><code>log.debug</code></td>
    <td><code>log.d</code></td>
  </tr>
  <tr>
    <td>Error</td>
    <td><code>log.error</code></td>
    <td><code>log.e</code></td>
  </tr>
  <tr>
    <td>Verbose</td>
    <td><code>log.verbose</code></td>
    <td><code>log.v</code></td>
  </tr>
  <tr>
    <td>Warn</td>
    <td><code>log.warn</code></td>
    <td><code>log.w</code></td>
  </tr>
</table>

### Example Call
```js
// Code
log.i('SOME TEXT HERE')

// Would Output:
// [INFO]    [01/01/1970 00:00:00] SOME TEXT HERE
```

## File Output
FancyLog exposes a class called `FancylogFile`. You can use this to also output all logged messages to a file. If the file doesn't exist, it will be created.

### Usage
```js
// Require the module
const FancyLog = require('fancylog')
// Setup the class
const log = new FancyLog.FileLogger('/path/to/log.txt')

// From there, use the methods as normal from the variable 'log'
log.v('Example String')

// OUTPUT
// [VERBOSE] [01/01/1970 00:00:00] Example String
// This is also appended to /path/to/log.txt
```
