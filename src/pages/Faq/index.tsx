import React from 'react';
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
    </S.FaqContainer>
  );
};

export default Faq;
