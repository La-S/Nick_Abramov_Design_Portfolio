import { Box, Typography, styled } from '@mui/material';

const AboutPageContainer = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down('laptop')]: {

  },
}));

const AboutPageTitle = styled(Typography)(({ theme }) => ({
  margin: '110px 65px 70px 65px',

  span: {
    fontFamily: theme.fonts.main,
    fontSize: '90px',
    color: theme.textColors.tertiaryAlternate,
    fontWeight: 'bold',
  },

  [theme.breakpoints.down('tablet')]: {
    margin: '35px 25px',
    display: 'flex',
    flexDirection: 'column',

    span: {
      fontSize: '70px',
      color: theme.textColors.main,
    },
  },
}));

const AboutBody = styled(Box)(({ theme }) => ({
  display: 'flex',
  margin: '0 70px',
  paddingBottom: '70px',

  img: {
    alignSelf: 'center',
    width: '45%',
    maxWidth: '700px',
    marginRight: '75px',
    objectFit: 'cover',
    '-webkit-user-drag': 'none',
    filter: 'contrast(1.05)',
  },

  '.About-Body-Text': {
    '.MuiTypography-root': {
      fontFamily: theme.fonts.main,
      fontSize: '24px',
    },
  },

  [theme.breakpoints.down('laptop')]: {
    margin: '0',
    flexDirection: 'column',

    img: {
      order: 2,
      width: '100%',
      maxWidth: 'none',
      marginRight: '0',
    },

    '.About-Body-Text': {
      order: 1,
      margin: '0 70px 55px 70px',
    },
  },

  [theme.breakpoints.down('tablet')]: {
    paddingBottom: '0px',

    img: {
      marginTop: '25px',
    },

    '.About-Body-Text': {
      margin: '0 25px 20px 25px',

      '.MuiTypography-root': {
        fontSize: '18px',
      },

      a: {
        fontSize: '20px',
      },
    },
  },
}));

export default {
  AboutPageContainer,
  AboutPageTitle,
  AboutBody,
};
