import type { QueryClient } from '@tanstack/react-query';
import type { PBProject } from '../../../types/data/pBProject';
import type { Dispatch, SetStateAction } from 'react';

interface NavPBProjects {
  prev: null | PBProject;
  next: null | PBProject;
}

export const getNavPBProjects = (
  pBProject: PBProject,
  pBProjects: Array<PBProject>,
): NavPBProjects => {
  const navPBProjects: NavPBProjects = { prev: null, next: null };

  const pBProjectI = pBProjects.findIndex((p: PBProject) => p.id === pBProject.id);
  if (pBProjectI < pBProjects.length - 1) {
    navPBProjects.next = pBProjects[pBProjectI + 1];
  }
  if (pBProjectI > 0) {
    navPBProjects.prev = pBProjects[pBProjectI - 1];
  }

  return navPBProjects;
};

export const toggleLoadingOnUnloadedPBProject = (
  queryClient: QueryClient,
  pBProjectId: string | null,
  setIsPageLoading: Dispatch<SetStateAction<boolean>>
) => {
  if (!pBProjectId) return;
  const cachedPBProject = queryClient.getQueryData<PBProject>([
    'photo-blog-project',
    pBProjectId,
  ]);
  if (cachedPBProject) return;
  setIsPageLoading(true);
};
