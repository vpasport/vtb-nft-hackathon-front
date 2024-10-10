import type { IParsedApp } from '@/interface'

import { existsSync } from 'node:fs'
import { resolve } from 'node:path'

import { options } from '@/constants/configs'

export const validateApps = (apps: IParsedApp[]): IParsedApp[] => {
  return apps.filter((dir) =>
    existsSync(resolve(dir.app_dir, options.packages_build_dir)),
  )
}
