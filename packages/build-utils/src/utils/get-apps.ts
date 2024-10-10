import type { IParsedApp } from '@/interface'

import { readdirSync } from 'node:fs'
import { join } from 'node:path'

import { buildPath, configBM, options } from '@/constants/configs'
import { appPath, configMFE } from '@/constants/paths'

const chalk = require('chalk')

const packagesPath = join(appPath, options.packages_dir)
const apps = readdirSync(packagesPath, { withFileTypes: true })
  .filter((dir) => dir.isDirectory())
  .map((dir) => dir.name)

const parseApps = (
  mfe: Record<string, any>,
  val: Record<string, any>,
  path: string[],
  commands: IParsedApp[],
) => {
  if (val.to_build !== undefined) {
    if (val.to_build === true) {
      if (!val.dir?.trim() || !mfe.publicPath?.trim()) {
        console.info(
          chalk.red(`app: ${path.join('.')} – config error; dir not copied`),
        )
      } else {
        if (apps.includes(val.dir)) {
          commands.push({
            path,
            app_dir: join(packagesPath, val.dir),
            build_dir: join(packagesPath, val.dir, options.packages_build_dir),
            copy_to_dir: join(buildPath, val.build_dir ?? mfe.publicPath),
          })
        } else {
          console.info(
            chalk.yellow(
              `app: ${path.join('.')} – skip; application is not exist`,
            ),
          )
        }
      }
    }
  } else {
    Object.entries(val).forEach((el) => {
      return parseApps(mfe[el[0]], el[1], [...path, el[0]], commands)
    })
  }
}

export const getApps = () => {
  const commands: IParsedApp[] = []

  for (const el of Object.entries<Record<string, [string, any]>>(configBM)) {
    parseApps(
      // @ts-ignore
      configMFE[el[0]],
      el[1],
      [el[0]],
      commands,
    )
  }

  return commands
}
