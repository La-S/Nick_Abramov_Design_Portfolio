import { styled, Box } from '@mui/material';

const BodyContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  minHeight: '100vh',
  backgroundColor: theme.componentColors.backgroundMain,
  paddingTop: '85px',

  '*': {
    color: theme.textColors.main,
  },

  img: {
    '-webkit-user-drag': 'none',
  },

  [theme.breakpoints.down('tablet')]: {
    paddingTop: '75px',
  },
}));

export default {
  BodyContainer,
};
