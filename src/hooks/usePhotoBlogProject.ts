import { UseQueryResult, useQuery } from '@tanstack/react-query';
import type { PhotoBlogProject } from '../types/data/photoBlogProject';
import { getPhotoBlogProject } from '../api/photoBlogProjectMethods.api';

export const EMPTY_PHOTO_BLOG_PROJECT: PhotoBlogProject = {
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
  photoBlogProject: PhotoBlogProject;
};

const usePhotoBlogProject = (photoBlogProjectId: string): QueryResult => {
  const {
    data: { data: photoBlogProject } = { data: EMPTY_PHOTO_BLOG_PROJECT },
    ...metaProps
  } = useQuery({
    queryKey: ['photo-blog-project', photoBlogProjectId],
    queryFn: () => getPhotoBlogProject(photoBlogProjectId),
  });

  return { photoBlogProject, ...metaProps };
};

export default usePhotoBlogProject;
