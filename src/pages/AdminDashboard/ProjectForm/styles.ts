import { styled } from '@mui/material';

const ProjectForm = styled('form')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: theme.componentColors.backgroundMain,
  color: theme.textColors.main,
  width: '80%',
  maxWidth: '800px',
  padding: '20px',
  borderRadius: '10px',

  '.Directions-Label': {
    marginBottom: '24px',
    fontFamily: theme.fonts.main,
    fontSize: '24px',
  },

  '.MuiTextField-root, .MuiOutlinedInput-root': {
    marginTop: '10px',
    borderRadius: '5px',

    '.MuiInputBase-root': {
      padding: 0,
    },

    'input, textarea': {
      fontFamily: theme.fonts.main,
      fontSize: '20px',
      color: theme.textColors.main,
      padding: '10px',
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

  '.MuiOutlinedInput-root': {
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

  'button:not(.EndAdornment-Button)': {
    marginTop: '10px',
    padding: '10px',
    fontFamily: theme.fonts.main,
    fontSize: '20px',
    backgroundColor: theme.componentColors.backgroundTertiary,
    color: theme.textColors.main,
    borderRadius: '5px',
    textTransform: 'uppercase',

    '&:hover': {
      backgroundColor: `${theme.componentColors.backgroundTertiary}!important`,
    },
  },

}));

export default {
  ProjectForm,
};
