import { styled, Card, alpha } from '@mui/material';

const AdminProjectsGridBox = styled(Card)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  maxWidth: '350px',
  margin: '15px',
  backgroundColor: theme.componentColors.backgroundMain,
  border: `2px double ${theme.componentColors.backgroundTertiary}`,

  '.MuiCardMedia-root': {
    height: '250px',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },

  '.MuiCardContent-root': {
    '.MuiTypography-body2': {
      color: alpha(theme.textColors.main, 0.65),
    },

    'h5': {
      color: theme.textColors.main,
    },
  },

  '.MuiCardActions-root': {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    flexGrow: 1,
    paddingTop: '0',
  },

  [theme.breakpoints.down('tablet')]: {
    maxWidth: '550px',
  },
}));

export default {
  AdminProjectsGridBox,
};
