import React from 'react';
import S from './styles';
import PhotoBlogProjectsGridBox from './PhotoBlogProjectsGridBox';

const PhotoBlogProjectsGrid = (): JSX.Element => {
  return (
    <S.PhotoBlogProjectsGrid>
      {
        [...new Array(7)].map((_, i) => (
          <PhotoBlogProjectsGridBox key={i} />
        ))
      }
    </S.PhotoBlogProjectsGrid>
  );
};

export default PhotoBlogProjectsGrid;
