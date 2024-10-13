const { ModuleFederationPlugin } = require('webpack').container
const { eagers } = require('config-utils')

const deps = require('./package.json').dependencies

module.exports = (mfeConfigs, isMicro = true) => {
  return new ModuleFederationPlugin({
    name: mfeConfigs.user.vtbNFT.scope,
    filename: mfeConfigs.user.vtbNFT.filename,
    exposes: {
      [mfeConfigs.user.vtbNFT.module]: './src/app',
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
      '@metamask/sdk-react-ui': {
        singleton: true,
        eager: true,
        requiredVersion: deps['@metamask/sdk-react-ui'],
      },
      '@radix-ui/themes': {
        singleton: true,
        eager: !isMicro,
        import: '@radix-ui/themes',
        version: deps['@radix-ui/themes'],
      },
      '@metamask/sdk-react-ui': {
        singleton: true,
        eager: !isMicro,
        import: '@metamask/sdk-react-ui',
        version: deps['@metamask/sdk-react-ui'],
      },
      'vtb-shared': {
        singleton: true,
        eager: !isMicro,
        import: 'vtb-shared',
        version: deps['vtb-shared'],
      },
      'vtb-constants': {
        singleton: true,
        eager: !isMicro,
        import: 'vtb-constants',
        version: deps['vtb-constants'],
      },
    },
  })
}
