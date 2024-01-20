import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import QuestionCollapsible from './QuestionCollapsible';
import S from './styles';
import { splitArrayIntoChunks } from './utils';

const QUESTIONS_AND_ANSWERS: Array<{ question: string; answer: string }> = [
  {
    question: 'What services do you offer?',
    answer:
      `I offer the following services: Consultation, Logo Design, Logo Animation, 
      Brand Identity, Website Design, Illustrations, Portraits, and more.`,
  },
  {
    question: 'How many years of experience do you have?',
    answer: `I started learning graphic design back in 2015. After a few years learning, 
    I started taking freelance projects and improving my skills little by little. 
    Now, I’m confident in my skills and can provide good service for you.`,
  },
  {
    question: 'Do you have a design degree?',
    answer: 'Currently, I’m working on a bachelors degree in Visual Communications and Experience Design at Montreat College',
  },
  {
    question: 'How long does it take?',
    answer: 'Depending on what project you have, it will take from 1 week to 6 weeks for a big project',
  },
  {
    question: 'Do you work with international clients?',
    answer: `Yes, I do. I had clients from all over the World. For international payment, the easiest way for me 
    is PayPal, but we can discuss different options too.`,
  },
  {
    question: 'Can you give me feedback on my current logo?',
    answer: `Absolutely, I offer consultation meetings where you can get detailed feedback on your logo 
    and what could be done to improve it, as well as ask any questions you may have.`,
  },
  {
    question: 'I can’t find what I’m looking for, what should I do?',
    answer: `I hope I've covered all the main questions I usually get asked, but if I've missed anything, 
    don't hesitate to get in touch with me via the contact form or email me; I'll be happy to help!`,
  },
  {
    question: 'Can you fix up my current logo?',
    answer: 'Yes, let’s get in touch and discuss what we can do.',
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
