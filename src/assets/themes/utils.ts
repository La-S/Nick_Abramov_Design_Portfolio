import { responsive } from '../../utils/styleUtils';
import type { Fonts, TextColors } from '../../types/import/theme';

export const generateTypographyStyleOverrides = (fonts: Fonts, textColors: TextColors) => {
  return {
    h1: {
      color: textColors.main,
      fontFamily: fonts.main,
      fontWeight: 'bold',
      ...responsive({
        default: {
          fontSize: 70,
        },
        tablet: {
          fontSize: 90,
        },
      }),
    },
    h2: {
      color: textColors.main,
      fontFamily: fonts.main,
      ...responsive({
        default: {
          fontSize: 53,
        },
        tablet: {
          fontSize: 64,
        },
      }),
    },
    h3: {
      color: textColors.main,
      fontFamily: fonts.main,
      ...responsive({
        default: {
          fontSize: 35,
        },
        tablet: {
          fontSize: 48,
        },
      }),
    },
    h4: {
      color: textColors.main,
      fontFamily: fonts.main,
      ...responsive({
        default: {
          fontSize: 28,
        },
        tablet: {
          fontSize: 34,
        },
      }),
    },
    h5: {
      color: textColors.main,
      fontFamily: fonts.main,
      ...responsive({
        default: {
          fontSize: 22,
        },
        tablet: {
          fontSize: 26,
        },
      }),
    },
    h6: {
      color: textColors.main,
      fontFamily: fonts.main,
      ...responsive({
        default: {
          fontSize: 18,
        },
        tablet: {
          fontSize: 20,
        },
      }),
    },
    body1: {
      color: textColors.main,
      fontFamily: fonts.main,
      ...responsive({
        default: {
          fontSize: 18,
        },
        tablet: {
          fontSize: 24,
        },
      }),
    },
    body2: {
      color: textColors.main,
      fontFamily: fonts.main,
      ...responsive({
        default: {
          fontSize: 16,
        },
        tablet: {
          fontSize: 20,
        },
      }),
    },
  };
};

export const generatePBProjectsTypographyStyleOverrides = (fonts: Fonts, textColors: TextColors) => {
  return {
    h2: {
      fontFamily: fonts.tertiary,
      color: textColors.main,
      textTransform: 'uppercase' as const,
      fontWeight: 600,
      ...responsive({
        default: {
          fontSize: 32,
        },
        tablet: {
          fontSize: 40,
        },
      }),
    },
    h5: {
      fontFamily: fonts.tertiary,
      color: textColors.main,
      fontWeight: 600,
      fontSize: 24,
    },
    body1: {
      fontFamily: fonts.tertiary,
      color: textColors.main,
      fontWeight: 350,
      ...responsive({
        default: {
          fontSize: 16,
        },
        tablet: {
          fontSize: 18,
        },
      }),
    },
  };
};
