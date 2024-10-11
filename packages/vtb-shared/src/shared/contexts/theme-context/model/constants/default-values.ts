import type { IThemeContext } from '../interfaces/theme-context'

export const defaultValues: IThemeContext = {
  mode: 'light',
  setMode: () => {},
  themeSetter: 'system',
  setThemeSetter: () => {},
  themeEnabled: true,
  setThemeEnabled: () => {},
}
