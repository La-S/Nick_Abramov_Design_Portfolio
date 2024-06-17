import { styled, Box } from '@mui/material';
import { HEADER_DESKTOP_HEIGHT, HEADER_MOBILE_HEIGHT } from '../../common/components/Header/styles';

const ProjectContainer = styled(Box)(({ theme }) => ({
  '.Main-Image': {
    width: '100%',
    objectFit: 'cover',
    maxHeight: `min(calc(100vh - ${HEADER_DESKTOP_HEIGHT}px), 750px)`,
  },

  [theme.breakpoints.down('tablet')]: {
    '.Main-Image': {
      maxHeight: `min(calc(100vh - ${HEADER_MOBILE_HEIGHT}px), 750px)`,
    },
  },
}));

const ProjectOverview = styled(Box)(({ theme }) => ({
  padding: '85px 75px',
  display: 'flex',
  justifyContent: 'flex-start',

  '.Project-Title-Box': {
    minWidth: '35vw',
    maxWidth: '50vw',
    textAlign: 'left',
    paddingRight: '115px',

    '.MuiTypography-root': {
      marginTop: '35px',
      fontFamily: theme.fonts.main,
      lineHeight: 1.25,
      fontWeight: 'bold',
      fontSize: '64px',
    },

    '.BoxUnderline': {
      marginTop: '20px',
      height: '3px',
    },
  },

  '.Project-Description-Box': {
    fontFamily: theme.fonts.main,
    fontSize: '24px',
    flexGrow: 1,

    '.Project-Overview-Title': {
      fontFamily: theme.fonts.main,
      fontSize: '48px',
      marginBottom: '30px',
    },

    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',

      li: {
        fontFamily: theme.fonts.main,
        fontSize: '24px',
        lineHeight: 1.35,
        marginBottom: '24px',
      },
    },
  },

  [theme.breakpoints.down(900)]: {
    padding: '20px 15px 30px 15px',
    flexDirection: 'column',
    alignItems: 'center',

    '.Project-Title-Box': {
      minWidth: 'none',
      maxWidth: 'none',
      paddingRight: 0,
      marginBottom: '50px',

      '.MuiTypography-root': {
        marginTop: '25px',
      },
    },
  },

  [theme.breakpoints.down('tablet')]: {
    '.Project-Title-Box': {
      textAlign: 'center',
      marginBottom: '40px',

      '.MuiTypography-root': {
        fontSize: '45px',
      },

      '.BoxUnderline': {
        marginTop: '15px',
      },
    },

    '.Project-Description-Box': {
      h3: {
        fontSize: '36px',
      },

      '.Project-Overview-Title': {
        fontSize: '35px',
      },

      '.Project-Description-Body': {
        fontSize: '18px',

        ul: {
          margin: '25px 0 0 0',

          li: {
            marginBottom: '18px',
            fontSize: '18px',
          },
        },
      },

    },
  },
}));

export default {
  ProjectContainer,
  ProjectOverview,
};
