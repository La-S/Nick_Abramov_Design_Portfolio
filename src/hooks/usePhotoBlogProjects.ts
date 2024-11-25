import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { getPhotoBlogProjects } from '../api/photoBlogProjectMethods.api';
import type { PhotoBlogProjectGetRequest, PhotoBlogProjectGetResponse } from '../types/data/photoBlogProjectAPI';

type QueryResult = Omit<UseQueryResult<unknown, unknown>, 'data'> & {
  photoBlogProjects: PhotoBlogProjectGetResponse;
};

const DEFAULT_PARAMS: PhotoBlogProjectGetRequest = {
  summary: false,
};

const usePhotoBlogProjects = (params?: PhotoBlogProjectGetRequest): QueryResult => {
  const queryParams = { ...DEFAULT_PARAMS, ...params };
  const { data: { data: photoBlogProjects } = { data: [] }, ...metaProps } = useQuery({
    queryKey: ['photo-blog-projects', queryParams],
    queryFn: () => getPhotoBlogProjects(queryParams),
  });

  return { photoBlogProjects, ...metaProps };
};

export default usePhotoBlogProjects;
