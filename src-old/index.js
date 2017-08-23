/*
  FancyLog - Logging made Pretty
  By Jack Baron
  Copyright (c) Jack Baron 2016
  Licensed under ISC License
*/

// Local Dependencies
const log = require('./log.js')

class FancyLog {
  static get info () { return log._i }
  static get i () { return log._i }

  static get debug () { return log._d }
  static get d () { return log._d }

  static get error () { return log._e }
  static get e () { return log._e }

  static get verbose () { return log._v }
  static get verb () { return log._v }
  static get v () { return log._v }

  static get warning () { return log._w }
  static get warn () { return log._w }
  static get w () { return log._w }

  /**
   * Log with output file
   * @param {string} path - Path to output file
   */
  constructor (path) {
    if (path !== undefined) this._path = path
    else throw new Error('No Path Specified')
  }

  info (msg) { log._i(msg, this._path) }
  i (msg) { log._i(msg, this._path) }

  debug (msg) { log._d(msg, this._path) }
  d (msg) { log._d(msg, this._path) }

  error (msg) { log._e(msg, this._path) }
  e (msg) { log._e(msg, this._path) }

  verbose (msg) { log._v(msg, this._path) }
  verb (msg) { log._v(msg, this._path) }
  v (msg) { log._v(msg, this._path) }

  warning (msg) { log._w(msg, this._path) }
  warn (msg) { log._w(msg, this._path) }
  w (msg) { log._w(msg, this._path) }
}

module.exports = FancyLog
