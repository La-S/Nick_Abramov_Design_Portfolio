import { alpha, styled } from '@mui/material';

const ProjectForm = styled('form')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: theme.componentColors.backgroundMain,
  color: theme.textColors.main,
  border: `2px double ${alpha(theme.componentColors.backgroundTertiary, 0.5)}`,
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

    '.Row-Number-Box': {
      display: 'flex',
      alignItems: 'center',

      button: {
        marginTop: '0',
        marginLeft: 'auto',
        backgroundColor: 'transparent',

        svg: {
          fontSize: '24px',
          color: theme.textColors.main,
        },

        '&:hover': {
          backgroundColor: 'transparent!important',

          svg: {
            color: '#ca0909',
          },
        },
      },
    },
  },

  '.MuiDivider-root': {
    marginTop: '15px',
    backgroundColor: theme.textColors.main,
  },

  '.MuiTextField-root': {
    marginTop: '10px',
    borderRadius: '5px',

    '.MuiInputBase-root': {
      padding: 0,

      '&:hover' : {
        'fieldset': {
          borderColor: 'transparent'
        }
      }
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
        opacity: 0.65,
      },

      '&:hover, &:focus-visible': {
        cursor: 'none',
        transition: 'border-color 0.3s ease-in-out',
        borderColor: `${theme.componentColors.backgroundTertiary} !important`,
      },

      '&:-webkit-autofill': {
        boxShadow: `0 0 0px 1000px ${theme.componentColors.backgroundMain} inset`,
        WebkitTextFillColor: theme.textColors.main,
      },

      '&:first-of-type': {
        marginTop: '0',
      },
    },
  },

  '.CoverImagePath-Box': {
    marginTop: '10px',
    display: 'flex',
    alignItems: 'center',

    '.MuiTextField-root': {
      marginTop: '0',
      flexGrow: 1,
    },
  },

  '.CoverImageAlt-Box': {
    display: 'flex',

    '.MuiTextField-root': {
      flexGrow: 1,
    },
  },

  '.Description-Label-Wrapper': {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '15px',

    a: {
      color: theme.textColors.tertiary,

      '&:visited': {
        color: theme.textColors.tertiary,
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
    justifyContent: 'flex-start',
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
    flexWrap: 'wrap',
    alignItems: 'flex-start',
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

    '.Cell-Link-Path-Box': {
      flexGrow: 1,
      display: 'flex',
      flexDirection: 'column',
      rowGap: '10px',
      marginRight: '10px',

      '.MuiTextField-root': {
        width: '100%',
      },
    },

    '.Cell-Link-Alt-Box': {
      flexBasis: '100%',
      marginTop: '10px',
      width: '125px',
    }
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

  '.Content-Space-Box': {
    display: 'flex',
    alignItems: 'center',
    marginTop: '15px',

    '.MuiCheckbox-root': {
      '.MuiSvgIcon-root': {
        color: theme.componentColors.backgroundTertiary,
      },
    },
  },

  [theme.breakpoints.down('tablet')]: {
    width: '90%',

    '.Hide-On-Smaller-Screens': {
      display: 'none',
    },
  },
}));

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

export default {
  ProjectForm,
  VisuallyHiddenInput,
};
