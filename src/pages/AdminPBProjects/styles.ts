import { styled } from '@mui/material';

export const classes = {
  root: 'AdminPBProjects-Container',
  newPBProjectButtonWrapper: 'AdminPBProjects-NewPBProjectButtonWrapper',
  newPBProjectButton: 'AdminPBProjects-NewPBProjectButton',
};

const AdminPBProjectsContainer = styled('div')(({ theme }) => ({
  '.No-Projects-Box': {
    padding: '15px 35px',

    '.MuiTypography-root': {
      fontFamily: theme.fonts.main,
      fontSize: '20px',
    },
  },

  [`.${classes.newPBProjectButtonWrapper}`] : {
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-end',

    [`.${classes.newPBProjectButton}`]: {
      margin: '15px',
      padding: '5px 7.5px',
      backgroundColor: theme.componentColors.backgroundSecondary,

      p: {
        display: 'flex',
        margin: 0,
        fontSize: '16px',
        fontFamily: theme.fonts.secondary,

        p: {
          margin: 0,
        },

        transition: 'color 0.2s ease-in-out',
        '&:hover': {
          color: theme.componentColors.backgroundMain,

          transition: 'color 0.2s ease-in-out',
          p: {
            color: theme.componentColors.backgroundMain,
          },
        },
      },
    },
  },

  [theme.breakpoints.down('tablet')]: {
    [`.${classes.newPBProjectButtonWrapper}`] : {
      justifyContent: 'center'
    }
  },
}));

export default {
  AdminPBProjectsContainer,
};
