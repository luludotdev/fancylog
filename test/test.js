/*
  FancyLog - Logging made Pretty
  By Jack Baron
  Copyright (c) Jack Baron 2016
  Licensed under ISC License

  Testing Module
*/

// Require Dependencies
const path      = require('path')
const FancyLog  = require(path.join('..', 'src'))
const log       = new FancyLog()

// Try to log all functions
try {
  log.i('This is a message.')
  log.debug('Something happened.')
  log.e('ERROR: Oh Dear!')
  log.verbose('WORDS')
  log.w('Deprecated. Use something Else...')

  // Exit Nicely
  process.exit(0)
} catch (ex) {
  // Log Exception
  console.error(ex)
  // Exit with force
  process.exit(1)
}
