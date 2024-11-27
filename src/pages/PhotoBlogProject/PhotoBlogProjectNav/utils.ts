import type { PhotoBlogProject } from '../../../types/data/photoBlogProject';

interface NavPhotoBlogProjects {
  prev: null | PhotoBlogProject;
  next: null | PhotoBlogProject;
}

export const getNavPhotoBlogProjects = (
  photoBlogProject: PhotoBlogProject,
  photoBlogProjects: Array<PhotoBlogProject>,
): NavPhotoBlogProjects => {
  const navPhotoBlogProjects: NavPhotoBlogProjects = { prev: null, next: null };

  const photoBlogProjectI = photoBlogProjects.findIndex((p: PhotoBlogProject) => p.id === photoBlogProject.id);
  if (photoBlogProjectI < photoBlogProjects.length - 1) {
    navPhotoBlogProjects.next = photoBlogProjects[photoBlogProjectI + 1];
  }
  if (photoBlogProjectI > 0) {
    navPhotoBlogProjects.prev = photoBlogProjects[photoBlogProjectI - 1];
  }

  return navPhotoBlogProjects;
};
