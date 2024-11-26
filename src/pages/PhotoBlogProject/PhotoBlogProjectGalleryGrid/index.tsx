import React from 'react';
import S, { classes } from './styles';
import type { PhotoBlogProject } from '../../../types/data/photoBlogProject';
import { renderGallerySection } from './utils';

interface PhotoBlogProjectGalleryGridProps {
  gallerySections: PhotoBlogProject['gallerySections'];
}

const PhotoBlogProjectGalleryGrid = ({
  gallerySections,
}: PhotoBlogProjectGalleryGridProps): JSX.Element => {
  return (
    <S.PhotoBlogProjectGalleryGrid className={classes.container}>
      {gallerySections.map(renderGallerySection)}
    </S.PhotoBlogProjectGalleryGrid>
  );
};

export default PhotoBlogProjectGalleryGrid;
