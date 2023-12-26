import { alpha, styled } from '@mui/material';

const ProjectForm = styled('form')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: theme.componentColors.backgroundMain,
  color: theme.textColors.main,
  width: '80%',
  maxWidth: '800px',
  maxHeight: '800px',
  overflowY: 'auto',
  padding: '20px',
  borderRadius: '10px',

  '.Title-Label': {
    fontFamily: theme.fonts.main,
    fontSize: '24px',
  },

  '.Section-Title-Label': {
    marginTop: '15px',
    fontFamily: theme.fonts.main,
    fontSize: '20px',
    color: theme.textColors.main,

    '&:first-of-type': {
      marginTop: 0,
    },
  },

  '.Sub-Label': {
    fontFamily: theme.fonts.main,
    fontSize: '18px',
    color: theme.textColors.main,
  },

  '.Row-Box': {
    marginTop: '15px',
    padding: '15px',
    borderRadius: '5px',
    border: `1px solid ${theme.componentColors.backgroundTertiary}`,
  },

  '.MuiDivider-root': {
    marginTop: '15px',
    backgroundColor: theme.textColors.main,
  },

  '.MuiTextField-root, .Input-With-Icon': {
    marginTop: '10px',
    borderRadius: '5px',

    '.MuiInputBase-root': {
      padding: 0,
    },

    'input, textarea': {
      padding: '7.5px 10px',
      fontFamily: theme.fonts.main,
      fontSize: '18px',
      color: theme.textColors.main,
      backgroundColor: theme.componentColors.backgroundMain,
      border: `1px solid ${theme.componentColors.inputBorder}`,
      borderRadius: '5px',
      transition: 'border-color 0.3s ease-in-out',
      
      '&::placeholder': {
        opacity: 1,
      },

      '&:hover, &:focus-visible': {
        cursor: 'none',
        transition: 'border-color 0.3s ease-in-out',
        borderColor: `${theme.componentColors.backgroundTertiary} !important`,
      },

      '&:-webkit-autofill': {
        boxShadow: `0 0 0px 1000px ${theme.componentColors.backgroundMain} inset`,
        '-webkit-text-fill-color': theme.textColors.main,
      },

      fieldset: {
        border: 'none',
        outline: 'none',
      },

      '&:first-of-type': {
        marginTop: '0',
      },
    },
  },

  '.Input-With-Icon': {
    position: 'relative',
    paddingRight: '0',

    input: {
      paddingRight: '40px',
    },

    '.MuiButtonBase-root': {
      position: 'absolute',
      right: 0,
      top: 0,
      bottom: 0,
      width: '60px',

      svg: {
        color: theme.textColors.main,
        fontSize: '20px',
      },

      '&:hover': {
        svg: {
          color: '#ca0909',
        },
      },
    },
  },

  '.MuiOutlinedInput-root': {
    '.MuiSelect-select': {
      paddingTop: '7.5px',
      paddingBottom: '7.5px',
      fontFamily: theme.fonts.main,
      color: theme.textColors.main,
      backgroundColor: theme.componentColors.backgroundMain,
      border: `1px solid ${theme.componentColors.inputBorder}`,
    },
    
    '.MuiSvgIcon-root': {
      color: `${theme.textColors.main} !important`,
    },
  },

  '.Cell-Amount-Box': {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'flex-start',
    width: '100%',
    marginBottom: '20px',

    p: {
      marginRight: '10px',
      fontFamily: theme.fonts.main,
      fontSize: '18px',
      color: theme.textColors.main,
    },
  },

  '.Cell-Links-Box': {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '10px',

    '.MuiTextField-root': {
      flexGrow: 1,
      width: '125px',
      marginTop: '0',
      marginLeft: '10px',
      
      input: {
        fontSize: '16px',
        padding: '6.25px 10px',
      },
    },
  },

  'button:not(.EndAdornment-Button)': {
    marginTop: '10px',
    padding: '10px',
    fontFamily: theme.fonts.main,
    fontSize: '16px',
    backgroundColor: theme.componentColors.backgroundTertiary,
    color: theme.textColors.main,
    borderRadius: '0',
    textTransform: 'uppercase',

    '&:hover': {
      backgroundColor: `${theme.componentColors.backgroundTertiary}!important`,
    },
  },

  'button[type="submit"]': {
    marginTop: '25px',
    backgroundColor: '#1976d2',
    color: '#fff',

    '&:hover': {
      backgroundColor: `${alpha('#1976d2', 0.8)}!important`,
    },
  },

  '.Title-Label-Box': {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '20px',

    button: {
      marginTop: '0',
      marginLeft: 'auto',
      backgroundColor: 'transparent',
      
      svg: {
        fontSize: '24px',
        color: '#ca0909',
      },

      '&:hover': {
        backgroundColor: 'transparent!important',
      },
    },
  },

  [theme.breakpoints.down('tablet')]: {
    width: '90%',
  },
}));

export default {
  ProjectForm,
};
