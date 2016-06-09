# Fancy Log

## What?
Simple, yet easy to use log system for NodeJS
Made by Jack Baron

Example output:
`[INFO] [1/1/1970 00:00:00] Log Thing` 

## How?

```js
// Import the package.
var log = require("fancylog");

// Use the file
log.v("Log Message");
```

---

### What functions can I use?
```js
// Info
log.i("Log Message");

// Debug
log.d("Log Message");

// Error
log.e("Log Message");

// Warn
log.w("Log Message");

// Verbose
log.v("Log Message");
```