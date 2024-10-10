import { getConfigs } from 'vtb-constants'

export const MFE = getConfigs(
  process.env.REACT_APP_BUILD_TIME ?? '',
  process.env.NODE_ENV,
)
