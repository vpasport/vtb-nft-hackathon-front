const { ModuleFederationPlugin } = require('webpack').container
const { eagers } = require('config-utils')

const deps = require('./package.json').dependencies

module.exports = (mfeConfigs) => {
  return new ModuleFederationPlugin({
    name: mfeConfigs.container.vtbNFT.scope,
    remotes: {
      [mfeConfigs.login.vtbNFT.scope]:
        `${mfeConfigs.login.vtbNFT.scope}@${mfeConfigs.login.vtbNFT.url}`,
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
        eager: true,
        import: '@radix-ui/themes',
        version: deps['@radix-ui/themes'],
      },
    },
  })
}
