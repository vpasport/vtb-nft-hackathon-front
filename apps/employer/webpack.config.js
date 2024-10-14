const { merge } = require('webpack-merge')

const { defaultConfig, BUILD_START_TIME } = require('config-utils')
const { getConfigs } = require('vtb-constants')

const mfe = require('./webpack.mfe')

module.exports = (env, argv, isMicro = true) => {
  const mfeConfigs = getConfigs(BUILD_START_TIME, process.env.NODE_ENV)

  return merge(defaultConfig(env, argv), {
    entry: './src/app/index.ts',
    mode: process.env.NODE_ENV,
    // devtool: 'inline-source-map',
    devServer: {
      port: mfeConfigs.employer.vtbNFT.port,
    },
    output: {
      asyncChunks: true,
      publicPath: mfeConfigs.employer.vtbNFT.publicPath,
    },
    plugins: [
      mfe(mfeConfigs, isMicro),
      // new webpack.ProvidePlugin({
      //   process: 'process/browser',
      // }),
    ],
  })
}
