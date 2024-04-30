import { styled } from '@mui/material';

const HeaderNavLinks = styled('ul')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',

  svg: {
    fontSize: '20px',
    color: theme.textColors.main,
  },

  [theme.breakpoints.down('tablet')]: {
    '.New-Project-Button': {
      margin: '10px',
      padding: '3px 5px',
      fontSize: '14px',

      span: {
        display: 'none',
      },
    },
  },
}));

export default {
  HeaderNavLinks,
};
