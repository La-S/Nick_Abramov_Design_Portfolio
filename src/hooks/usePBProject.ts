import { UseQueryResult, useQuery } from '@tanstack/react-query';
import type { PBProject } from '../types/data/pBProject';
import { getPBProject } from '../api/pBProjectMethods.api';

export const EMPTY_PBPROJECT: PBProject = {
  id: '',
  dateInfo: {
    monthIndex: 0,
    year: 0,
  },
  nameInfo: {
    full: '',
  },
  mainImage: { path: '' },
  description: '',
  gallerySections: [],
};

type QueryResult = Omit<UseQueryResult<unknown, unknown>, 'data'> & {
  pBProject: PBProject;
};

const usePBProject = (pBProjectId: string): QueryResult => {
  const {
    data: { data: pBProject } = { data: EMPTY_PBPROJECT },
    ...metaProps
  } = useQuery({
    queryKey: ['photo-blog-project', pBProjectId],
    queryFn: () => getPBProject(pBProjectId),
  });

  return { pBProject, ...metaProps };
};

export default usePBProject;
