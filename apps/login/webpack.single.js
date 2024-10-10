const { EnvironmentPlugin } = require('webpack')
const { merge } = require('webpack-merge')
const common = require('./webpack.config')

module.exports = (env, argv) =>
  merge(common(env, argv, false), {
    entry: './src/index.tsx',
    optimization: {
      runtimeChunk: 'single',
    },
    output: {
      publicPath: '/',
    },
    plugins: [new EnvironmentPlugin({})],
  })
