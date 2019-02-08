const FileLogger = require('./object')
const { info, debug, error, verbose, warn } = require('./levels')

module.exports = {
  // Main Methods
  info,
  debug,
  error,
  verbose,
  warn,

  // Class Object
  FileLogger,
}
