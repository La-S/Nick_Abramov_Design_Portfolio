import { createTheme } from '@mui/material';
import mainFont from '../fonts/Futura_book.ttf';
import secondaryFont from '../fonts/Inter.ttf';

const defaultTheme = createTheme({
  backgroundColors: {
    main: 'black',
  },
  textColors: {
    main: 'white',
  },
  fonts: {
    secondary: 'Inter',
  },

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
