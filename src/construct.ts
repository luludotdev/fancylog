import chalk from 'chalk'
import dateFormat from 'dateformat'
import stripAnsi from 'strip-ansi'
import { inspect } from './inspect'

const now = () => {
  const date = dateFormat(new Date(), '[dd/mm/yyyy hh:MM:ss]')
  return chalk.reset(date)
}

export type LogLevel = 'info' | 'debug' | 'error' | 'verbose' | 'warn'

const level = (logLevel: LogLevel) => {
  switch (logLevel) {
    case 'info':
      return chalk.green`[INFO]`
    case 'debug':
      return chalk.cyan`[DEBUG]`
    case 'error':
      return chalk.red`[ERROR]`
    case 'verbose':
      return chalk.magenta`[VERBOSE]`
    case 'warn':
      return chalk.yellow`[WARN]`
  }
}

const prefix = (logLevel: LogLevel) => {
  const type = level(logLevel).padEnd(19)
  const time = now()

  return `${time} ${type} |`
}

export const construct = (logLevel: LogLevel, object: any, strip?: boolean) => {
  const pre = prefix(logLevel)
  const pad = ' '.repeat(stripAnsi(pre).length - 1)

  const inspected = inspect(object)
  const str = inspected
    .split('\n')
    .map((line, i) => (i === 0 ? `${pre} ${line}` : `${pad}| ${line}`))
    .join('\n')

  return strip === true ? stripAnsi(str) : str
}
