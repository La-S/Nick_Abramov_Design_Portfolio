import { styled, Typography } from '@mui/material';

const PageTitle = styled(Typography)(({ theme }) => ({
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

  [theme.breakpoints.down('tablet')]: {
    fontSize: '50px',
    marginBottom: '65px',
  },
}));

export default {
  PageTitle,
};
