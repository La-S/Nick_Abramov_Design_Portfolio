import { styled, AppBar, Box, alpha } from '@mui/material';
import { Link } from 'react-router-dom';

export const HEADER_DESKTOP_HEIGHT = 85;
export const HEADER_MOBILE_HEIGHT = 75;

export const classes = {
  root: 'Header',
  hidden: 'Header--hidden',
};

const Header = styled(AppBar, {
  shouldForwardProp: (propName) => propName !== 'pathName',
})<{ pathName: string }>(({ theme, pathName }) => ({
  height: `${HEADER_DESKTOP_HEIGHT}px`,
  padding: '20px 68px',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  backdropFilter: 'blur(6px)',
  boxShadow: 'none',

  '.Theme-Toggle': {
    ...(pathName === 'about' ? {
      opacity: 0,
      pointerEvents: 'none',
    } : {}),
  },

  [`&.${classes.hidden}`]: {
    top: `-${HEADER_DESKTOP_HEIGHT}px`,
  },

  transition: 'background-color 0.2s ease-in-out, top 0.2s ease-in-out',
  [theme.breakpoints.down('tablet')]: {
    backgroundColor: alpha(theme.componentColors.backgroundMain, 0.95),
    height: `${HEADER_MOBILE_HEIGHT}px`,
    padding: '25px',

    [`&.${classes.hidden}`]: {
      top: `-${HEADER_MOBILE_HEIGHT}px`,
    },
  },

  [theme.breakpoints.up('tablet')]: {
    backgroundColor:
      pathName !== 'about'
        ? alpha(theme.componentColors.backgroundMain, 0.95)
        : theme.componentColors.backgroundSecondary,
  },
}));

const NewProjectLink = styled(Link, {
  shouldForwardProp: (propName) => propName !== 'pathName',
})<{ pathName: string }>(({ theme, pathName }) => ({
  fontFamily: theme.fonts.secondary,
  fontSize: '20px',

  textDecorationThickness: '2px',
  textUnderlineOffset: '4px',
  textDecorationColor: theme.textColors.tertiary,
  transition: 'color 0.2s ease-in-out',
  '&:hover': {
    color: theme.textColors.tertiary,
  },

  [theme.breakpoints.down('tablet')]: {
    display: 'none',
  },

  [theme.breakpoints.up('tablet')]: {
    textDecorationColor: pathName !== 'about' ? theme.textColors.tertiary : theme.textColors.tertiaryAlternate,
  },
}));

const LogoContainer = styled(Box)(({ theme }) => ({
  width: '335px',
  height: '46px',

  [theme.breakpoints.down('tablet')]: {
    width: '209px',
    height: '28px',
  },
}));

const BurgerContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',

  svg: {
    '*': {
      color: theme.textColors.main,
    },
  },

  '.Burger-Icon': {
    width: '48px',
    height: '42px',
    marginLeft: '32px',
  },

  '.Theme-Toggle': {
    width: '30px',
    height: '30px',

    '&.Light-Theme-Active': {
      circle: {
        fill: 'transparent',
      },
    },
  },

  [theme.breakpoints.down('tablet')]: {
    '.Burger-Icon': {
      width: '41px',
      height: '35px',
      marginLeft: '20px',
    },

    '.Theme-Toggle': {
      width: '24px',
      height: '24px',
    },
  },
}));

export default {
  NewProjectLink,
  Header,
  LogoContainer,
  BurgerContainer,
};
