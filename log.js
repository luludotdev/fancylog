// Fancy log file function
// Made by lolPants

var logName = "default.log"

// Require Dependants
var createIfNotExist = require("create-if-not-exist");
var fs = require("fs");

function log(msg, level, color) {
  // Set Path
  var logPath = "./" + logName;
  
  if (msg == null) {
    // If no msg arg, make a newline.
    createIfNotExist(logPath, "");
    fs.appendFile(logPath, "---" + '\n', 'utf8', function(err) {
      // If no worky...
      if (err) {
        // Whoopsy
        console.error("Failed to output to log");
      }
    });
  } else {
    
    // Gets the date
    var d = new Date();
    // Constructs a date formatted message
    // "You must constuct additional date formatted messages." - DerpyChap
    var termData 	= color + '[' + level + ']\x1b[37m [' + d.getDate() + '/' + (d.getMonth() + 1) + '/' + d.getFullYear() + ' ' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds() + '] ' + msg;
    var logData 	= '[' + level + '] [' + d.getDate() + '/' + (d.getMonth() + 1) + '/' + d.getFullYear() + ' ' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds() + '] ' + msg;
    
    // Show this in the console
    console.log(termData);
    
    // Create a log file if it doesn't already exist. Used on first run.
    createIfNotExist(logPath, "");
    // Check if it can be written.
    fs.access(logPath, fs.R_OK | fs.W_OK, function(err) {
      // Uh oh
      if (err) {
        // cant save to file
        console.error("Failed to output to " + logName);
      } else {
        // Try to log
        fs.appendFile(logPath, logData + '\n', 'utf8', function(err) {
          // If no worky...
          if (err) {
            // Whoopsy
            console.error("Failed to output to " + logName);
          }
        });
      }
    });
  }
}

function info(msg) {
  log(msg, "INFO", "\x1b[32m");
}

function debug(msg) {
  log(msg, "INFO", "\x1b[39m");
}

function error(msg) {
  log(msg, "ERROR", "\x1b[31m");
}

function verbose(msg) {
  log(msg, "VERBOSE", "\x1b[39m");
}

function warn(msg) {
  log(msg, "WARN", "\x1b[33m");
}

module.exports = {
  i: info,
  d: debug,
  e: error,
  v: verbose,
  w: warn
};