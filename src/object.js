const fs = require('fs')
const { parse: parsePath } = require('path')
const { promisify } = require('util')
const strip = require('strip-ansi')
const mkdirp = require('mkdirp')
const { generateString } = require('./helpers')

const fse = {
  appendFile: promisify(fs.appendFile),
  exists: promisify(fs.exists),
  stat: promisify(fs.stat),
  mkdirp: promisify(mkdirp),
  writeFile: promisify(fs.writeFile),
  ensureFile: async path => {
    if (await fse.exists(path) && (await fse.stat(path)).isFile() === true) return undefined

    const { dir } = parsePath(path)
    await fse.mkdirp(dir)

    await fse.writeFile(path, '')
    return undefined
  },
}

/**
 * Object to log to a file as well as the console
 */
class FileLogger {
  /**
   * @param {string} path Output logfile path
   */
  constructor (path) {
    if (path === undefined || path === null || path === '') throw new Error('Path cannot be undefined or a blank string')

    /**
     * @type {string}
     */
    this.path = path
  }

  /**
   * Internal Helper Logging File
   * @private
   * @param {*} value Log Input
   * @param {string} level Level String ID
   */
  _log (value, level) {
    let string = `${generateString(value, level)}\n`
    console.log(string)

    fse.ensureFile(this.path)
      .then(() => fse.appendFile(this.path, strip(string)))
      .catch(err => { throw err })
  }

  /**
   * Logs an object at INFO Level
   * @param {*} value Value to output
   */
  info (value) { this._log(value, 'info') }

  /**
   * Logs an object at DEBUG Level
   * @param {*} value Value to output
   */
  debug (value) { this._log(value, 'debug') }

  /**
   * Logs an object at ERROR Level
   * @param {*} value Value to output
   */
  error (value) { this._log(value, 'error') }

  /**
   * Logs an object at VERBOSE Level
   * @param {*} value Value to output
   */
  verbose (value) { this._log(value, 'verbose') }

  /**
   * Logs an object at WARN Level
   * @param {*} value Value to output
   */
  warn (value) { this._log(value, 'warn') }
}

module.exports = FileLogger
