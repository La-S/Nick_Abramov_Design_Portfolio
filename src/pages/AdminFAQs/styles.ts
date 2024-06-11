import { styled, Box } from '@mui/material';

export const classes = {
  list: 'Admin-FAQs-List',
  faqWrapper: 'Admin-FAQs-FAQ-Wrapper',
  question: 'Admin-FAQs-Question',
  answer: 'Admin-FAQs-Answer',
  actionBtnsWrapper: 'Admin-FAQs-Action-Btns-Wrapper',
  btnUpdate: 'Admin-FAQs-Btn-Update',
  btnDelete: 'Admin-FAQs-Btn-Delete',
};

const AdminFAQsContainer = styled(Box)(() => ({
  margin: '15px',

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
