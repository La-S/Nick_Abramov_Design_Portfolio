import { createTheme } from '@mui/material';
import { screenSizeBreakpoints } from './constants';
import mainFont from '../fonts/Futura_book.ttf';
import secondaryFont from '../fonts/Inter.ttf';

const defaultTheme = createTheme({
  backgroundColors: {
    main: 'black',
  },
  textColors: {
    main: 'white',
    underline: '#00AF95',
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
