// Local Dependencies
const { generateString } = require('./helpers')

// Package Dependencies
const fs = require('fs-extra')
const strip = require('strip-ansi')

/**
 * Object to log to a file as well as the console
 */
class FileLogger {
  /**
   * @param {string} path Output logfile path
   */
  constructor (path) {
    if (path === undefined || path === null || path === '') throw new Error('Path cannot be undefined or a blank string')

    /**
     * @type {string}
     */
    this.path = path
  }

  /**
   * Internal Helper Logging File
   * @private
   * @param {*} value Log Input
   * @param {string} level Level String ID
   */
  _log (value, level) {
    let string = `${generateString(value, level)}\n`
    console.log(string)

    fs.ensureFile(this.path)
      .then(() => fs.appendFile(this.path, strip(string)))
      .catch(err => { throw err })
  }

  /**
   * Logs an object at INFO Level
   * @param {*} value Value to output
   */
  info (value) { this._log(value, 'info') }

  /**
   * Logs an object at DEBUG Level
   * @param {*} value Value to output
   */
  debug (value) { this._log(value, 'debug') }

  /**
   * Logs an object at ERROR Level
   * @param {*} value Value to output
   */
  error (value) { this._log(value, 'error') }

  /**
   * Logs an object at VERBOSE Level
   * @param {*} value Value to output
   */
  verbose (value) { this._log(value, 'verbose') }

  /**
   * Logs an object at WARN Level
   * @param {*} value Value to output
   */
  warn (value) { this._log(value, 'warn') }

  /**
   * Logs an object at INFO Level
   * @param {*} value Value to output
   */
  i (value) { this._log(value, 'info') }

  /**
   * Logs an object at DEBUG Level
   * @param {*} value Value to output
   */
  d (value) { this._log(value, 'debug') }

  /**
   * Logs an object at ERROR Level
   * @param {*} value Value to output
   */
  e (value) { this._log(value, 'error') }

  /**
   * Logs an object at VERBOSE Level
   * @param {*} value Value to output
   */
  v (value) { this._log(value, 'verbose') }

  /**
   * Logs an object at WARN Level
   * @param {*} value Value to output
   */
  w (value) { this._log(value, 'warn') }
}

module.exports = FileLogger
