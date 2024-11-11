export const palette = {
    primary: '#79BEE1',
    primaryTint: {
      100: '#F0F8FC',
      200: '#E2F1F9',
      300: '#D4EBF6',
      400: '#C6E4F3',
      500: '#B9DDF0',
      600: '#ABD7ED',
      700: '#9ED1EA',
      800: '#92CAE7',
      900: '#85C4E3',
    },
    secondary: '#F2F2F7',
    success: '#34C759',
    danger: '#FF3B30',
    warning: '#FFCC00',
    gray: {
      100: '#F2F2F7',
      200: '#E5E5EA',
      300: '#D1D1D6',
      400: '#C7C7CC',
      500: '#AEAEB2',
      600: '#8E8E93',
      700: '#636366',
      800: '#48484A',
      900: '#3A3A3C',
    },
    yellow: '#FFCB45',
    white: '#FFFFFF'
  } as const;
  
  export const theme = {
    light: {
      ...palette,
      background: '#FFFFFF',
      text: '#000000',
      textSecondary: palette.gray[600],
    },
    dark: {
      ...palette,
      background: '#000000',
      text: '#FFFFFF',
      textSecondary: palette.gray[400],
    }
  } as const;
  
  export type ColorTheme = typeof theme.light;