import React, { useContext } from 'react';
import S, { classes } from './styles';
import type { PBProject } from '../../../types/data/pBProject';
import { renderGallerySections } from './utils';
import { LightboxContext } from '../context';

interface PBProjectGalleryGridProps {
  gallerySections: PBProject['gallerySections'];
}

const PBProjectGalleryGrid = ({ gallerySections }: PBProjectGalleryGridProps): JSX.Element => {
  const {
    lightboxOpenState: [, setIsLightboxOpen],
    slideIndexState: [, setSlideIndex],
  } = useContext(LightboxContext);

  return (
    <S.PBProjectGalleryGrid className={classes.container}>
      {renderGallerySections(
        gallerySections,
        setIsLightboxOpen,
        setSlideIndex
      )}
    </S.PBProjectGalleryGrid>
  );
};

export default PBProjectGalleryGrid;
