import { styled } from '@mui/material';

const LoadingScreenLogo = styled('svg')(({ theme }) => ({
  width: '90px',
  height: '90px',

  [theme.breakpoints.down('tablet')]: {},
}));

export default {
  LoadingScreenLogo,
};
