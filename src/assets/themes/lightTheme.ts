import { createTheme } from '@mui/material';
import { screenSizeBreakpoints } from './constants';
import mainFont from '../fonts/Futura_book.ttf';
import secondaryFont from '../fonts/Inter.ttf';

const lightTheme = createTheme({
  componentColors: {
    backgroundMain: '#FFFFFF',
    backgroundSecondary: '#008FD5',
    backgroundTertiary: '#00AF95',
    logoMain: '#008FD5',
    logoSecondary: '#131313',
    questionUnderline: '#494949',
    inputBorder: '#626262',
    themeSwitchBackground: '#FFFFFF',
  },
  textColors: {
    main: '#131313',
    secondary: '#008FD5',
    tertiary: '#008FD5',
    tertiaryAlternate: 'black',
    copyright: '#767676',
  },
  fonts: {
    main: 'Futura',
    secondary: 'Inter',
  },
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
      `,
    },
  },
});

export default lightTheme;
