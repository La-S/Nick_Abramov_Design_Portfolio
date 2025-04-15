import { createTheme } from '@mui/material';
import { screenSizeBreakpoints } from './constants';
import { generatePBProjectsTypographyStyleOverrides, generateTypographyStyleOverrides } from './utils';
import mainFont from '../fonts/Futura_book.ttf';
import secondaryFont from '../fonts/Inter.ttf';
import tertiaryFont from '../fonts/Chivo.ttf';

const fonts = {
  main: 'Futura',
  secondary: 'Inter',
  tertiary: 'Chivo',
};

const textColors = {
  main: '#FFFFFF',
  secondary: '#008FD5',
  tertiary: '#00AF95',
  tertiaryAlternate: 'black',
  copyright: '#767676',
};

const typographyStyleOverrides = generateTypographyStyleOverrides(fonts, textColors);

const defaultTheme = createTheme({
  componentColors: {
    backgroundMain: '#131313',
    backgroundSecondary: '#008FD5',
    backgroundTertiary: '#00AF95',
    logoMain: '#008FD5',
    logoSecondary: '#FFFFFF',
    questionUnderline: '#494949',
    inputBorder: '#626262',
    themeSwitchBackground: '#212121',
  },
  textColors,
  fonts,
  breakpoints: screenSizeBreakpoints,

  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Futura';
          src: url(${mainFont});
        }

        @font-face {
          font-family: 'Inter';
          src: url(${secondaryFont});
        }

        @font-face {
          font-family: 'Chivo';
          src: url(${tertiaryFont});
        }
      `,
    },
    MuiTypography: {
      styleOverrides: typographyStyleOverrides,
    },
  },
});

export const defaultThemePBProjects = createTheme({
  ...defaultTheme,
  components: {
    MuiTypography: {
      styleOverrides: generatePBProjectsTypographyStyleOverrides(fonts, textColors),
    }
  }
});

export default defaultTheme;
