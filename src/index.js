// Local Dependencies
const { info, debug, error, verbose, warn } = require('./levels')
const FancylogFile = require('./object')

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
  FancylogFile,
}
