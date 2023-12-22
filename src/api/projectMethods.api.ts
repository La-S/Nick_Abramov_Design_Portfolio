import type { Project } from '../types/data/project';
import type { ProjectGetRequest, ProjectGetResponse } from '../types/data/projectAPI';
import { applyParamsToRoute } from '../utils/apiUtils';
import api from './api';

const ROUTE = '/projects';

export const getProjects = async (params?: ProjectGetRequest): Promise<ProjectGetResponse> => {
  const route = applyParamsToRoute(ROUTE, params);
  return api.get(route);
};

export const getProject = async (id: string): Promise<Project> => {
  const route = `${ROUTE}/${id}`;
  return api.get(route);
};
