import React, { useContext } from 'react';
import S, { classes } from './styles';
import type { PhotoBlogProject } from '../../../types/data/photoBlogProject';
import { renderGallerySections } from './utils';
import { LightboxContext } from '../context';

interface PhotoBlogProjectGalleryGridProps {
  gallerySections: PhotoBlogProject['gallerySections'];
}

const PhotoBlogProjectGalleryGrid = ({
  gallerySections,
}: PhotoBlogProjectGalleryGridProps): JSX.Element => {
  const {
    lightboxOpenState: [, setIsLightboxOpen],
    slideIndexState: [, setSlideIndex],
  } = useContext(LightboxContext);

  return (
    <S.PhotoBlogProjectGalleryGrid className={classes.container}>
      {renderGallerySections(
        gallerySections,
        setIsLightboxOpen,
        setSlideIndex
      )}
    </S.PhotoBlogProjectGalleryGrid>
  );
};

export default PhotoBlogProjectGalleryGrid;
