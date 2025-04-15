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
    extraLarge: true;
  }
}

export type TextColors = {
  main: string;
  secondary: string;
  tertiary: string;
  tertiaryAlternate: string;
  copyright: string;
};

export type Fonts = {
  main: string;
  secondary: string;
  tertiary: string;
};

declare module '@mui/material/styles' {
  interface Theme {
    componentColors: {
      backgroundMain: string;
      backgroundSecondary: string;
      backgroundTertiary: string;
      logoMain: string;
      logoSecondary: string;
      questionUnderline: string;
      inputBorder: string;
      themeSwitchBackground: string;
    };
    textColors: TextColors;
    fonts: Fonts;
  }
  interface ThemeOptions {
    componentColors: {
      backgroundMain: string;
      backgroundSecondary: string;
      backgroundTertiary: string;
      logoMain: string;
      logoSecondary: string;
      questionUnderline: string;
      inputBorder: string;
      themeSwitchBackground: string;
    };
    textColors: TextColors;
    fonts: Fonts;
  }
}

export {};
