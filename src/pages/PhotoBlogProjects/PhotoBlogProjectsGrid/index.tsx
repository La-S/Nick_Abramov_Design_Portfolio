import React from 'react';
import S from './styles';
import PhotoBlogProjectsGridBox from './PhotoBlogProjectsGridBox';
import usePhotoBlogProjects from '../../../hooks/usePhotoBlogProjects';

const PhotoBlogProjectsGrid = (): JSX.Element => {
  const {
    photoBlogProjects,
    ...photoBlogProjectsResponse
  } = usePhotoBlogProjects({ summary: true });

  return (
    <S.PhotoBlogProjectsGrid>
      {
        photoBlogProjectsResponse.isFetched
          ? photoBlogProjects.map((photoBlogProjectSummary, i) => (
            <PhotoBlogProjectsGridBox
              photoBlogProjectSummary={photoBlogProjectSummary}
              key={i}
            />
          )) : <></>
      }
    </S.PhotoBlogProjectsGrid>
  );
};

export default PhotoBlogProjectsGrid;
