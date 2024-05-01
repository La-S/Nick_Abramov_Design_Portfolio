import { styled } from '@mui/material';

const HeaderNavLinks = styled('ul')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '15px',

  svg: {
    fontSize: '23px',
    fill: theme.textColors.main,

    transition: 'fill 0.2s ease-in-out',
    '&:hover': {
      fill: theme.textColors.secondary,
    },
  },

  a: {
    textDecoration: 'none',

    p: {
      color: theme.textColors.main,
      fontSize: '20px',

      '&.Active': {
        color: theme.textColors.secondary,
      },

      transition: 'color 0.2s ease-in-out',
      '&:hover': {
        color: theme.textColors.secondary,
      },
    },
  },

  [theme.breakpoints.down('tablet')]: {
    svg: {
      fontSize: '20px',
    },

    a: {
      p: {
        fontSize: '16px',
      },
    }
  },
}));

export default {
  HeaderNavLinks,
};
