/*
  FancyLog - Logging made Pretty
  By Jack Baron
  Copyright (c) Jack Baron 2016
  Licensed under ISC License
*/

// Configurables
var logName = "default.log";
var logToFile = true;

// Require Dependants
var createIfNotExist = require("create-if-not-exist");
var fs = require("fs");

// Colour Definitions
var termRed     = `\x1b[31m`;
var termGreen   = `\x1b[32m`;
var termYellow  = `\x1b[33m`;
var termBlue    = `\x1b[34m`;
var termMagenta = `\x1b[35m`;
var termCyan    = `\x1b[36m`;
var termReset   = `\x1b[39m`;

function log(msg, level, color) {
  // Set Path
  var logPath = "./" + logName;
  
  if (msg == null) {
    // If no msg arg, make a newline.
    createIfNotExist(logPath, "");
    if (logToFile) fs.appendFile(logPath, `---\n`, 'utf8', err => { if (err) console.error("Failed to output to log."); });
  } else {
    
    // Gets the date
    var d = new Date();
    // Constructs a date formatted message
    // "You must constuct additional date formatted messages." - DerpyChap
    var termData  = `${color}[${level}] ${termReset}[${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()} ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}] ${msg}`;
    var logData 	= `[${level}] [${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()} ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}] ${msg}`;
    
    // Show this in the console
    console.log(termData);
    
    // Create a log file if it doesn't already exist. Used on first run.
    createIfNotExist(logPath, "");
    // Check if it can be written.
    fs.access(logPath, fs.R_OK | fs.W_OK, err => {
      // Uh oh
      if (err) {
        // cant save to file
        console.error("Failed to output to " + logName);
      } else {
        // Try to log
        if (logToFile) fs.appendFile(logPath, `${logData}\n`, 'utf8', err => { if (err) console.error("Failed to output to log."); });
      }
    });
  }
}

function info(msg) {
  log(msg, "INFO", termGreen);
}
function debug(msg) {
  log(msg, "DEBUG", termCyan);
}
function error(msg) {
  log(msg, "ERROR", termRed);
}
function verbose(msg) {
  log(msg, "VERBOSE", termMagenta);
}
function warn(msg) {
  log(msg, "WARN", termYellow);
}

module.exports = {
  i: info,
  d: debug,
  e: error,
  v: verbose,
  w: warn
};