import { readFileSync } from 'node:fs'

export const BUILD_START_TIME = readFileSync('../../time.env', 'utf-8')
  .trim()
  .replace('\n', '')
