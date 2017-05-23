/*
  FancyLog - Logging made Pretty
  By Jack Baron
  Copyright (c) Jack Baron 2016
  Licensed under ISC License
*/

const _T = {
  RED: `\x1b[31m`,
  GREEN: `\x1b[32m`,
  YELLOW: `\x1b[33m`,
  BLUE: `\x1b[34m`,
  MAGENTA: `\x1b[35m`,
  CYAN: `\x1b[36m`,
  RESET: `\x1b[39m`,
}

/**
 * Timestamp Creation
 * @returns {string} Current Timestamp
 * @private
 */
const _t = () => {
  // Create a timestamp
  let d = new Date()

  let date = `${d.getDate().digitFormat()}/${(d.getMonth() + 1).digitFormat()}/${d.getFullYear()}`
  let time = `${d.getHours().digitFormat()}:${d.getMinutes().digitFormat()}:${d.getSeconds().digitFormat()}`

  let timestamp = `[${date} ${time}]`
  return timestamp
}

/**
 * Switch Terminal Colour based on Level
 * @param {string} level - Level to Evaluate
 * @returns {string}
 * @private
 */
const _c = level => {
  let colour
  switch (level.toLowerCase()) {
    case 'info':
      colour = _T.GREEN
      break
    case 'debug':
      colour = _T.CYAN
      break
    case 'error':
      colour = _T.RED
      break
    case 'verbose':
      colour = _T.MAGENTA
      break
    case 'warn':
      colour = _T.YELLOW
      break
    default:
      colour = _T.GREEN
      break
  }
  return colour
}

module.exports = {
  TERMINAL_COLOURS: _T,
  _timestamp: _t,
  _colourSwitch: _c,
}

