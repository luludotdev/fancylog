/*
  FancyLog - Logging made Pretty
  By Jack Baron
  Copyright (c) Jack Baron 2016
  Licensed under ISC License
*/

// Require Dependencies
const create = require('create-if-not-exist')
const fs = require('fs')
const lib = require('./lib.js')

// Number Formatting for Date
if (typeof Number.prototype.digitFormat !== 'function') {
  Number.prototype.digitFormat = function format () {
    let parsed = `0${this}`.slice(-2)
    return parsed
  }
}

/**
 * Logging function
 * @param {string} msg - Message to Log
 * @param {string} [level] - Logging Level
 * @private
 */
const _log = (msg, level) => {
  // Define Level Colour
  let colour = lib._colourSwitch(level)

  // Level text is level all uppercase bcus reasons
  let levelText = level.toUpperCase()

  let padding = '', numSpaces = 7 - levelText.length
  for (let i = 0; i < numSpaces; i++) {
    padding += ' '
  }

  // Create formatted messages for console and text output
  let timestamp = lib._timestamp()
  let termData = `${colour}[${levelText}]${padding} ${lib.TERMINAL_COLOURS.RESET}${timestamp} ${msg}`
  let logData = `[${levelText}]${padding} ${timestamp} ${msg}`

  // Show this in the console
  console.log(termData)

  // If a path was given, ouput.
  if (this.path !== undefined) {
    try {
      create(this.path, '')
      fs.appendFile(this.path, `${logData}\n`, 'utf8', err => { if (err) console.error('Failed to output to log.') })
    } catch (ex) {
      console.log(ex)
    }
  }
}

/**
 * Logs at INFO Level
 * @param {string} msg - Message to Log
 * @private
 */
const _i = msg => { _log(msg, 'info') }

/**
 * Logs at DEBUG Level
 * @param {string} msg - Message to Log
 * @private
 */
const _d = msg => { _log(msg, 'debug') }

/**
 * Logs at ERROR Level
 * @param {string} msg - Message to Log
 * @private
 */
const _e = msg => { _log(msg, 'error') }

/**
 * Logs at VERBOSE Level
 * @param {string} msg - Message to Log
 * @private
 */
const _v = msg => { _log(msg, 'verbose') }

/**
 * Logs at WARN Level
 * @param {string} msg - Message to Log
 * @private
 */
const _w = msg => { _log(msg, 'warn') }

module.exports = {
  _i: _i,
  _d: _d,
  _e: _e,
  _v: _v,
  _w: _w,
}
