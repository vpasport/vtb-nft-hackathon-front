import { join, resolve } from 'node:path'
// @ts-ignore
import { alias, configPaths } from 'react-app-rewire-alias'
// @ts-ignore
// import rewired from 'react-app-rewired'

import { getHTMLTemplateConfig } from '../html-template-descriptions'
import { BUILD_START_TIME } from '../webpack'

const ModuleScopePlugin = require('react-dev-utils/ModuleScopePlugin')

export const defaultConfigOverride = (mfe: any, path: string) => {
  return {
    webpack: function (config: any, argv: any) {
      alias(configPaths())(config)

      config.output.asyncChunks = true
      config.output.filename = `[name]_${BUILD_START_TIME}.js`
      config.output.chunkFilename = `[id]_${BUILD_START_TIME}.js`
      config.output.publicPath =
        process.env.NODE_ENV === 'production' ? path : '/'

      if (argv === 'development' || process.env.NODE_ENV === 'development') {
        config.optimization.runtimeChunk = 'single'
      }

      if (!!mfe) {
        config.plugins.push(mfe)
      }

      config.resolve.plugins = config.resolve.plugins.filter((plugin: any) => {
        return !(plugin instanceof ModuleScopePlugin)
      })

      const htmlWebpackPlugin = config.plugins.find(
        (plugin: any) => plugin.constructor.name === 'HtmlWebpackPlugin',
      )

      htmlWebpackPlugin.userOptions = {
        ...htmlWebpackPlugin.userOptions,
        ...getHTMLTemplateConfig().main,
      }

      // throw new Error('err')

      return config
    },
    paths: function (paths: any, env: any) {
      paths.appBuild = join(__dirname, 'dist')
      return paths
    },
  }
}
