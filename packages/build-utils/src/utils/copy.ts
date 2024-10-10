import type { IParsedApp } from '@/interface'

import { cpSync } from 'node:fs'
import { join } from 'node:path'

const chalk = require('chalk')

export const copyApps = (apps: IParsedApp[]) =>
  new Promise((res, rej) => {
    try {
      apps.forEach((appConfig) => {
        cpSync(join(appConfig.build_dir), join(appConfig.copy_to_dir), {
          recursive: true,
        })
        console.info(
          chalk.green(
            `${appConfig.path.join('.')} – copied to ${appConfig.copy_to_dir}`,
          ),
        )
      })
      res(true)
    } catch (err) {
      rej(new Error(err))
    }
  })
