const { ModuleFederationPlugin } = require('webpack').container
const { eagers } = require('config-utils')

const deps = require('./package.json').dependencies

module.exports = (mfeConfigs) => {
  return new ModuleFederationPlugin({
    name: mfeConfigs.container.vtbNFT.scope,
    remotes: {
      [mfeConfigs.login.vtbNFT.scope]:
        `${mfeConfigs.login.vtbNFT.scope}@${mfeConfigs.login.vtbNFT.url}`,
      [mfeConfigs.user.vtbNFT.scope]:
        `${mfeConfigs.user.vtbNFT.scope}@${mfeConfigs.user.vtbNFT.url}`,
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
        eager: true,
        import: '@radix-ui/themes',
        version: deps['@radix-ui/themes'],
      },
      'vtb-shared': {
        singleton: true,
        eager: true,
        import: 'vtb-shared',
        version: deps['vtb-shared'],
      },
      'vtb-constants': {
        singleton: true,
        eager: true,
        import: 'vtb-constants',
        version: deps['vtb-constants'],
      },
    },
  })
}
