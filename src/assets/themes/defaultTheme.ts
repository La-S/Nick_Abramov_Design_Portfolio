import { createTheme } from '@mui/material';
import { screenSizeBreakpoints } from './constants';
import mainFont from '../fonts/Futura_book.ttf';
import secondaryFont from '../fonts/Inter.ttf';

const defaultTheme = createTheme({
  componentColors: {
    backgroundMain: '#000000',
    backgroundSecondary: '#008FD5',
    backgroundTertiary: '#00AF95',
    logoMain: '#008FD5',
    logoSecondary: '#FFFFFF',
    questionUnderline: '#494949',
  },
  textColors: {
    main: '#FFFFFF',
    secondary: '#008FD5',
    tertiary: '#00AF95',
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

export default defaultTheme;
