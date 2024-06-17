import { styled, Alert as MuiAlert } from '@mui/material';

const Alert = styled(MuiAlert)(({ theme }) => ({
  position: 'fixed',
  top: '10px',
  left: '50%',
  transform: 'translateX(-50%)',
  width: '80%',
  maxWidth: '600px',
  fontFamily: theme.fonts.main,
  fontSize: '16px',
}));

export default {
  Alert,
};
