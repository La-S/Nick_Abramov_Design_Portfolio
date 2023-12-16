import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import QuestionCollapsible from './QuestionCollapsible';
import S from './styles';
import { splitArrayIntoChunks } from './utils';

const QUESTIONS_AND_ANSWERS: Array<{ question: string; answer: string }> = [
  {
    question: 'What services do you offer?',
    answer:
      'I offer the following services: Consultation, Logo Design,' +
      'Logo Animation, Brand Identity, Website Design, Illustrations, Portraits, and more.',
  },
  {
    question: 'How many years of experience do you have?',
    answer: 'I have 10+ years of experience in web design and development.',
  },
  {
    question: 'Do you have a design degree?',
    answer: 'I have 10+ years of experience in web design and development.',
  },
  {
    question: 'How long does it take?',
    answer: 'I have 10+ years of experience in web design and development.',
  },
  {
    question: 'Do you work with international clients?',
    answer: 'I have 10+ years of experience in web design and development.',
  },
  {
    question: 'Can you give me feedback on my current logo?',
    answer: 'I have 10+ years of experience in web design and development.',
  },
  {
    question: 'Can you fix up my current logo?',
    answer: 'I have 10+ years of experience in web design and development.',
  },
  {
    question: 'I can’t find what I’m looking for, what should I do?',
    answer: 'I have 10+ years of experience in web design and development.',
  },
];

const QuestionsLists = (): JSX.Element => {
  const questionsChunks = splitArrayIntoChunks(QUESTIONS_AND_ANSWERS, 4);

  return (
    <S.QuestionsListsContainer>
      {questionsChunks.map((questionsChunk) => (
        <S.QuestionsList key={uuidv4()}>
          {questionsChunk.map(({ question, answer }) => (
            <QuestionCollapsible question={question} answer={answer} key={question} />
          ))}
        </S.QuestionsList>
      ))}
    </S.QuestionsListsContainer>
  );
};

export default QuestionsLists;
