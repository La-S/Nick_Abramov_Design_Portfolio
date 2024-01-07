import { styled, Box, Modal } from '@mui/material';

const AdminDashboardContainer = styled(Box)(({ theme }) => ({
  '.No-Projects-Box': {
    padding: '15px 35px',

    '.MuiTypography-root': {
      fontFamily: theme.fonts.main,
      fontSize: '20px',
    },
  },
  
  [theme.breakpoints.down('tablet')]: {},
}));

const HeaderNavLinks = styled('ul')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',

  '.New-Project-Button': {
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

  svg: {
    fontSize: '20px',
    color: theme.textColors.main,
  },

  [theme.breakpoints.down('tablet')]: {
    '.New-Project-Button': {
      margin: '10px',
      padding: '3px 5px',
      fontSize: '14px',

      span: {
        display: 'none',
      },
    },
  },
}));

const NewProjectModal = styled(Modal)(() => ({
  form: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
}));

export default {
  AdminDashboardContainer,
  HeaderNavLinks,
  NewProjectModal,
};
