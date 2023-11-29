import { styled } from '@mui/material';

const ContactForm = styled('form')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',

  '.Contact-Form-Label': {
    marginBottom: '28px',
    fontFamily: theme.fonts.main,
    fontWeight: '20px',
  },

  '.MuiTextField-root': {
    marginTop: '20px',
    borderRadius: '5px',

    '.MuiInputBase-root': {
      padding: 0,
    },

    'input, textarea': {
      fontFamily: theme.fonts.main,
      fontWeight: '20px',
      color: theme.textColors.main,
      padding: '10px',
      border: `1px solid ${theme.componentColors.inputBorder}`,
      borderRadius: '5px',
      transition: 'border-color 0.3s ease-in-out',

      '&::placeholder': {
        opacity: 1,
      },

      '&:hover, &:focus-visible': {
        transition: 'border-color 0.3s ease-in-out',
        borderColor: `${theme.componentColors.backgroundTertiary} !important`,
      },

      '&:-webkit-autofill': {
        boxShadow: `0 0 0px 1000px ${theme.componentColors.backgroundMain} inset`,
        '-webkit-text-fill-color': theme.textColors.main,
      },
    },

    fieldset: {
      border: 'none',
      outline: 'none',
    },

    '&:first-of-type': {
      marginTop: '0',
    },
  },

  '.Submit-Button': {
    marginTop: '40px',
    padding: '10px',
    fontFamily: theme.fonts.main,
    fontSize: '20px',
    backgroundColor: theme.componentColors.backgroundTertiary,
    color: theme.textColors.main,
    borderRadius: '5px',
    textTransform: 'uppercase',
  },
}));

export default {
  ContactForm,
};
