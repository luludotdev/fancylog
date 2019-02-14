import fs from 'fs'
import mkdirp from 'mkdirp'
import { parse as parsePath } from 'path'
import { promisify } from 'util'

const fse = {
  appendFile: promisify(fs.appendFile),
  ensureFile: async (path: string) => {
    if ((await fse.exists(path)) && (await fse.stat(path)).isFile() === true) {
      return undefined
    }

    const { dir } = parsePath(path)
    await fse.mkdirp(dir)

    await fse.writeFile(path, '')
    return undefined
  },
  exists: promisify(fs.exists),
  mkdirp: promisify(mkdirp),
  stat: promisify(fs.stat),
  writeFile: promisify(fs.writeFile),
}

export default fse
