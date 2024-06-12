import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import type { FAQInputDto } from '../../../types/data/faqAPI';
import { createFAQ } from '../../../api/faqMethods';
import { useQueryClient } from '@tanstack/react-query';

const FAQForm = (): JSX.Element => {
  const queryClient = useQueryClient();
  const [newFaq, setNewFaq] = useState<FAQInputDto>({
    question: '',
    answer: '',
  });

  const onCreateClick = (): void => {
    createFAQ(newFaq)
      .then(() => {
        alert('FAQ created successfully!');
        setNewFaq({ question: '', answer: '' });
        queryClient.invalidateQueries({ queryKey: ['faqs'] });
      })
      .catch((err) => alert(err.response.data.message));
  };

  return (
    <div>
      <TextField
        placeholder='Enter question...'
        onChange={(e) => setNewFaq({ ...newFaq, question: e.target.value })}
      />
      <TextField
        placeholder='Enter answer...'
        onChange={(e) => setNewFaq({ ...newFaq, answer: e.target.value })}
      />
      <Button onClick={onCreateClick} variant='contained' color='primary'>
        new faq <p>&nbsp;+</p>
      </Button>
    </div>
  );
};

export default FAQForm;
