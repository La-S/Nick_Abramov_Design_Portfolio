import type { AxiosResponse } from 'axios';
import api from './api';
import type { EmailInputDto } from '../types/data/emailAPI';

export const sendEmail = async (emailInputDto: EmailInputDto): Promise<AxiosResponse> => {
  return api.post<EmailInputDto>('/email', emailInputDto);
};
