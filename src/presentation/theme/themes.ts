export type ThemeMode = 'light' | 'dark';

const radii = {
  xs: 7,
  sm: 14,
  md: 20,
  lg: 26,
  xl: 34,
  pill: 999,
}

const space = {
  xs: 6,
  sm: 10,
  md: 16,
  lg: 24,
  xl: 36,
  xxl: 56,
}

const shared = {radii, space}

export const lightTheme = {
  mode: 'light' as ThemeMode,
  ...shared,
  colors: {
    bg: '#F3EFE6',
    surface: '#FBF9F4',
    surfaceAlt: '#ECE6D8',
    surfaceSunken: '#E7E0D0',

    text: '#2E2A24',
    textMuted: '#6F685B',
    textFaint: '#9C9384',

    border: '#E2DAC9',
    borderStrong: '#D2C7B1',

    accent: '#7C9885',
    accentDeep: '#5F7E6B',
    accentSoft: '#E4EBE2',
    onAccent: '#FFFFFF',

    clay: '#CC8E6E',
    claySoft: '#F1E2D6',

    success: '#5F9E76',
    danger: '#C2705B',
    dangerSoft: '#F2DED6',

    overlay: 'rgba(46, 42, 36, 0.45)',
    shadow: '#2E2A24',

    gradientFrom: '#8FA994',
    gradientTo: '#D8A988',
  },
};

export const darkTheme = {
  mode: 'dark' as ThemeMode,
  ...shared,
  colors: {
    bg: '#1B1F1C',
    surface: '#232825',
    surfaceAlt: '#2C322E',
    surfaceSunken: '#161A17',

    text: '#ECE7DA',
    textMuted: '#A6A192',
    textFaint: '#7C7869',

    border: '#343B36',
    borderStrong: '#46504A',

    accent: '#9DBCA6',
    accentDeep: '#86A88F',
    accentSoft: '#2A332C',
    onAccent: '#16201A',

    clay: '#D69E7E',
    claySoft: '#3A2E26',

    success: '#8FCBA0',
    danger: '#E0917B',
    dangerSoft: '#3A241D',

    overlay: 'rgba(0, 0, 0, 0.6)',
    shadow: '#000000',

    gradientFrom: '#3B4A40',
    gradientTo: '#5A4638',
  },
};


export type AppTheme = typeof lightTheme;

export const themes: Record<ThemeMode, AppTheme> = {
  light: lightTheme,
  dark: darkTheme
}