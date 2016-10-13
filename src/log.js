/*
  FancyLog - Logging made Pretty
  By Jack Baron
  Copyright (c) Jack Baron 2016
  Licensed under ISC License

  Logging Module
*/

// Require Dependants
const cIfNExists  = require('create-if-not-exist')
const fs          = require('fs')
const path        = require('path')

// Colour Definitions
let termRed     = `\x1b[31m`
let termGreen   = `\x1b[32m`
let termYellow  = `\x1b[33m`
let termBlue    = `\x1b[34m`
let termMagenta = `\x1b[35m`
let termCyan    = `\x1b[36m`
let termReset   = `\x1b[39m`

// Number Formatting for Date
if (typeof Number.prototype.digitFormat !== 'function') {
  Number.prototype.digitFormat = function () {
    return ("0" + this).slice(-2)
  }
}

// Main Function
let FancyLog = function (path) {
  this.path = path
}

FancyLog.prototype.log = function (msg, level) {
  // Define Level Colour
  let colour
  switch (level.toLowerCase()) {
    case 'info':
      colour = termGreen
      break
    case 'debug':
      colour = termCyan
      break
    case 'error':
      colour = termRed
      break
    case 'verbose':
      colour = termMagenta
      break
    case 'warn':
      colour = termYellow
      break
    default:
      colour = termGreen
      break
  }

  // Level text is level all uppercase bcus reasons
  let levelText = level.toUpperCase()
  
  // Create a timestamp
  let d = new Date()
  let timestamp = `[${d.getDate().digitFormat()}/${(d.getMonth() + 1).digitFormat()}/${d.getFullYear()} ${d.getHours().digitFormat()}:${d.getMinutes().digitFormat()}:${d.getSeconds().digitFormat()}]`

  let padding = "", numSpaces = 7 - levelText.length
  for (let i = 0; i < numSpaces; i++) {
    padding += " "
  }

  // Create formatted messages for console and text output
  let termData  = `${colour}[${levelText}]${padding} ${termReset}${timestamp} ${msg}`
  let logData 	= `[${levelText}]${padding} ${timestamp} ${msg}`
    
  // Show this in the console
  console.log(termData)

  // If a path was given, ouput.
  if (this.path !== undefined) {
    try {
      cIfNExists(this.path, "")
      fs.appendFile(this.path, `${logData}\n`, 'utf8', err => { if (err) console.error("Failed to output to log.") })
    } catch (ex) {
      console.log(ex)
    }
  }
}

// Info
FancyLog.prototype.info = function (msg) {
  this.log(msg, 'info')
}
FancyLog.prototype.i = function (msg) {
  this.log(msg, 'info')
}

// Debug
FancyLog.prototype.debug = function (msg) {
  this.log(msg, 'debug')
}
FancyLog.prototype.d = function (msg) {
  this.log(msg, 'debug')
}

// Error
FancyLog.prototype.error = function (msg) {
  this.log(msg, 'error')
}
FancyLog.prototype.e = function (msg) {
  this.log(msg, 'error')
}

// Verbose
FancyLog.prototype.verbose = function (msg) {
  this.log(msg, 'verbose')
}
FancyLog.prototype.v = function (msg) {
  this.log(msg, 'verbose')
}

// Warn
FancyLog.prototype.warn = function (msg) {
  this.log(msg, 'warn')
}
FancyLog.prototype.w = function (msg) {
  this.log(msg, 'warn')
}

module.exports = FancyLog