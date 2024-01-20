import { styled, Box } from '@mui/material';

const ProjectNavBar = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  height: '123px',
  padding: '0 20px',

  '.MuiButton-root': {
    fontFamily: theme.fonts.main,
    fontSize: '22px',
    color: theme.textColors.main,
    textTransform: 'none',

    '.MuiButton-startIcon, .MuiButton-endIcon': {
      svg: {
        fontSize: '24px',
        transition: 'font-size 0.2s ease-in-out',
      },
    },

    transition: 'font-size 0.2s ease-in-out',
    '&:hover': {
      fontSize: '24px',

      '.MuiButton-startIcon, .MuiButton-endIcon': {
        svg: {
          fontSize: '26px',
        },
      },
    },
  },

  [theme.breakpoints.down('tablet')]: {
    height: '97px',

    '.MuiButton-root': {
      fontFamily: theme.fonts.main,
      fontSize: '16px',
      color: theme.textColors.main,
      textTransform: 'none',

      '.MuiButton-startIcon, .MuiButton-endIcon': {
        svg: {
          fontSize: '18px',
        },
      },

      '&:hover': {
        fontSize: '16px',

        '.MuiButton-startIcon, .MuiButton-endIcon': {
          svg: {
            fontSize: '18px',
          },
        },
      },
    },
  },
}));

export default {
  ProjectNavBar,
};
