import type { AxiosResponse } from 'axios';
import type { PhotoBlogProject } from '../types/data/photoBlogProject';
import type {
  PhotoBlogProjectGetRequest,
  PhotoBlogProjectGetResponse,
  PhotoBlogProjectInputDto,
} from '../types/data/photoBlogProjectAPI';
import { applyParamsToRoute } from '../utils/apiUtils';
import api from './api';

const ROUTE = '/photo-blog-projects';

export const getPhotoBlogProjects = async (
  params?: PhotoBlogProjectGetRequest
): Promise<AxiosResponse<PhotoBlogProjectGetResponse>> => {
  const route = applyParamsToRoute(ROUTE, params);
  return api.get(route);
};

export const getPhotoBlogProject = async (id: string): Promise<AxiosResponse<PhotoBlogProject>> => {
  const route = `${ROUTE}/${id}`;
  return api.get(route);
};

export const createPhotoBlogProject = async (
  photoBlogProjectInputDto: PhotoBlogProjectInputDto
): Promise<AxiosResponse<PhotoBlogProject>> => {
  const route = ROUTE;
  return api.post(route, photoBlogProjectInputDto);
};

export const updatePhotoBlogProject = async (
  id: string,
  photoBlogProjectInputDto: PhotoBlogProjectInputDto,
): Promise<AxiosResponse<PhotoBlogProject>> => {
  const route = `${ROUTE}/${id}`;
  return api.put(route, photoBlogProjectInputDto);
};

export const deletePhotoBlogProject = async (
  id: string
): Promise<AxiosResponse<PhotoBlogProject>> => {
  const route = `${ROUTE}/${id}`;
  return api.delete(route);
};
