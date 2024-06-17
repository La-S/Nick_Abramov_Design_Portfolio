import type { AxiosResponse } from 'axios';
import type { FAQ } from '../types/data/faq';
import type { FAQGetResponse, FAQInputDto } from '../types/data/faqAPI';
import api from './api';

const ROUTE = '/faqs';

export const getFAQs = async (): Promise<AxiosResponse<FAQGetResponse>> => (
  api.get(ROUTE)
);

export const createFAQ = async (faqInputDto: FAQInputDto): Promise<AxiosResponse<FAQ>> => (
  api.post<FAQ>(ROUTE, faqInputDto)
);

export const reorderFAQs = async (id: string, newOrder: number): Promise<AxiosResponse<FAQ>> => {
  const route = `${ROUTE}/reorder`;
  const body = { id, newOrder };
  return api.put(route, body);
};

export const updateFAQ = async (id: string, faqInputDto: FAQInputDto): Promise<AxiosResponse<FAQ>> => {
  const route = `${ROUTE}/${id}`;
  return api.put(route, faqInputDto);
};

export const deleteFAQ = async (id: string): Promise<AxiosResponse<FAQ>> => {
  const route = `${ROUTE}/${id}`;
  return api.delete(route);
};
