import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { getProjects } from '../api/projectMethods.api';
import type { ProjectGetRequest, ProjectGetResponse } from '../types/data/projectAPI';

type QueryResult = Omit<UseQueryResult<unknown, unknown>, 'data'> & {
  projects: ProjectGetResponse;
};

const DEFAULT_PARAMS: ProjectGetRequest = {
  summary: false,
};

const useProjects = (params?: ProjectGetRequest): QueryResult => {
  const queryParams = { ...DEFAULT_PARAMS, ...params };
  const { data: { data: projects } = { data: [] }, ...metaProps } = useQuery({
    queryKey: ['projects', queryParams],
    queryFn: () => getProjects(queryParams),
  });

  return { projects, ...metaProps };
};

export default useProjects;
