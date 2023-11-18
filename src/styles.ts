import { styled, Box } from '@mui/material';

const BodyContainer = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  // backgroundColor: theme.backgroundColors.main,

  '*': {
    color: theme.textColors.main,
  },
}));

export default {
  BodyContainer,
};
