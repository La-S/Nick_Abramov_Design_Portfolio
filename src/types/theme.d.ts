declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xs: false;
    sm: false;
    md: false;
    lg: false;
    xl: false;
    mobile: true;
    tablet: true;
    laptop: true;
    desktop: true;
  }
}

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
      tertiary?: string;
    },
  }
}

export {};
