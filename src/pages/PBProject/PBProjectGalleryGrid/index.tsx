import React, { useContext } from 'react';
import S, { classes } from './styles';
import type { PBProject } from '../../../types/data/pBProject';
import { renderGallerySections } from './utils';
import { GlobalContext } from '../../../contexts/global';
import { LightboxContext } from '../context';

interface PBProjectGalleryGridProps {
  gallerySections: PBProject['gallerySections'];
}

const PBProjectGalleryGrid = ({ gallerySections }: PBProjectGalleryGridProps): JSX.Element => {
  const {
    cursorWrapperRef,
  } = useContext(GlobalContext);
  const {
    lightboxOpenState: [, setIsLightboxOpen],
    slideIndexState: [, setSlideIndex],
  } = useContext(LightboxContext);

  return (
    <S.PBProjectGalleryGrid className={classes.container}>
      {renderGallerySections(
        gallerySections,
        setIsLightboxOpen,
        setSlideIndex,
        cursorWrapperRef,
      )}
    </S.PBProjectGalleryGrid>
  );
};

export default PBProjectGalleryGrid;
