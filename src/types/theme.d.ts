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
    componentColors: {
      backgroundMain: string;
      logoMain: string;
      logoSecondary: string;
    },
    textColors: {
      main: string;
      secondary: string;
      underline: string;
      copyright: string;
    },
    fonts: {
      main: string;
      secondary: string;
      tertiary: string;
    },
  }
  interface ThemeOptions {
    componentColors: {
      backgroundMain: string;
      logoMain: string;
      logoSecondary: string;
    },
    textColors: {
      main: string;
      secondary: string;
      underline: string;
      copyright: string;
    },
    fonts: {
      main: string;
      secondary: string;
      tertiary?: string;
    },
  }
}

export {};
