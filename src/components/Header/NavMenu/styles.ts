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
  width: '0vw',
  height: '100vh',
  
  transition: 'all 0.3s ease-in-out',
  ...(open && {
    transition: 'all 0.3s ease-in-out',
    width: '100vw',
  }),
}));

export default {
  NavMainContainer,
};
