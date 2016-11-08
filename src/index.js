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

const TERMINAL_COLOURS = {
  red: `\x1b[31m`,
  green: `\x1b[32m`,
  yellow: `\x1b[33m`,
  blue: `\x1b[34m`,
  magenta: `\x1b[35m`,
  cyan: `\x1b[36m`,
  reset: `\x1b[39m`,
}

class FancyLog {
  constructor (path) {
    this.path = path
  }
}

module.exports = FancyLog
