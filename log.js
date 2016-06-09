// Fancy log file function
// Made by lolPants

var logName = "default.log"

// Require Dependants
var createIfNotExist = require("create-if-not-exist");

function log(msg, level) {
  // Set Path
  var logPath = "./" + logName;
  
  // Gets the date
  var d = new Date();
  // Constructs a date formatted message
  // "You must constuct additional date formatted messages." - DerpyChap
  var data = '[' + d.getDate() + '/' + (d.getMonth() + 1) + '/' + d.getFullYear() + ' ' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds() + '] [' + level + '] ' + msg;
  
  // Show this in the console
  console.log(data);
  
  // Create a log file if it doesn't already exist. Used on first run.
  createIfNotExist(logPath, "");
  // Check if it can be written.
  fs.access(logPath, fs.R_OK | fs.W_OK, function(err) {
    // Uh oh
    if (err) {
      // cant save to file
      console.error("Failed to output to marmite.log");
    } else {
      // Try to log
      fs.appendFile(logPath, data + '\n', 'utf8', function(err) {
        // If no worky...
        if (err) {
          // Whoopsy
          console.error("Failed to output to marmite.log");
        }
      });
    }
  });
}

function info(msg) {
  log(msg, "INFO");
}

function debug(msg) {
  log(msg, "INFO");
}

function error(msg) {
  log(msg, "ERROR");
}

function verbose(msg) {
  log(msg, "VERBOSE");
}

function warn(msg) {
  log(msg, "WARN");
}

module.exports = {
  i: info,
  d: debug,
  e: error,
  v: verbose,
  w: warn
}

warn("test");