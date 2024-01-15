import type { AxiosResponse } from 'axios';
import api from './api';

export const uploadImage = async (imageHash: string): Promise<AxiosResponse<string>> => {
  return api.post<string>('/upload', { imageHash });
};
