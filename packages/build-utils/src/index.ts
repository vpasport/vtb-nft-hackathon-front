import { rmSync, mkdirSync } from 'node:fs'
import { buildPath } from './constants/configs'
import { copyApps } from './utils/copy'
import { getApps } from './utils/get-apps'
import { validateApps } from './utils/validate-apps'

rmSync(buildPath, { recursive: true, force: true })
mkdirSync(buildPath)

const apps = getApps()

copyApps(validateApps(apps))
