import type { FC } from 'react'
import type {
  IThemeContext,
  ThemeContextProviderProps,
} from './model/interfaces/theme-context'

import { Theme } from '@radix-ui/themes'
import {
  createContext,
  useContext,
  useCallback,
  useEffect,
  useState,
} from 'react'

import { LocalStorage } from '@/shared/constants/localstorage'
import { themeModes, themeSetters } from '@/shared/constants/theme'
import { defaultValues } from './model/constants/default-values'

export const ThemeContext = createContext<IThemeContext>(defaultValues)

export const ThemeContextProvider: FC<ThemeContextProviderProps> = ({
  defaultMode = defaultValues['mode'],
  defaultThemeSetter = defaultValues['themeSetter'],
  children,
  ...props
}) => {
  const [themeEnabled, setThemeEnabled] = useState(defaultValues.themeEnabled)

  const [mode, setMode] = useState<IThemeContext['mode']>(() => {
    const fromStorage = localStorage.getItem(LocalStorage.Theme)
    if (
      fromStorage &&
      themeModes.includes(fromStorage as IThemeContext['mode'])
    ) {
      return fromStorage as IThemeContext['mode']
    } else {
      return defaultMode
    }
  })

  const [themeSetter, setThemeSetter] = useState<IThemeContext['themeSetter']>(
    () => {
      const fromStorage = localStorage.getItem(LocalStorage.Setter)
      if (
        fromStorage &&
        themeSetters.includes(fromStorage as IThemeContext['themeSetter'])
      ) {
        return fromStorage as IThemeContext['themeSetter']
      } else {
        return defaultThemeSetter
      }
    },
  )

  const setDOMTheme = useCallback((theme: IThemeContext['mode']) => {
    const meta = document.querySelector('meta[name="theme-color"]')
    meta &&
      meta.setAttribute('content', theme === 'dark' ? '#000000' : '#ffffff')
    document.body.setAttribute('data-theme-mode', theme)
    setMode(theme)
    localStorage.setItem(LocalStorage.Theme, theme)
  }, [])

  useEffect(() => {
    setDOMTheme(mode)
  }, [mode])

  useEffect(() => {
    localStorage.setItem(LocalStorage.Setter, themeSetter)

    const setAutoTheme = (event: any) => {
      const newColorScheme = event.matches ? 'dark' : 'light'
      setDOMTheme(newColorScheme)
    }

    const matchDark = '(prefers-color-scheme: dark)'

    if (window.matchMedia) {
      if (themeSetter === 'system') {
        window.matchMedia(matchDark).addEventListener('change', setAutoTheme)

        if (window.matchMedia(matchDark).matches) {
          setDOMTheme('dark')
        } else {
          setDOMTheme('light')
        }
      } else {
        window.matchMedia(matchDark).removeEventListener('change', setAutoTheme)
      }
    }

    return () => {
      window.matchMedia &&
        window.matchMedia(matchDark).removeEventListener('change', setAutoTheme)
    }
  }, [themeSetter])

  return (
    <ThemeContext.Provider
      value={{
        mode,
        setMode,
        themeSetter,
        setThemeSetter,
        themeEnabled,
        setThemeEnabled,
      }}
    >
      <Theme appearance={mode}>{children}</Theme>
    </ThemeContext.Provider>
  )
}

export const useThemeContext = () => {
  return useContext(ThemeContext)
}
