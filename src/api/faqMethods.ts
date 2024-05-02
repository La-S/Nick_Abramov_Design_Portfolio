import type { AxiosResponse } from 'axios';
import type { FAQGetResponse } from '../types/data/faqAPI';
import api from './api';

const ROUTE = '/faqs';

export const getFAQs = async (): Promise<AxiosResponse<FAQGetResponse>> => (
  api.get(ROUTE)
);