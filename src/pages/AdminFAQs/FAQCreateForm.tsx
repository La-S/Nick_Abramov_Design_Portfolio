import { Box, Button, TextField } from '@mui/material';
import { Plus as CreateIcon } from '@phosphor-icons/react';
import React, { useState } from 'react';
import type { FAQInputDto } from '../../types/data/faqAPI';
import { createFAQ } from '../../api/faqMethods';
import { useQueryClient } from '@tanstack/react-query';
import S, { classes } from './styles';

const FAQForm = (): JSX.Element => {
  const queryClient = useQueryClient();
  const [newFaq, setNewFaq] = useState<FAQInputDto>({
    question: '',
    answer: '',
  });
  const classNames = [classes.faqWrapper, classes.createCard];

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
    <S.FAQCard className={classNames.join(' ')} >
      <TextField
        value={newFaq.question}
        placeholder='Enter question...'
        onChange={(e) => setNewFaq({ ...newFaq, question: e.target.value })}
      />
      <TextField
        value={newFaq.answer}
        placeholder='Enter answer...'
        onChange={(e) => setNewFaq({ ...newFaq, answer: e.target.value })}
        multiline
        maxRows={3}
      />
      <Box className={classes.actionBtnsWrapper}>
        <Button
          onClick={onCreateClick}
          variant='contained'
          color='primary'
          endIcon={<CreateIcon color='white' />}
        >
          new faq
        </Button>
      </Box>
    </S.FAQCard>
  );
};

export default FAQForm;
