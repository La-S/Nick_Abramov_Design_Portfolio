import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { getPBProjects } from '../api/pBProjectMethods.api';
import type { PBProjectGetRequest, PBProjectGetResponse } from '../types/data/pBProjectAPI';

type QueryResult = Omit<UseQueryResult<unknown, unknown>, 'data'> & {
  pBProjects: PBProjectGetResponse;
};

const DEFAULT_PARAMS: PBProjectGetRequest = {
  summary: false,
};

const usePBProjects = (params?: PBProjectGetRequest): QueryResult => {
  const queryParams = { ...DEFAULT_PARAMS, ...params };
  const { data: { data: pBProjects } = { data: [] }, ...metaProps } = useQuery({
    queryKey: ['photo-blog-projects', queryParams],
    queryFn: () => getPBProjects(queryParams),
  });

  return { pBProjects, ...metaProps };
};

export default usePBProjects;
