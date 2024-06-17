import React, { useContext, useState } from 'react';
import { TextField, Button, Box } from '@mui/material';
import {
  Trash as DeleteIcon,
  Check as UpdateIcon,
  DotsSix as DnDIcon,
} from '@phosphor-icons/react';
import { deleteFAQ, reorderFAQs, updateFAQ } from '../../api/faqMethods';
import type { FAQ } from '../../types/data/faq';
import type { FAQInputDto } from '../../types/data/faqAPI';
import S, { classes } from './styles';
import { AdminFAQsGridContext } from './contexts';
import { dndClasses, handleDragOver, handleDragStart, handleDrop } from '../../common/dndGridFeature';
import { QueryClient } from '@tanstack/react-query';

interface FAQEditableProps {
  faq: FAQ;
  queryClient: QueryClient;
}

const FAQEditable = (props: FAQEditableProps): JSX.Element => {
  const {
    reorderingState: [isReordering, setIsReordering],
    draggingElIdState: [draggingElId, setDraggingElId],
    draggingOverElIdState: [draggingOverElId, setDraggingOverElId],
  } = useContext(AdminFAQsGridContext);
  const { queryClient } = props;
  const [faq, setFaq] = useState({ ...props.faq });
  const isUnchanged = faq.question === props.faq.question && faq.answer === props.faq.answer;

  const classList = [classes.faqWrapper];
  if (isReordering) {
    classList.push(dndClasses.reordering);
  }
  if (draggingElId === faq.id) {
    classList.push(dndClasses.dragging);
  }
  if (draggingOverElId === faq.id) {
    classList.push(dndClasses.draggingOver);
  }

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
    <S.FAQCard
      className={classList.join(' ')}
      draggable={!isReordering}
      onDragStart={(e) => handleDragStart(
        e,
        faq.id,
        setDraggingElId,
      )}
      onDragOver={(e) => handleDragOver(
        e,
        faq.id,
        setDraggingOverElId,
      )}
      onDrop={(e) => (
        handleDrop(
          e,
          faq.id,
          faq.order,
          setIsReordering,
          queryClient,
          ['faqs'],
          setDraggingElId,
          setDraggingOverElId,
          reorderFAQs
        )
      )
      }
    >
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
        <DnDIcon size={32} className={classes.dndIcon} />

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
    </S.FAQCard>
  );
};

export default FAQEditable;
