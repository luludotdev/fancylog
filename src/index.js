/*
  FancyLog - Logging made Pretty
  By Jack Baron
  Copyright (c) Jack Baron 2016
  Licensed under ISC License

  Logging Module
*/

// Require Dependants
const create = require('create-if-not-exist')
const fs = require('fs')

// Number Formatting for Date
if (typeof Number.prototype.digitFormat !== 'function') {
  Number.prototype.digitFormat = function format () {
    let parsed = `0${this}`.slice(-2)
    return parsed
  }
}

/**
 * Timestamp Creation
 * @returns {string} Current Timestamp
 * @private
 */
const _timestamp = () => {
  // Create a timestamp
  let d = new Date()

  let date = `${d.getDate().digitFormat()}/${(d.getMonth() + 1).digitFormat()}/${d.getFullYear()}`
  let time = `${d.getHours().digitFormat()}:${d.getMinutes().digitFormat()}:${d.getSeconds().digitFormat()}`

  let timestamp = `[${date} ${time}]`
  return timestamp
}

const TERMINAL_COLOURS = {
  red: `\x1b[31m`,
  green: `\x1b[32m`,
  yellow: `\x1b[33m`,
  blue: `\x1b[34m`,
  magenta: `\x1b[35m`,
  cyan: `\x1b[36m`,
  reset: `\x1b[39m`,
}

/**
 * FancyLog Class
 * @namespace
 */
class FancyLog {
  /**
   * FancyLog Constructor
   * @constructor
   * @param {string} [path] - Output Log Path
   */
  constructor (path) {
    this.path = path
  }

  /**
   * Logging function
   * @param {string} msg - Message to Log
   * @param {string} [level] - Logging Level
   * @private
   */
  _log (msg, level = '') {
    // Define Level Colour
    let colour
    switch (level.toLowerCase()) {
      case 'info':
        colour = TERMINAL_COLOURS.green
        break
      case 'debug':
        colour = TERMINAL_COLOURS.cyan
        break
      case 'error':
        colour = TERMINAL_COLOURS.red
        break
      case 'verbose':
        colour = TERMINAL_COLOURS.magenta
        break
      case 'warn':
        colour = TERMINAL_COLOURS.yellow
        break
      default:
        colour = TERMINAL_COLOURS.green
        break
    }

    // Level text is level all uppercase bcus reasons
    let levelText = level.toUpperCase()

    let padding = '', numSpaces = 7 - levelText.length
    for (let i = 0; i < numSpaces; i++) {
      padding += ' '
    }

    // Create formatted messages for console and text output
    let timestamp = _timestamp()
    let termData  = `${colour}[${levelText}]${padding} ${TERMINAL_COLOURS.reset}${timestamp} ${msg}`
    let logData 	= `[${levelText}]${padding} ${timestamp} ${msg}`

    // Show this in the console
    console.log(termData)

    // If a path was given, ouput.
    if (this.path !== undefined) {
      try {
        create(this.path, '')
        fs.appendFile(this.path, `${logData}\n`, 'utf8', err => { if (err) console.error(`Failed to output to log.`) })
      } catch (ex) {
        console.log(ex)
      }
    }
  }

  _info (msg) {
    this._log(msg, 'info')
  }

  _debug (msg) {
    this._log(msg, 'debug')
  }

  _error (msg) {
    this._log(msg, 'error')
  }

  _verbose (msg) {
    this._log(msg, 'verbose')
  }

  _warn (msg) {
    this._log(msg, 'warn')
  }

  /**
   * Log at INFO Level
   * @param {Object} msg - Message to Log
   * @memberof FancyLog
   */
  info (msg) {
    this._info(msg)
  }

  /**
   * Log at INFO Level (Alias of info)
   * @param {Object} msg - Message to Log
   * @memberof FancyLog
   */
  i (msg) {
    this._info(msg)
  }

  /**
   * Log at DEBUG Level
   * @param {Object} msg - Message to Log
   * @memberof FancyLog
   */
  debug (msg) {
    this._debug(msg)
  }

  /**
   * Log at DEBUG Level (Alias of debug)
   * @param {Object} msg - Message to Log
   * @memberof FancyLog
   */
  d (msg) {
    this._debug(msg)
  }

  /**
   * Log at ERROR Level
   * @param {Object} msg - Message to Log
   * @memberof FancyLog
   */
  error (msg) {
    this._error(msg)
  }

  /**
   * Log at ERROR Level (Alias of error)
   * @param {Object} msg - Message to Log
   * @memberof FancyLog
   */
  e (msg) {
    this._error(msg)
  }

  /**
   * Log at VERBOSE Level
   * @param {Object} msg - Message to Log
   * @memberof FancyLog
   */
  verbose (msg) {
    this._verbose(msg)
  }

  /**
   * Log at VERBOSE Level (Alias of verbose)
   * @param {Object} msg - Message to Log
   * @memberof FancyLog
   */
  v (msg) {
    this._verbose(msg)
  }

  /**
   * Log at WARN Level
   * @param {Object} msg - Message to Log
   * @memberof FancyLog
   */
  warn (msg) {
    this._warn(msg)
  }

  /**
   * Log at WARN Level (Alias of warn)
   * @param {Object} msg - Message to Log
   * @memberof FancyLog
   */
  w (msg) {
    this._warn(msg)
  }

}

module.exports = FancyLog
