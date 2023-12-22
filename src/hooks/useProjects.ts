import { UseQueryResult, useQuery } from '@tanstack/react-query';
import type { Project } from '../types/data/project';
import PROJECTS from './projects';
import { getProjects } from '../api/projectMethods.api';

type QueryResult = Omit<UseQueryResult<unknown, unknown>, 'data'> & {
  projects: Array<Project>;
};

const fetchProjects = async (): Promise<Array<Project>> => {
  const projects = getProjects({ summary: true });
  console.log(projects);

  return PROJECTS;
};

const useProjects = (): QueryResult => {
  const { data: projects = [], ...metaProps } = useQuery({
    queryKey: ['projects'],
    queryFn: fetchProjects,
  });

  return { projects, ...metaProps };
};

export default useProjects;
