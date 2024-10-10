import { join } from 'node:path'

import { BUILD_START_TIME } from 'config-utils'
import { getConfigs } from 'vtb-constants'

export const appPath = join(__dirname, '../../../../')

export const configMFE = getConfigs(BUILD_START_TIME, 'production')
