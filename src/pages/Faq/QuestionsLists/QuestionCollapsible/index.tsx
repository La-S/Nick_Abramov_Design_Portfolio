import React, { useState } from 'react';
import { Collapse, Typography } from '@mui/material';
import { Plus as PlusIcon, Minus as MinusIcon } from '@phosphor-icons/react';
import S from './styles';

interface Props {
  question: string;
  answer: string;
}

const QuestionCollapsible = ({ question, answer }: Props): JSX.Element => {
  const [expanded, setExpanded] = useState(false);

  return (
    <S.Container>
      <S.QuestionButton
        onClick={() => setExpanded(!expanded)}
        disableRipple
      >
        <S.QuestionContainer>
          {expanded ? <MinusIcon /> : <PlusIcon />}
          <Typography>{question}</Typography>
        </S.QuestionContainer>
      </S.QuestionButton>
      <Collapse in={expanded}>
        <S.AnswerContainer>
          <Typography>{answer}</Typography>
        </S.AnswerContainer>
      </Collapse>
    </S.Container>
  );
};

export default QuestionCollapsible;
