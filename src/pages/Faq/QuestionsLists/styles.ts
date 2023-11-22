import { styled, Box } from '@mui/material';

const QuestionsListsContainer = styled(Box)(() => ({
  display: 'flex',
  flexWrap: 'wrap',
  margin: '0 75px 85px 75px',
}));


const QuestionsList = styled('ul')(({ theme }) => ({
  width: '100%',
  margin: '0',
  padding: '0',
  listStyle: 'none',

  [theme.breakpoints.up('extraLarge')]: {
    width: 'calc(50% - 35px)',
    marginLeft: '70px',

    '&:first-of-type': {
      marginLeft: '0',
    },
  },
}));

export default {
  QuestionsListsContainer,
  QuestionsList,
};
