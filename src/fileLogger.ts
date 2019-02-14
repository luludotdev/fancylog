import stripAnsi from 'strip-ansi'
import { construct, LogLevel } from './construct'
import { INVALID_PATH } from './errors'
import fse from './fs'

export class FileLogger {
  private path: string

  constructor(path: string) {
    if (path === undefined || path === null || path === '') {
      throw new Error(INVALID_PATH)
    }

    this.path = path
  }

  public info(object: any) {
    this.log('info', object)
  }

  public debug(object: any) {
    this.log('debug', object)
  }

  public error(object: any) {
    this.log('error', object)
  }

  public verbose(object: any) {
    this.log('verbose', object)
  }

  public warn(object: any) {
    this.log('warn', object)
  }

  private log(logLevel: LogLevel, object: any) {
    const str = construct(logLevel, object)
    const stripped = `${stripAnsi(str)}\n`
    console.log(str)

    fse
      .ensureFile(this.path)
      .then(() => fse.appendFile(this.path, stripped))
      .catch(err => {
        throw err
      })
  }
}
