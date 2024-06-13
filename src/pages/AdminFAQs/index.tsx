import React from 'react';
import useFAQs from '../../hooks/useFAQs';
import FAQForm from './FAQCreateForm';
import FAQEditable from './FAQEditable';
import S, { classes } from './styles';

const AdminFAQs = (): JSX.Element => {
  const { faqs } = useFAQs();

  return (
    <S.AdminFAQsContainer>
      <h3>Note: Currently under construction</h3>

      <ul className={classes.list}>
        {faqs.map((faq) => <FAQEditable key={faq.id} faq={faq} />)}
        <FAQForm />
      </ul>
    </S.AdminFAQsContainer>
  );
};

export default AdminFAQs;
