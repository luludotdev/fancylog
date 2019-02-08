declare module 'fancylog' {
  type LogFunction = (value: any) => void

  type LogLevel =
    | 'info'
    | 'debug'
    | 'error'
    | 'verbose'
    | 'warn'

  class FileLogger {
    constructor (path: string)

    public readonly path: string
    private _log: (value: any, level: LogLevel) => void

    public info: LogFunction
    public debug: LogFunction
    public error: LogFunction
    public verbose: LogFunction
    public warn: LogFunction
  }

  interface IMain {
    info: LogFunction
    debug: LogFunction
    error: LogFunction
    verbose: LogFunction
    warn: LogFunction

    FileLogger: FileLogger
  }
  
  export = IMain
}
