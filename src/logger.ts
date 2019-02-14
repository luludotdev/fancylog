import { construct, LogLevel } from './construct'

const log = (logLevel: LogLevel, object: any) => {
  const str = construct(logLevel, object)
  console.log(str)
}

export type LogFunction = (object: any) => void

export const info: LogFunction = object => log('info', object)
export const debug: LogFunction = object => log('debug', object)
export const error: LogFunction = object => log('error', object)
export const verbose: LogFunction = object => log('verbose', object)
export const warn: LogFunction = object => log('warn', object)
