import type { FAQ } from './faq';

export type FAQGetResponse = Array<FAQ>;

export type FAQInputDto = {
  question: string;
  answer: string;
};
