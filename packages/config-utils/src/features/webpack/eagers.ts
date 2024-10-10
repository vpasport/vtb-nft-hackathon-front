interface EagerConfig {
  singleton: boolean
  eager: boolean
  requiredVersion: string
}

interface EagersConfig {
  [key: string]: EagerConfig
}

export const eagers = (deps: Record<string, any>, arr: string[]) => {
  return arr
    .filter((el) => !!el.trim())
    .reduce<EagersConfig>((acc, curr) => {
      acc[curr] = {
        singleton: true,
        eager: true,
        requiredVersion: deps[curr],
      }
      return acc
    }, {})
}
