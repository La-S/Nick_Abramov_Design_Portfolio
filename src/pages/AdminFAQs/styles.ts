import { styled, Box } from '@mui/material';

export const classes = {
  list: 'Admin-FAQs-List',
  faqWrapper: 'Admin-FAQs-FAQ-Wrapper',
  createCard: 'Admin-FAQs-FAQ-Create-Card',
  question: 'Admin-FAQs-Question',
  answer: 'Admin-FAQs-Answer',
  actionBtnsWrapper: 'Admin-FAQs-Action-Btns-Wrapper',
  btnUpdate: 'Admin-FAQs-Btn-Update',
  btnDelete: 'Admin-FAQs-Btn-Delete',
  btnCreateWrapper: 'Admin-FAQs-Btn-Create-Wrapper',
  btnCreate: 'Admin-FAQs-Btn-Create',
  dndIcon: 'Admin-FAQs-Dnd-Icon',

  reordering: '--reordering',
  dragging: '--dragging',
  draggingOver: '--dragging-over',
};

const AdminFAQsContainer = styled(Box)(({ theme }) => ({
  margin: '15px',

  [`.${classes.list}`]: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '20px',

    listStyleType: 'none',
    padding: '0',

    [`.${classes.faqWrapper}`]: {
      [`.${classes.btnUpdate}`]: {
        marginRight: '10px',

        '&.Mui-disabled': {
          backgroundColor: 'gray',
          color: '#c7c7c7',

          svg: {
            fill: '#c7c7c7',
          }
        }
      },

      [`.${classes.dndIcon}`]: {
        marginRight: 'auto',
      },

      [`&.${classes.createCard}`]: {
        borderColor: '#78a6f7'
      },

      '&:last-of-type': {
        marginRight: 'auto',
      }
    },
  },

  [theme.breakpoints.down('laptop')]: {
    flexDirection: 'column',
  }
}));

const FAQCard = styled('li')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  flexBasis: '49%',
  padding: '20px',
  border: `2px double ${theme.componentColors.backgroundTertiary}`,
  borderRadius: '4px',

  '.MuiFormControl-root': {
    '.MuiInputBase-root': {
      padding: 0,

      'input, textarea': {
        marginBottom: '10px',
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
          WebkitTextFillColor: theme.textColors.main,
        },
      },

      fieldset: {
        border: 'none',
      },

      '&:hover' : {
        'fieldset': {
          borderColor: 'transparent'
        }
      },
    },
  },

  [`.${classes.actionBtnsWrapper}`]: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: '43px',
    marginTop: 'auto',

    button: {
      marginTop: '7px',
    },
  },

  [theme.breakpoints.down('laptop')]: {
    flexBasis: '100%',
  }
}));

export default {
  AdminFAQsContainer,
  FAQCard,
};
