import { styled, Box } from '@mui/material';
import { NavMenuProps } from './props';

const NavMainContainer = styled(Box, {
  shouldForwardProp: (propName) => propName !== 'openState',
})<NavMenuProps>(({ theme, openState: [open] }) => ({
  backgroundColor: theme.componentColors.backgroundMain,
  position: 'fixed',
  zIndex: 1000,
  top: 0,
  right: 0,
  width: '100vw',
  height: '0',
  overflow: 'hidden',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  opacity: 0,

  ul: {
    width: '100%',
    textAlign: 'center',
    margin: 0,
    padding: 0,
    listStyle: 'none',

    li: {
      width: '100%',
      height: '123px',
      margin: 0,
      padding: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',

      a: {
        fontFamily: theme.fonts.main,
        fontSize: '64px',
        textTransform: 'uppercase',
        textDecoration: 'none',
        color: theme.textColors.main,
      },
    },
  },

  transition: 'height 0.3s ease-in-out, opacity 0.3s ease-in-out',
  ...(open && {
    transition: 'height 0.3s ease-in-out, opacity 0.3s ease-in-out',
    height: '100vh',
    opacity: 1,
  }),

  [theme.breakpoints.down('tablet')]: {
    ul: {
      li: {
        height: '97px',
        borderTop: '1px solid #2D2D2D',
        borderBottom: '1px solid #2D2D2D',
        a: {
          width: '100%',
          fontSize: '50px',
        },
      },
    },
  },
}));

export default {
  NavMainContainer,
};
