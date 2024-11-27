import type { AxiosResponse } from 'axios';
import type { PBProject } from '../types/data/pBProject';
import type {
  PBProjectGetRequest,
  PBProjectGetResponse,
  PBProjectInputDto,
} from '../types/data/pBProjectAPI';
import { applyParamsToRoute } from '../utils/apiUtils';
import api from './api';

const ROUTE = '/photo-blog-projects';

export const getPBProjects = async (
  params?: PBProjectGetRequest
): Promise<AxiosResponse<PBProjectGetResponse>> => {
  const route = applyParamsToRoute(ROUTE, params);
  return api.get(route);
};

export const getPBProject = async (id: string): Promise<AxiosResponse<PBProject>> => {
  const route = `${ROUTE}/${id}`;
  return api.get(route);
};

export const createPBProject = async (
  pBProjectInputDto: PBProjectInputDto
): Promise<AxiosResponse<PBProject>> => {
  const route = ROUTE;
  return api.post(route, pBProjectInputDto);
};

export const updatePBProject = async (
  id: string,
  pBProjectInputDto: PBProjectInputDto,
): Promise<AxiosResponse<PBProject>> => {
  const route = `${ROUTE}/${id}`;
  return api.put(route, pBProjectInputDto);
};

export const deletePBProject = async (
  id: string
): Promise<AxiosResponse<PBProject>> => {
  const route = `${ROUTE}/${id}`;
  return api.delete(route);
};
