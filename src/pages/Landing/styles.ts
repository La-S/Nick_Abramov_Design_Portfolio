import { styled, Box } from '@mui/material';
import { HEADER_DESKTOP_HEIGHT, HEADER_MOBILE_HEIGHT } from '../../components/Header/styles';

const LandingContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginBottom: '20px',

  '.SortBar-Container': {
    ul: {
      margin: 0,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexWrap: 'wrap',
      maxWidth: '800px',
      padding: '35px',
      listStyle: 'none',
      position: 'relative',
      bottom: '10px',

      li: {
        margin: '2.5px 45px',

        button: {
          '.MuiTypography-root': {
            fontFamily: theme.fonts.main,
            fontSize: '22px',
            color: theme.textColors.main,

            transition: 'color 0.3s ease-in-out',
            '&.Active, &:hover': {
              color: theme.textColors.secondary,
            },
          },
        },
      },
    },
  },

  '.ProjectGrid-Container': {
    width: '100%',
  },

  '.No-Projects-Box': {
    display: 'flex',
    alignItems: 'center',
    height: `calc(100vh - ${HEADER_DESKTOP_HEIGHT}px)`,

    '.MuiTypography-root': {
      position: 'relative',
      bottom: `${HEADER_DESKTOP_HEIGHT}px`,
      fontFamily: theme.fonts.main,
      fontSize: '24px',
    },
  },

  [theme.breakpoints.down('tablet')]: {
    '.SortBar-Container': {
      ul: {
        padding: '35px 15px',
        rowGap: '10px',

        li: {
          margin: '2.5px 10px',

          button: {
            '.MuiTypography-root': {
              fontSize: '20px',
            },
          },
        },
      },
    },

    '.No-Projects-Box': {
      height: `calc(100vh - ${HEADER_MOBILE_HEIGHT}px)`,

      '.MuiTypography-root': {
        bottom: `${HEADER_MOBILE_HEIGHT}px`,
        fontSize: '24px',
      },
    },
  },
}));

export default {
  LandingContainer,
};
