import { styled, Box, alpha } from '@mui/material';
import { HEADER_DESKTOP_HEIGHT, HEADER_MOBILE_HEIGHT } from '../../../components/Header/styles';

const ProjectNavBar = styled(Box)(({ theme }) => ({
  '.Static-NavProject-Buttons': {
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
          transition: 'font-size 0.5s ease-in-out',
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
  },

  '.Fixed-NavProject-Buttons': {
    position: 'fixed',
    top: HEADER_DESKTOP_HEIGHT,
    left: 0,
    width: '100%',
    height: `calc(100vh - ${HEADER_DESKTOP_HEIGHT}px)`,
    zIndex: 1000,
    pointerEvents: 'none',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',

    a: {
      width: '50px',
      height: '100%',
      backgroundColor: alpha(theme.componentColors.backgroundMain, 0.5),
      pointerEvents: 'all',

      button: {
        height: '100%',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',

        svg: {
          fontSize: '45px',
        },
      },

      transition: 'transform 0.2s ease-in-out, opacity 0.2s ease-in-out',
      '&.Hidden': {
        opacity: 0,
        pointerEvents: 'none',

        '&.Prev-Project-Button': {
          transform: 'translateX(-50px)',
        },

        '&.Next-Project-Button': {
          transform: 'translateX(50px)',
        },
      },
    },
  },

  [theme.breakpoints.down('tablet')]: {
    '.Static-NavProject-Buttons': {
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

    '.Fixed-NavProject-Buttons': {
      top: HEADER_MOBILE_HEIGHT,
      height: `calc(100vh - ${HEADER_MOBILE_HEIGHT}px)`,

      a: {
        width: '35px',

        button: {
          svg: {
            fontSize: '30px',
          },
        },
      },
    }
  },
}));

export default {
  ProjectNavBar,
};
