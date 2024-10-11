import { themeModes, themeSetters } from '@/shared/constants/theme'
import { ThemeProps } from '@radix-ui/themes'
import { Dispatch, ReactNode, SetStateAction } from 'react'

export type ThemeMode = (typeof themeModes)[number]
export type ThemeSetter = (typeof themeSetters)[number]

export interface IThemeContext {
  mode: ThemeMode
  setMode: Dispatch<SetStateAction<ThemeMode>>
  themeSetter: ThemeSetter
  setThemeSetter: Dispatch<SetStateAction<ThemeSetter>>
  themeEnabled: boolean
  setThemeEnabled: Dispatch<SetStateAction<boolean>>
}

export interface ThemeContextProviderProps extends ThemeProps {
  defaultMode?: IThemeContext['mode']
  defaultThemeSetter?: IThemeContext['themeSetter']
  children: ReactNode
}
