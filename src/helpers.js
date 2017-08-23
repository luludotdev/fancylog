// Package Dependencies
const rightpad = require('right-pad')
const chalk = require('chalk')
const dateFormat = require('dateformat')

/**
 * Expands Objects and Arrays to strings
 * @param {*} input Input
 * @returns {*}
 */
const objectHandler = input => {
  if (typeof input === 'object' || Array.isArray(input)) return `↵\n${JSON.stringify(input, null, 2)}`
  else return input
}

/**
 * Generate a standard timestamp
 * @returns {string}
 */
const timestamp = () => dateFormat(new Date(), '[dd/mm/yyyy hh:MM:ss]')

/**
 * Generate a Level String
 * @param {string} level Level String ID
 * @returns {string}
 */
const levelString = level => {
  switch (level) {
    case 'info':
      return chalk.green('[INFO]')
    case 'debug':
      return chalk.cyan('[DEBUG]')
    case 'error':
      return chalk.red('[ERROR]')
    case 'verbose':
      return chalk.magenta('[VERBOSE]')
    case 'warn':
      return chalk.yellow('[WARN]')
    default:
      return chalk.green('[INFO]')
  }
}

/**
 * 
 * @param {*} str Log Input
 * @param {string} level Level String ID
 * @returns {string}
 */
const generateString = (str, level) => {
  let type = rightpad(levelString(level), 9)
  let time = timestamp()

  let string = objectHandler(str)
  return `${type} ${time} ${string}`
}

module.exports = {
  objectHandler,
  timestamp,
  levelString,
  generateString,
}
