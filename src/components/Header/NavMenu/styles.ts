import { styled, Box } from '@mui/material';
import { NavMenuProps } from './props';

const NavMainContainer = styled(
  Box,
  { shouldForwardProp: (propName) => propName !== 'openState' }
)<NavMenuProps>(({ theme, openState: [open] }) => ({
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
    textAlign: 'center',
    margin: 0,
    padding: 0,
    listStyle: 'none',

    li: {
      a: {
        fontFamily: theme.fonts.main,
        fontSize: '64px',
        textTransform: 'uppercase',
        textDecoration: 'none',
        color: theme.textColors.main,
      },
    },
  },
  
  transition: 'all 0.3s ease-in-out',
  ...(open && {
    transition: 'all 0.3s ease-in-out',
    height: '100vh',
    opacity: 1,
  }),

  [theme.breakpoints.down('tablet')]: {
    ul: {
      li: {
        a: {
          fontSize: '50px',
        },
      },
    }
  },
}));

export default {
  NavMainContainer,
};
