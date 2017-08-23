// Local Dependencies
const { generateString } = require('./helpers')

/**
 * Logs an object at INFO Level
 * @param {*} value Value to output
 */
const info = value => { console.log(generateString(value, 'info')) }

/**
 * Logs an object at DEBUG Level
 * @param {*} value Value to output
 */
const debug = value => { console.log(generateString(value, 'debug')) }

/**
 * Logs an object at ERROR Level
 * @param {*} value Value to output
 */
const error = value => { console.log(generateString(value, 'error')) }

/**
 * Logs an object at VERBOSE Level
 * @param {*} value Value to output
 */
const verbose = value => { console.log(generateString(value, 'verbose')) }

/**
 * Logs an object at WARN Level
 * @param {*} value Value to output
 */
const warn = value => { console.log(generateString(value, 'warn')) }

module.exports = {
  info,
  debug,
  error,
  verbose,
  warn,
}
