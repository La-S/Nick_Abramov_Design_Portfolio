import { styled, Box } from '@mui/material';

export const classes = {
  list: 'Admin-FAQs-List',
  faqWrapper: 'Admin-FAQs-FAQ-Wrapper',
  question: 'Admin-FAQs-Question',
  answer: 'Admin-FAQs-Answer',
  actionBtnsWrapper: 'Admin-FAQs-Action-Btns-Wrapper',
  btnUpdate: 'Admin-FAQs-Btn-Update',
  btnDelete: 'Admin-FAQs-Btn-Delete',
  btnCreateWrapper: 'Admin-FAQs-Btn-Create-Wrapper',
  btnCreate: 'Admin-FAQs-Btn-Create'
};

const AdminFAQsContainer = styled(Box)(() => ({
  margin: '15px',

  // [`.${classes.btnCreateWrapper}`] : {
  //   width: '100%',
  //   display: 'flex',
  //   justifyContent: 'flex-end',

  //   [`.${classes.btnCreate}`]: {
  //     margin: '0 15px 15px 15px',
  //     padding: '5px 7.5px',
  //     backgroundColor: theme.componentColors.backgroundSecondary,

  //     p: {
  //       display: 'flex',
  //       margin: 0,
  //       fontSize: '16px',
  //       fontFamily: theme.fonts.secondary,

  //       p: {
  //         margin: 0,
  //       },

  //       transition: 'color 0.2s ease-in-out',
  //       '&:hover': {
  //         color: theme.componentColors.backgroundMain,

  //         transition: 'color 0.2s ease-in-out',
  //         p: {
  //           color: theme.componentColors.backgroundMain,
  //         },
  //       },
  //     },
  //   },
  // },

  [`.${classes.list}`]: {
    display: 'flex',
    flexDirection: 'column',

    listStyleType: 'none',
    padding: '0',

    [`.${classes.faqWrapper}`]: {
      display: 'flex',
      flexDirection: 'column',
      margin: '10px',
      color: 'red',
    }
  }
}));

const FAQEditable = styled('li')(({ theme }) => ({
  [`.${classes.question}, .${classes.answer}`]: {
    color: theme.textColors.main,
  },

  [theme.breakpoints.down('tablet')]: {}
}));

export default {
  AdminFAQsContainer,
  FAQEditable,
};
