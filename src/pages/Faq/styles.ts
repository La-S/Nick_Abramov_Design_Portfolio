import { Box, styled, Typography } from '@mui/material';

const FaqContainer = styled(Box)(() => ({
  
}));

const PageTitle = styled(Typography)(({ theme }) => ({
  width: '500px',
  margin: 'auto',
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  fontFamily: theme.fonts.main,
  fontSize: '64px',
  marginTop: '40px',
  marginBottom: '80px',

  span: {
    color: theme.textColors.tertiary,
  },
}));

export default {
  FaqContainer,
  PageTitle,
};
