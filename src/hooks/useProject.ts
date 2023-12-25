import { UseQueryResult, useQuery } from '@tanstack/react-query';
import type { Project } from '../types/data/project';
import { getProject } from '../api/projectMethods.api';

type QueryResult = Omit<UseQueryResult<unknown, unknown>, 'data'> & {
  project: Project | null;
};

const useProject = (projectId: string): QueryResult => {
  const { data: { data: project } = { data: null }, ...metaProps } = useQuery({
    queryKey: ['projects', projectId],
    queryFn: () => getProject(projectId),
  });

  return { project, ...metaProps };
};

export default useProject;
