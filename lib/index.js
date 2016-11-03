/*
  FancyLog - Logging made Pretty
  By Jack Baron
  Copyright (c) Jack Baron 2016
  Licensed under ISC License

  Logging Module
*/

// Require Dependants
const create  = require('create-if-not-exist')
const fs      = require('fs')

// Number Formatting for Date
if (typeof Number.prototype.digitFormat !== 'function') {
  Number.prototype.digitFormat = function format () {
    let parsed = `0${this}`.slice(-2)
    return parsed
  }
}

/**
 * FancyLog Constructor
 * @constructor
 * @param {string} [path] - Output Log Path
 */
let FancyLog = function FancyLog (path) {
  this.path = path
}

/**
 * Timestamp Creation
 * @returns {string} Current Timestamp
 */
const _timestamp = () => {
  // Create a timestamp
  let d = new Date()

  let date = `${d.getDate().digitFormat()}/${(d.getMonth() + 1).digitFormat()}/${d.getFullYear()}`
  let time = `${d.getHours().digitFormat()}:${d.getMinutes().digitFormat()}:${d.getSeconds().digitFormat()}`

  let timestamp = `[${date} ${time}]`
  return timestamp
}

/**
 * Logging function
 * @param {string} msg - Message to Log
 * @param {string} [level] - Logging Level
 */
const _log = (msg, level) => {
  // Define Level Colour
  // let colour
  switch (level.toLowerCase()) {
    case 'info':
      // colour = termGreen
      break
    case 'debug':
      // colour = termCyan
      break
    case 'error':
      // colour = termRed
      break
    case 'verbose':
      // colour = termMagenta
      break
    case 'warn':
      // colour = termYellow
      break
    default:
      // colour = termGreen
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
  let termData  = `[${levelText}]${padding} ${timestamp} ${msg}`
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

/**
 * Logs at INFO Level
 * @param {string} msg - Message to Log
 */
const _info = msg => {
  _log(msg, 'info')
}

/**
 * Logs at DEBUG Level
 * @param {string} msg - Message to Log
 */
const _debug = msg => {
  _log(msg, 'debug')
}

/**
 * Logs at ERROR Level
 * @param {string} msg - Message to Log
 */
const _error = msg => {
  _log(msg, 'error')
}

/**
 * Logs at VERBOSE Level
 * @param {string} msg - Message to Log
 */
const _verbose = msg => {
  _log(msg, 'verbose')
}

/**
 * Logs at WARN Level
 * @param {string} msg - Message to Log
 */
const _warn = msg => {
  _log(msg, 'warn')
}

FancyLog.prototype.info     = _info
FancyLog.prototype.i        = _info

FancyLog.prototype.debug    = _debug
FancyLog.prototype.d        = _debug

FancyLog.prototype.error    = _error
FancyLog.prototype.e        = _error

FancyLog.prototype.verbose  = _verbose
FancyLog.prototype.v        = _verbose

FancyLog.prototype.warn     = _warn
FancyLog.prototype.w        = _warn

module.exports = FancyLog
