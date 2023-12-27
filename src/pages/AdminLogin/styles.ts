import { styled } from '@mui/material';

const LoginForm = styled('form')(({ theme }) => ({
  backgroundColor: theme.componentColors.backgroundMain,

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',

  '.MuiTypography-root': {
    fontSize: '20px',
  },

  '.MuiTextField-root': {
    width: '250px',
    border: `1px solid ${theme.componentColors.backgroundTertiary}`,
    borderRadius: '5px',

    input: {
      fontSize: '18px',
      color: theme.textColors.main,
    },
  },

  button: {
    marginTop: '10px',
    fontSize: '16px',
  },
}));

export default {
  LoginForm,
};
