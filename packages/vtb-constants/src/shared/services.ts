export interface MFEData {
  scope: string
  filename: string
  module: string
  port: number
  publicPath: string
  url: string
}

const getURL = (
  option: {
    filename: string
    port: number | string
    publicPath: string
  },
  mode: string,
) => {
  const host = 'localhost'
  // const host = '192.168.1.23'

  return mode === 'production'
    ? `${option.publicPath}/${option.filename}`
    : `http://${host}:${option.port}/${option.filename}`
}

export const getConfigs = (buildTime: string, mode: string = 'development') => {
  const config: Record<string, Record<string, MFEData>> = {
    container: {
      vtbNFT: {
        scope: 'ContainerApp',
        filename: `containerAppEntry_${buildTime}.js`,
        module: './ContainerApp',
        port: 3000,
        publicPath: mode === 'production' ? '/' : '/',
        url: '',
      },
    },
    login: {
      vtbNFT: {
        scope: 'LoginApp',
        filename: `loginAppEntry_${buildTime}.js`,
        module: './LoginApp',
        port: 3001,
        publicPath: mode === 'production' ? '/login' : 'auto',
        url: '',
      },
    },
    user: {
      vtbNFT: {
        scope: 'UserApp',
        filename: `userAppEntry_${buildTime}.js`,
        module: './UserApp',
        port: 3002,
        publicPath: mode === 'production' ? '/user' : 'auto',
        url: '',
      },
    },
    employer: {
      vtbNFT: {
        scope: 'EmployerApp',
        filename: `employerAppEntry_${buildTime}.js`,
        module: './EmployerApp',
        port: 3003,
        publicPath: mode === 'production' ? '/employer' : 'auto',
        url: '',
      },
    },
  }

  config.container.vtbNFT.url = getURL(config.container.vtbNFT, mode)

  config.login.vtbNFT.url = getURL(config.login.vtbNFT, mode)

  config.user.vtbNFT.url = getURL(config.user.vtbNFT, mode)

  config.employer.vtbNFT.url = getURL(config.employer.vtbNFT, mode)

  return config
}
