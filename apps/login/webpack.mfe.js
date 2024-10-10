const { ModuleFederationPlugin } = require('webpack').container
const { eagers } = require('config-utils')

const deps = require('./package.json').dependencies

module.exports = (mfeConfigs, isMicro = true) => {
  return new ModuleFederationPlugin({
    name: mfeConfigs.login.vtbNFT.scope,
    filename: mfeConfigs.login.vtbNFT.filename,
    exposes: {
      [mfeConfigs.login.vtbNFT.module]: './src/app',
    },
    shared: {
      ...eagers(deps, Object.keys(deps)),
      react: { singleton: true, eager: true, requiredVersion: deps.react },
      'react-dom': {
        singleton: true,
        eager: true,
        requiredVersion: deps['react-dom'],
      },
      'react-router-dom': {
        singleton: true,
        eager: true,
        requiredVersion: deps['react-router-dom'],
      },
      '@radix-ui/themes': {
        singleton: true,
        eager: !isMicro,
        import: '@radix-ui/themes',
        version: deps['@radix-ui/themes'],
      },
    },
  })
}
