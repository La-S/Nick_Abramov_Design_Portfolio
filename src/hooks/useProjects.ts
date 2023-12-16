import { UseQueryResult, useQuery } from '@tanstack/react-query';
import type { Project } from '../types/data/project';
import PROJECTS from './projects';

type QueryResult = Omit<UseQueryResult<unknown, unknown>, 'data'> & {
  projects: Array<Project>;
};

const getProjects = async (): Promise<Array<Project>> => PROJECTS;

const useProjects = (): QueryResult => {
  const { data: projects = [], ...metaProps } = useQuery({
    queryKey: ['projects'],
    queryFn: getProjects,
  });

  return { projects, ...metaProps };
};

export default useProjects;
