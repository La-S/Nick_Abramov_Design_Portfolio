import { styled, Box } from '@mui/material';

const FooterContainer = styled(
  Box,
  { shouldForwardProp: (propName) => propName !== 'pathName' }
)<{ pathName: string }>(({ theme, pathName }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  width: '100%',
  minHeight: '405px',
  padding: '70px 115px 50px 115px',

  '.Main-Section': {
    flexBasis: '70%',

    '.Main-Body-Text': {
      fontFamily: theme.fonts.main,
      lineHeight: 'normal',
      fontSize: '20px',
      margin: '40px 0',
    },

    '.Nav': {
      display: 'flex',

      li: {
        a: {
          marginRight: '25px',
          fontFamily: theme.fonts.main,
          fontSize: '20px',
          color: theme.textColors.main,
          textDecoration: 'none',

          '&.Active': {
            color: theme.textColors.secondary,
          },
        },
        
        '&:last-of-type': {
          a: {
            marginRight: '0',
          },
        },
      },
    },
  },

  '.Links-Section': {
    flexBasis: '25%',
    textAlign: 'right',

    '.Social-Media-Links-Container': {
      a: {
        marginLeft: '26px',
  
        svg: {
          width: '24px',
          height: '24px',
        },

        '&:first-of-type': {
          marginLeft: '0',
        },
      },
    },

    '.Email-Link-Container' : {
      marginTop: '40px',

      a: {
        fontFamily: theme.fonts.main,
        fontSize: '20px',
        textDecoration: 'none',
        lineHeight: 'normal',
      },
    },
  },

  '.Copyright': {
    width: '100%',
    marginTop: '60px',
    textAlign: 'center',
    fontFamily: theme.fonts.main,
    fontSize: '20px',
    color: theme.textColors.copyright,
  },

  [theme.breakpoints.up('extraLarge')]: {
    '.Main-Section': {
      /* Max width of the main section in the footer is set to 1379px
         for about page, extra large screens specifically.
         to avoid background from being larger than it should (image issue) */
      ...(pathName === 'about' && { maxWidth: '1379px' }),
    },

    '.Links-Section': {
      ...(pathName === 'about' && { display: 'none' }),
    },
  },

  [theme.breakpoints.down('laptop')]: {
    '.Main-Section': {
      flexBasis: '100%',
      textAlign: 'center',

      '.Main-Body-Text': {
        marginBottom: '35px',
      },

      '.Nav': {
        justifyContent: 'center',
      },
    },

    '.Links-Section': {
      flexBasis: '100%',
      textAlign: 'center',

      '.Social-Media-Links-Container': {
        marginTop: '25px',
      },

      '.Email-Link-Container' : {
        marginTop: '15px',
      },
    },

    '.Copyright': {
      marginTop: '35px',
      textAlign: 'center',
    },
  },

  [theme.breakpoints.down('tablet')]: {
    height: '350px',
    padding: '40px 25px 25px 25px',

    '.Main-Section': {
      '.Main-Body-Text': {
        margin: '20px 0',
        fontSize: '16px',
      },

      '.Nav': {
        li: {
          a: {
            fontSize: '16px',
          },
        },
      },
    },

    '.Links-Section': {
      '.Social-Media-Links-Container': {
        marginTop: '20px',
      },

      '.Email-Link-Container': {
        marginTop: '10px',
      },
    },

    '.Copyright': {
      marginTop: '30px',
      fontSize: '16px',
    },
  },
}));

const LogoContainer = styled(Box)(({ theme }) => ({
  width: '335px',
  height: '46px',

  [theme.breakpoints.down('laptop')]: {
    margin: 'auto',
  },

  [theme.breakpoints.down('tablet')]: {
    width: '209px',
    height: '28px',
  },
}));

export default {
  FooterContainer,
  LogoContainer,
};
