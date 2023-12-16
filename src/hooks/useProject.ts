import { UseQueryResult, useQuery } from '@tanstack/react-query';
import type { Project } from '../types/data/project';
import PROJECTS from './projects';

type QueryResult = Omit<UseQueryResult<unknown, unknown>, 'data'> & {
  project: Project | null;
};

const getProject = async (projectId: string): Promise<Project | null> =>
  PROJECTS.find((project) => project.id === projectId) || null;

const useProject = (projectId: string): QueryResult => {
  const { data: project = null, ...metaProps } = useQuery({
    queryKey: ['projects', projectId],
    queryFn: () => getProject(projectId),
  });

  return { project, ...metaProps };
};

export default useProject;
