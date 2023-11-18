import { styled, Box } from '@mui/material';

const BodyContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.backgroundColors.main,
  minHeight: '100vh',

  '*': {
    color: theme.textColors.main,
  },
}));

export default {
  BodyContainer,
};
