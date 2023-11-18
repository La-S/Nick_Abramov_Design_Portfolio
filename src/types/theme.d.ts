declare module '@mui/material/styles' {
  interface Theme {
    backgroundColors: {
      main: string;
    },
    textColors: {
      main: string;
      underline: string;
    },
    fonts: {
      main: string;
      secondary: string;
      tertiary: string;
    },
  }
  interface ThemeOptions {
    backgroundColors?: {
      main?: string;
    },
    textColors?: {
      main?: string;
      underline?: string;
    },
    fonts?: {
      main?: string;
      secondary?: string;
      tertiary?: string;
    },
  }
}

export {};
