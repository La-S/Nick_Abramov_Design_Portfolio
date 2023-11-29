import React from 'react';
import { Typography } from '@mui/material';
import S from './styles';
import QuestionsList from './QuestionsLists';
import PageTitle from '../../components/PageTitle';

const FaqPage = (): JSX.Element => {
  return (
    <S.FaqContainer>
      <PageTitle>
        Frequently Asked
        <span>Questions</span>
      </PageTitle>
      <QuestionsList />
      <S.Banner>
        <Typography variant='h3'>
          Let me maximize your company’s potential
        </Typography>
      </S.Banner>
    </S.FaqContainer>
  );
};

export default FaqPage;
