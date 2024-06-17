import React, { useState } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import useFAQs from '../../hooks/useFAQs';
import FAQForm from './FAQCreateForm';
import FAQEditable from './FAQEditable';
import S, { classes } from './styles';
import { AdminFAQsGridContext } from './contexts';

const AdminFAQs = (): JSX.Element => {
  const queryClient = useQueryClient();
  const { faqs } = useFAQs();
  const [isReordering, setIsReordering] = useState(false);
  const [draggingElId, setDraggingElId] = useState<string | null>(null);
  const [draggingOverElId, setDraggingOverElId] = useState<string | null>(null);

  return (
    <AdminFAQsGridContext.Provider
      value={{
        reorderingState: [isReordering, setIsReordering],
        draggingElIdState: [draggingElId, setDraggingElId],
        draggingOverElIdState: [draggingOverElId, setDraggingOverElId],
      }}
    >
      <S.AdminFAQsContainer>
        <ul className={classes.list}>
          {faqs.map((faq) => {
            const uniqueOrderId =`${faq.id} ${faq.order}`;
            return <FAQEditable key={uniqueOrderId} faq={faq} queryClient={queryClient} />;
          })}
          <FAQForm />
        </ul>
      </S.AdminFAQsContainer>
    </AdminFAQsGridContext.Provider>
  );
};

export default AdminFAQs;
