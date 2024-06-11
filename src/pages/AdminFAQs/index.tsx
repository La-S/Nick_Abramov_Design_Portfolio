import React from 'react';
import useFAQs from '../../hooks/useFAQs';
import QuestionEditable from './QuestionEditable';
import S, { classes } from './styles';

const AdminFAQs = (): JSX.Element => {
  const { faqs } = useFAQs();

  return (
    <S.AdminFAQsContainer>
      <ul className={classes.list}>
        {faqs.map((question) => <QuestionEditable key={question.id} question={question} />)}
      </ul>
    </S.AdminFAQsContainer>
  );
};

export default AdminFAQs;
