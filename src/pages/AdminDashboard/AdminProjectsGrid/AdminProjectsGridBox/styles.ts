import { styled, Modal, Card, alpha } from '@mui/material';

const AdminProjectsGridBox = styled(Card)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  maxWidth: '350px',
  margin: '15px',
  backgroundColor: theme.componentColors.backgroundMain,
  border: `2px double ${theme.componentColors.backgroundTertiary}`,

  '.MuiCardMedia-root': {
    height: '250px',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },

  '.MuiCardContent-root': {
    '.MuiTypography-body2': {
      color: alpha(theme.textColors.main, 0.65),
    },

    h5: {
      color: theme.textColors.main,
    },
  },

  '.MuiCardActions-root': {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexGrow: 1,
    paddingTop: '0',
    
    '.CardButtons-Wrapper': {
      display: 'flex',

      button: {
        marginLeft: 8,
      },
    },
  },

  '&:hover': {
    cursor: 'grab',
  },

  [theme.breakpoints.down('tablet')]: {
    maxWidth: '550px',
  },
}));

const DeleteModal = styled(Modal)(({ theme }) => ({
  '.Delete-Confirmation-Box': {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    display: 'flex',
    flexDirection: 'column',
    minHeight: '200px',
    width: '80%',
    maxWidth: '750px',
    padding: '20px',
    margin: 'auto',
    backgroundColor: theme.componentColors.backgroundMain,
    borderRadius: '10px',
    boxShadow: '5px 5px 30px 1px black',
    color: theme.textColors.main,

    h6: {
      marginTop: '10px',
    },

    '.Confirmation-Buttons': {
      flexGrow: 1,
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'flex-end',
      marginTop: '20px',

      button: {
        marginRight: '10px',

        '&:last-of-type': {
          marginRight: '0',
        },

        '&:not(.MuiButton-contained)': {
          color: theme.textColors.main,
        },
      },
    },
  },
}));

const EditModal = styled(Modal)(() => ({
  form: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
}));

export default {
  AdminProjectsGridBox,
  DeleteModal,
  EditModal,
};
