import { inspect as inspectObject } from 'util'

export const inspect: (input: any) => string = input => {
  if (typeof input === 'string') return input
  else return inspectObject(input)
}
