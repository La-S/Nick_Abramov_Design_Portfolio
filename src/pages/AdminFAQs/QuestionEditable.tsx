import React from 'react';
import { TextField } from '@mui/material';
import type { FAQ } from '../../types/data/faq';
import S, { classes } from './styles';

interface QuestionEditableProps {
  question: FAQ;
}

const QuestionEditable = ({ question }: QuestionEditableProps): JSX.Element => {
  return (
    <S.QuestionEditable className={classes.listItem}>
      <TextField defaultValue={question.question} className={classes.question} />
      <TextField defaultValue={question.answer} className={classes.answer} />
    </S.QuestionEditable>
  );
};

export default QuestionEditable;
