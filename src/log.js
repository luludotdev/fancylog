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
 * @param {string} path - Output File Path
 * @private
 */
const _log = (msg, level, path) => {
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
  if (path !== undefined) {
    try {
      create(path, '')
      fs.readFile(path, 'utf8', (err, res) => {
        console.log(err, res)
      })
    } catch (ex) {
      console.log(ex)
    }
  }
}

/**
 * Logs at INFO Level
 * @param {string} msg - Message to Log
 * @param {string} [path] - Output File Path
 * @private
 */
const _i = (msg, path = undefined) => { _log(msg, 'info', path) }

/**
 * Logs at DEBUG Level
 * @param {string} msg - Message to Log
 * @param {string} [path] - Output File Path
 * @private
 */
const _d = (msg, path = undefined) => { _log(msg, 'debug', path) }

/**
 * Logs at ERROR Level
 * @param {string} msg - Message to Log
 * @param {string} [path] - Output File Path
 * @private
 */
const _e = (msg, path = undefined) => { _log(msg, 'error', path) }

/**
 * Logs at VERBOSE Level
 * @param {string} msg - Message to Log
 * @param {string} [path] - Output File Path
 * @private
 */
const _v = (msg, path = undefined) => { _log(msg, 'verbose', path) }

/**
 * Logs at WARN Level
 * @param {string} msg - Message to Log
 * @param {string} [path] - Output File Path
 * @private
 */
const _w = (msg, path = undefined) => { _log(msg, 'warn', path) }

module.exports = {
  _i: _i,
  _d: _d,
  _e: _e,
  _v: _v,
  _w: _w,
}
