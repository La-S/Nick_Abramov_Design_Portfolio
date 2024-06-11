import { styled, Box } from '@mui/material';

export const classes = {
  list: 'admin-faqs-list',
  listItem: 'admin-faqs-list-item',
  question: 'admin-faqs-question',
  answer: 'admin-faqs-answer',
};

const AdminFAQsContainer = styled(Box)(() => ({
  margin: '15px',

  [`.${classes.list}`]: {
    display: 'flex',
    flexDirection: 'column',

    listStyleType: 'none',
    padding: '0',

    [`.${classes.listItem}`]: {
      display: 'flex',
      flexDirection: 'column',
      margin: '10px',
      color: 'red',
    }
  }
}));

const QuestionEditable = styled('li')(({ theme }) => ({
  [`.${classes.question}, .${classes.answer}`]: {
    color: theme.textColors.main,
  },

  [theme.breakpoints.down('tablet')]: {}
}));

export default {
  AdminFAQsContainer,
  QuestionEditable,
};
