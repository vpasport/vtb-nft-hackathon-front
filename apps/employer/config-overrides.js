const { BUILD_START_TIME, defaultConfigOverride } = require('config-utils')
const { getConfigs } = require('vtb-constants')

const mfe = require('./webpack.mfe')

const configs = getConfigs(BUILD_START_TIME, process.env.NODE_ENV)

module.exports = defaultConfigOverride(
  mfe(configs, false),
  configs.employer.vtbNFT.publicPath,
)
