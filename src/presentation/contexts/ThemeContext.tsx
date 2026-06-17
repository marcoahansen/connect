import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { type ThemeMode, type AppTheme, themes } from "../theme/themes";
import { ThemeProvider as StyledThemeProvider } from "styled-components/native";
import { Appearance } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface ThemeContextData {
  mode: ThemeMode;
  theme: AppTheme;
  isDark: boolean;
  toggleTheme: () => void;
  setMode: (mode: ThemeMode) => void;
}

const STORAGE_KEY = '@connect/theme'

const ThemeContext = createContext<ThemeContextData | undefined>(undefined)

const resolveInitialMode = (): ThemeMode => {
  return Appearance.getColorScheme() === 'dark' ? 'dark' : 'light'
}

export const AppThemeProvider = ({ children }: { children: ReactNode }) => {
  const [mode, setModeState] = useState<ThemeMode>(resolveInitialMode);

  useEffect(() => {
    let active = true;
    AsyncStorage.getItem(STORAGE_KEY)
      .then((saved) => {
        if (active && (saved == 'light' || saved === 'dark')) {
          setModeState(saved)
        }
      })
      .catch(() => undefined)
    return () => {
      active = false
    }
  }, [])

  const setMode = useCallback((next: ThemeMode) => {
    setModeState(next);
    AsyncStorage.setItem(STORAGE_KEY, next).catch(() => undefined)
  }, []);

  const toggleTheme = useCallback(() => {
    setModeState((current) => {
      const next: ThemeMode = current === 'dark' ? 'light' : 'dark';
      AsyncStorage.setItem(STORAGE_KEY, next).catch(() => undefined)
      return next
    })
  }, [])

  const theme = themes[mode]

  const value = useMemo<ThemeContextData>(
    () => ({ mode, theme, isDark: mode === 'dark', toggleTheme, setMode }),
    [mode, theme, toggleTheme, setMode]
  )

  return (
    <ThemeContext.Provider value={value}>
      <StyledThemeProvider theme={theme}>
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  )
}

export const useAppTheme = (): ThemeContextData => {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("UseAppTheme must be used within an AppThemeProvider");
  return ctx
}