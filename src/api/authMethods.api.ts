import type { AxiosResponse } from 'axios';
import api from './api';

export const authenticateAdmin = async (
  password: string,
): Promise<
  AxiosResponse<{
    access_token: string;
  }>
> => {
  return api.post<{ access_token: string }>('/auth/login', { password });
};

export const validateAdminAuthentication = async (): Promise<AxiosResponse<string>> => {
  return api.get('/auth/validate_login_status');
};
