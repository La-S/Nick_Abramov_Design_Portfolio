import { Box, styled } from '@mui/material';

const FaqContainer = styled(Box)(() => ({
}));

const Banner = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: '245px',
  marginTop: '85px',
  backgroundColor: theme.componentColors.backgroundTertiary,

  '.MuiTypography-root': {
    fontFamily: theme.fonts.main,
    fontSize: '48px',
    textAlign: 'center',
    color: theme.textColors.main,
  },

  [theme.breakpoints.down('tablet')]: {
    display: 'none',
  },
}));

export default {
  FaqContainer,
  Banner,
};
