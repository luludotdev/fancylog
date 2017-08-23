// Local Dependencies
const { info, debug, error, verbose, warn } = require('./levels')
const FileLogger = require('./object')

module.exports = {
  // Main Methods
  info,
  debug,
  error,
  verbose,
  warn,

  // Aliases
  i: info,
  d: debug,
  e: error,
  v: verbose,
  w: warn,

  // Class Object
  FileLogger,
}
