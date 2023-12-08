import { styled, Box } from '@mui/material';

const LandingContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  marginBottom: '20px',

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

  [theme.breakpoints.down('tablet')]: {
    ul: {
      padding: '35px 20px',

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
}));

const SortBarContainer = styled(Box)(() => ({

}));

export default {
  LandingContainer,
  SortBarContainer,
};
