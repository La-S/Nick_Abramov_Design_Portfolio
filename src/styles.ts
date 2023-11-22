import { styled, Box } from '@mui/material';

const BodyContainer = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  backgroundColor: theme.componentColors.backgroundMain,
  paddingTop: '85px',

  '*': {
    color: theme.textColors.main,
  },

  [theme.breakpoints.down('tablet')]: {
    paddingTop: '75px',
  },
}));

export default {
  BodyContainer,
};
