export type BreakpointKeys =
  | 'mobileLandscape'
  | 'tablet'
  | 'desktop'
  | 'largeDesktop'
  | 'extraLargeDesktop';

export type Breakpoints = {
    values: {
      [key in BreakpointKeys]: number;
    };
  };

export const screenSizeBreakpoints = {
  values: {
    mobile: 480,
    tablet: 768,
    laptop: 1050,
    desktop: 1200,
    extraLarge: 1401,
  },
};
