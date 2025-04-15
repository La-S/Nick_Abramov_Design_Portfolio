/* eslint-disable @typescript-eslint/ban-ts-comment */
import { screenSizeBreakpoints } from '../assets/themes/constants';
import type { BreakpointKeys as DefaultBreakpointKeys } from '../assets/themes/constants';
import type { CSSObject } from '@mui/material';

type BreakpointKeys = DefaultBreakpointKeys | 'default';
const breakpoints = screenSizeBreakpoints.values;
export const responsive = (styles: Partial<Record<BreakpointKeys, CSSObject>>): CSSObject => {
  let responsiveStyles: CSSObject = {};

  Object.entries(styles).forEach(([breakpoint, style]) => {
    if (breakpoint === 'default') {
      responsiveStyles = { ...responsiveStyles, ...style };
    } else {
      // @ts-ignore;
      const minWidth = breakpoints[breakpoint];
      if (minWidth) {
        // @ts-ignore
        responsiveStyles[`@media (min-width:${minWidth}px)`] = style;
      }
    }
  });

  return responsiveStyles;
};