# Fancy Log

## About
FancyLog - Logging made Pretty
By Jack Baron
Copyright (c) Jack Baron 2016
Licensed under ISC License

## Installation
Install the package using
```npm i fancylog```

To add it as a dependency, use
```npm i --save fancylog```

Once installed, require the package with

```js
const FancyLog = require('fancylog')
const log = new FancyLog()
```

## Usage
Call one of the following functions or shortcuts for different levels of warning.

```js
i: info
d: debug
e: error
v: verbose
w: warn
```

Example Call

```js
log.i(msg);
// Where msg is the message you want to log
```

### File Output
To output to a file, pass the file path as an argument when creating the new class

```js
// Example
const log = new FancyLog(__dirname + '/default.log')
```

## Examples

```js
// Info
log.info("Log Message");
// Debug
log.d("Log Message");
// Error
log.error("Log Message");
// Warn
log.v("Log Message");
// Verbose
log.warn("Log Message");
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
- Jack Baron (me@jackbaron.com) - Author
- David Jones (https://github.com/drj-io) - create-if-not-exist