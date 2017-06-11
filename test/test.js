/*
  FancyLog - Logging made Pretty
  By Jack Baron
  Copyright (c) Jack Baron 2016
  Licensed under ISC License

  Testing Module
*/

// Require Dependencies
const Log = require('../src/')
const pathLog = new Log(`${__dirname}/default.log`)

// Try to log all functions
try {
  Log.i('aa')
  Log.d('aa')
  Log.e('aa')
  Log.v('aa')
  Log.w('aa')
  pathLog.i('aa')
  pathLog.d('aa')
  pathLog.e('aa')
  pathLog.v('aa')
  pathLog.w('aa')

  // Exit Nicely
  process.exit(0)
} catch (ex) {
  // Log Exception
  console.error(ex)
  // Exit with force
  process.exit(1)
}
