import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';
import {
  Trash as DeleteIcon,
  Check as UpdateIcon,
} from '@phosphor-icons/react';
import { deleteFAQ, updateFAQ } from '../../api/faqMethods';
import type { FAQ } from '../../types/data/faq';
import type { FAQInputDto } from '../../types/data/faqAPI';
import S, { classes } from './styles';
import { useQueryClient } from '@tanstack/react-query';

interface FAQEditableProps {
  faq: FAQ;
}

const FAQEditable = (props: FAQEditableProps): JSX.Element => {
  const queryClient = useQueryClient();
  const [faq, setFaq] = useState({ ...props.faq });
  const isUnchanged = faq.question === props.faq.question && faq.answer === props.faq.answer;

  const onUpdateClick = (): void => {
    const faqInputDto: FAQInputDto = {
      question: faq.question.trim(),
      answer: faq.answer.trim(),
    };

    updateFAQ(faq.id, faqInputDto)
      .then(() => {
        alert('FAQ updated successfully!');
        queryClient.invalidateQueries({ queryKey: ['faqs'] });
      })
      .catch((err) => alert(err.response.data.message));
  };

  const onDeleteClick = (): void => {
    deleteFAQ(faq.id)
      .then(() => {
        alert('FAQ deleted successfully!');
        queryClient.invalidateQueries({ queryKey: ['faqs'] });
      })
      .catch((err) => alert(err.response.data.message));
  };

  return (
    <S.FAQEditable className={classes.faqWrapper}>
      <TextField
        defaultValue={faq.question}
        onChange={(e) => setFaq({...faq, question: e.target.value })}
        className={classes.question}
      />
      <TextField
        multiline
        maxRows={3}
        defaultValue={faq.answer}
        onChange={(e) => setFaq({...faq, answer: e.target.value })}
        className={classes.answer}
      />
      <Box className={classes.actionBtnsWrapper}>
        <Button
          onClick={onUpdateClick}
          disabled={isUnchanged}
          className={classes.btnUpdate}
          variant='contained'
          endIcon={<UpdateIcon color='white' />}
        >
          Update
        </Button>
        <Button
          onClick={onDeleteClick}
          className={classes.btnDelete}
          variant='contained'
          color='error'
          endIcon={<DeleteIcon color='white' />}
        >
          Delete
        </Button>
      </Box>
    </S.FAQEditable>
  );
};

export default FAQEditable;
