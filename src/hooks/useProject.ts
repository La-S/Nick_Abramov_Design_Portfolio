import { UseQueryResult, useQuery } from '@tanstack/react-query';
import type { Project } from '../types/data/project';
import { getProject } from '../api/projectMethods.api';

export const EMPTY_PROJECT: Project = {
  id: '',
  order: 0,
  name: '',
  category: '',
  mainImage: { path: '' },
  dateCreated: 0,
  description: '',
  isGallerySpaced: false,
  gallery: [],
};

type QueryResult = Omit<UseQueryResult<unknown, unknown>, 'data'> & {
  project: Project;
};

const useProject = (projectId: string): QueryResult => {
  const { data: { data: project } = { data: EMPTY_PROJECT }, ...metaProps } = useQuery({
    queryKey: ['project', projectId],
    queryFn: () => getProject(projectId),
  });

  return { project, ...metaProps };
};

export default useProject;
