import { styled, Box } from '@mui/material';

const LandingContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginBottom: '20px',

  '.SortBar-Container': {
    ul: {
      margin: 0,
      display: 'flex',
      justifyContent:'center',
      alignItems: 'center',
      flexWrap: 'wrap',
      maxWidth: '800px',
      padding: '35px',
      listStyle: 'none',
  
      li: {
        marginRight: '90px',
  
        button: {
          '.MuiTypography-root': {
            fontFamily: theme.fonts.main,
            fontSize: '20px',
            color: theme.textColors.main,
  
            transition: 'color 0.3s ease-in-out',
            '&.Active, &:hover': {
              color: theme.textColors.secondary,
            },
          },
        },
  
        '&:last-of-type': {
          marginRight: 0,
        },
      },
    },
  },

  '.ProjectGrid-Container': {
    width: '100%',
  },

  [theme.breakpoints.down('tablet')]: {
    '.SortBar-Container': {
      ul: {
        padding: '35px 15px',
  
        li: {
          marginRight: '50px',
  
          button: {
            '.MuiTypography-root': {
              fontSize: '16px',
            },
          },
        },
      },
    },
  },
}));

export default {
  LandingContainer,
};
