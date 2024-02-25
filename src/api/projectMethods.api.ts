import type { AxiosResponse } from 'axios';
import type { Project } from '../types/data/project';
import type { ProjectGetRequest, ProjectGetResponse, ProjectInputDto } from '../types/data/projectAPI';
import { applyParamsToRoute } from '../utils/apiUtils';
import api from './api';

const ROUTE = '/projects';

export const getProjects = async (params?: ProjectGetRequest): Promise<AxiosResponse<ProjectGetResponse>> => {
  const route = applyParamsToRoute(ROUTE, params);
  return api.get(route);
};

export const getProject = async (id: string): Promise<AxiosResponse<Project>> => {
  const route = `${ROUTE}/${id}`;
  return api.get(route);
};

export const createProject = async (projectInputDto: ProjectInputDto): Promise<AxiosResponse<Project>> => {
  const route = ROUTE;
  return api.post(route, projectInputDto);
};

export const reorderProjects = async (id: string, newOrder: number): Promise<AxiosResponse<Project>> => {
  const route = `${ROUTE}/reorder`;
  const body = { id, newOrder };
  return api.put(route, body);
};

export const updateProject = async (id: string, projectInputDto: ProjectInputDto): Promise<AxiosResponse<Project>> => {
  const route = `${ROUTE}/${id}`;
  return api.put(route, projectInputDto);
};

export const deleteProject = async (id: string): Promise<AxiosResponse<Project>> => {
  const route = `${ROUTE}/${id}`;
  return api.delete(route);
};
