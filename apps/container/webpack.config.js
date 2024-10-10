const { merge } = require('webpack-merge')

const { defaultConfig, BUILD_START_TIME } = require('config-utils')
const { getConfigs } = require('vtb-constants')

const mfe = require('./webpack.mfe')

module.exports = (env, argv) => {
  const mfeConfigs = getConfigs(BUILD_START_TIME, process.env.NODE_ENV)

  return merge(defaultConfig(env, argv), {
    entry: './src/index.tsx',
    mode: process.env.NODE_ENV,
    devServer: {
      port: mfeConfigs.container.vtbNFT.port,
    },
    output: {
      asyncChunks: true,
      publicPath: mfeConfigs.container.vtbNFT.publicPath,
    },
    plugins: [mfe(mfeConfigs)],
  })
}
