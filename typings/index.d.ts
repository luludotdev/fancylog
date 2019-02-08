declare module 'fancylog' {
  type LogFunction = (value: any) => void

  type LogLevel =
    | 'info'
    | 'debug'
    | 'error'
    | 'verbose'
    | 'warn'

  export class FileLogger {
    constructor (path: string)

    public readonly path: string
    private _log: (value: any, level: LogLevel) => void

    public info: LogFunction
    public debug: LogFunction
    public error: LogFunction
    public verbose: LogFunction
    public warn: LogFunction
  }

  export const info: LogFunction
  export const debug: LogFunction
  export const error: LogFunction
  export const verbose: LogFunction
  export const warn: LogFunction
}
