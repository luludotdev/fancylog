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
  static get v () { return log._v }

  static get warn () { return log._w }
  static get w () { return log._w }
}

module.exports = FancyLog
