import React from 'react';
import { Typography } from '@mui/material';
import S from './styles';
import QuestionsList from './QuestionsLists';

const Faq = (): JSX.Element => {
  return (
    <S.FaqContainer>
      <S.PageTitle variant='h2'>
        Frequently Asked
        <span>Questions</span>
      </S.PageTitle>
      <QuestionsList />
      <S.Banner>
        <Typography variant='h3'>
          Let me maximize your company’s potential
        </Typography>
      </S.Banner>
    </S.FaqContainer>
  );
};

export default Faq;
