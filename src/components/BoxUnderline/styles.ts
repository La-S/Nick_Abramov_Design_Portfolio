import { styled, Box } from '@mui/material';

const BoxUnderline = styled(Box)(({ theme }) => ({
  backgroundColor: theme.textColors.tertiary,
  width: '97.5%',
  height: '3px',
  margin: '0 auto',
}));

export default {
  BoxUnderline,
};
