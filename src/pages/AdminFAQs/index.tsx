import React from 'react';
import useFAQs from '../../hooks/useFAQs';
import FAQEditable from './FAQEditable';
import S, { classes } from './styles';

const AdminFAQs = (): JSX.Element => {
  const { faqs } = useFAQs();

  return (
    <S.AdminFAQsContainer>
      <ul className={classes.list}>
        {faqs.map((faq) => <FAQEditable key={faq.id} faq={faq} />)}
      </ul>
    </S.AdminFAQsContainer>
  );
};

export default AdminFAQs;
