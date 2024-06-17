import { styled, Box, alpha } from '@mui/material';
import { HEADER_DESKTOP_HEIGHT } from '../../../common/components/Header/styles';

const ProjectNavBar = styled(Box)(({ theme }) => ({
  '.Static-NavProject-Buttons': {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100px',
    padding: '0 120px',
    position: 'relative',
    top: '20px',

    '.MuiButton-root': {
      color: theme.textColors.main,
      textTransform: 'none',

      '.MuiTypography-root': {
        fontFamily: theme.fonts.main,
        fontSize: '30px',
        transition: 'font-size 0.2s ease-in-out',
      },

      '.MuiButton-startIcon, .MuiButton-endIcon': {
        svg: {
          fontSize: '32px',
          transition: 'font-size 0.2s ease-in-out',
        },
      },

      '&:hover': {
        backgroundColor: 'transparent',

        '.MuiTypography-root': {
          fontSize: '32px',
        },

        '.MuiButton-startIcon, .MuiButton-endIcon': {
          svg: {
            fontSize: '34px',
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

      '&.Loaded': {
        transition: 'transform 0.2s ease-in-out, opacity 0.2s ease-in-out',
      },
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
      padding: '0 10px',
      top: '10px',

      div: {
        flexBasis: '50%',
      },

      '.MuiButton-root': {
        textTransform: 'none',

        '.MuiTypography-root': {
          fontSize: '20px',
          lineHeight: '1.3',
        },

        '.MuiButton-startIcon, .MuiButton-endIcon': {
          svg: {
            fontSize: '22px',
          },
        },

        '&:hover': {
          '.MuiTypography-root': {
            fontSize: '20px',
          },

          '.MuiButton-startIcon, .MuiButton-endIcon': {
            svg: {
              fontSize: '22px',
            },
          },
        },
      },

      '.Prev-Project-Button,.Next-Project-Button': {
        display: 'block',
        width: '100%',
      },

      '.Prev-Project-Button': {
        textAlign: 'left',

        button: {
          textAlign: 'left',
        },
      },

      '.Next-Project-Button': {
        textAlign: 'right',

        button: {
          textAlign: 'right',
        },
      },
    },

    '.Fixed-NavProject-Buttons': {
      display: 'none',
    }
  },
}));

export default {
  ProjectNavBar,
};
