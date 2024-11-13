export const fontFamilies = {
  raleway: 'Raleway', 
  asap: 'Asap',      // For headers
  muktaVaani: 'Mukta Vaani'  // For body and help text
} as const;

export const fontSizes = {
  xs: '0.75rem',    // 12px
  sm: '0.875rem',   // 14px
  md: '1rem',       // 16px
  lg: '1.125rem',   // 18px
  xl: '1.25rem',    // 20px
  '2xl': '1.5rem',  // 24px
  '3xl': '1.875rem', // 30px
  '4xl': '2.25rem',  // 36px
  '5xl': '3rem'      // 48px
} as const;

export const fontWeights = {
  regular: '400',
  medium: '500',
  semibold: '600',
  extrabold: '800'
} as const;

export const typography = {
  h1: {
    regular: {
      fontFamily: fontFamilies.asap,
      fontWeight: fontWeights.regular,
      fontSize: fontSizes["2xl"],
    },
    semibold: {
      fontFamily: fontFamilies.asap,
      fontWeight: fontWeights.semibold,
      fontSize: fontSizes["2xl"],
    },
    extrabold: {
      fontFamily: fontFamilies.raleway,
      fontWeight: fontWeights.extrabold,
      fontStyle: "italic",
      fontSize: fontSizes["4xl"],
    },
  },
  h2: {
    regular: {
      fontFamily: fontFamilies.asap,
      fontWeight: fontWeights.regular,
      fontSize: fontSizes.xl,
    },
    semibold: {
      fontFamily: fontFamilies.asap,
      fontWeight: fontWeights.semibold,
      fontSize: fontSizes.xl,
    },
  },
  h3: {
    regular: {
      fontFamily: fontFamilies.asap,
      fontWeight: fontWeights.regular,
      fontSize: fontSizes.md,
    },
    semibold: {
      fontFamily: fontFamilies.asap,
      fontWeight: fontWeights.semibold,
      fontSize: fontSizes.md,
    },
  },
  body: {
    large: {
      fontFamily: fontFamilies.muktaVaani,
      fontWeight: fontWeights.regular,
      fontSize: fontSizes.lg,
    },
    regular: {
      fontFamily: fontFamilies.muktaVaani,
      fontWeight: fontWeights.regular,
      fontSize: fontSizes.md,
    },
    semibold: {
      fontFamily: fontFamilies.muktaVaani,
      fontWeight: fontWeights.semibold,
      fontSize: fontSizes.md,
    },
    small: {
      regular: {
        fontFamily: fontFamilies.muktaVaani,
        fontWeight: fontWeights.regular,
        fontSize: fontSizes.sm,
      },
      semibold: {
        fontFamily: fontFamilies.muktaVaani,
        fontWeight: fontWeights.semibold,
        fontSize: fontSizes.sm,
      },
    },
  },
  helpText: {
    fontFamily: fontFamilies.muktaVaani,
    fontWeight: fontWeights.medium,
    fontSize: fontSizes.sm,
  },
} as const;

export type Typography = typeof typography;