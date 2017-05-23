/*
  FancyLog - Logging made Pretty
  By Jack Baron
  Copyright (c) Jack Baron 2016
  Licensed under ISC License

  Testing Module
*/

// Require Dependencies
const log = require('../src/')

// Try to log all functions
try {
  log.i('aa')
  log.d('aa')
  log.e('aa')
  log.v('aa')
  log.w('aa')

  // Exit Nicely
  process.exit(0)
} catch (ex) {
  // Log Exception
  console.error(ex)
  // Exit with force
  process.exit(1)
}
