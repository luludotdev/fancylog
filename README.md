# Fancy Log

## About
FancyLog - Logging made Pretty
By Jack Baron
Copyright (c) Jack Baron 2016
Licensed under ISC License

## Installation
Install the package using
```npm install fancylog```

To add it as a dependency, use
```npm install --save```

Once installed, require the package with

```js
var log = require('fancylog');
```

## Usage
Call one of the following functions for different levels of warning.

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

### Configurables
If you wish to change the log filename or stop it outputting to a file alltogether, you can tweak the configurables at the top of `log.js`

```js
// Configurables
var logName = "default.log";
var logToFile = true;
```

## Examples

```js
// Info
log.i("Log Message");

// Debug
log.d("Log Message");

// Error
log.e("Log Message");

// Warn
log.v("Log Message");

// Verbose
log.w"Log Message");
```

Would Output

```
[INFO] [01/01/1970 00:00:00] Log Message
[DEBUG] [01/01/1970 00:00:00] Log Message
[ERROR] [01/01/1970 00:00:00] Log Message
[VERBOSE] [01/01/1970 00:00:00] Log Message
[WARN] [01/01/1970 00:00:00] Log Message
```

## Credits
- Jack Baron (me@jackbaron.com) - Author
- David Jones (https://github.com/drj-io) - create-if-not-exist