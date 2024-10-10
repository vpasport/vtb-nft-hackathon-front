import { readFileSync } from 'node:fs'
import { join } from 'node:path'

import { parse } from 'yaml'
import { appPath } from './paths'

export const configBM = parse(
  readFileSync(join(appPath, './build-merge.yml'), 'utf-8'),
)

const options = {
  build_dir_name: 'build',
  packages_dir: 'packages',
  packages_build_dir: 'dist',
  ...(configBM?.build_option ?? {}),
}
if (configBM?.build_option) delete configBM.build_option
export { options }

export const buildPath = join(__dirname, '../../../..', options.build_dir_name)
