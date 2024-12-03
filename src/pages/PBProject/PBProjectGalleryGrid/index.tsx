import React, { useContext } from 'react';
import S, { classes } from './styles';
import type { PBProject } from '../../../types/data/pBProject';
import { renderGallerySections, tweenGenerator } from './utils';
import { GlobalContext } from '../../../contexts/global';
import { LightboxContext } from '../context';
import { useGSAP } from '@gsap/react';

interface PBProjectGalleryGridProps {
  gallerySections: PBProject['gallerySections'];
}

const PBProjectGalleryGrid = ({ gallerySections }: PBProjectGalleryGridProps): JSX.Element => {
  const {
    cursorWrapperRef,
    pageLoadingState: [isPageLoading],
  } = useContext(GlobalContext);
  const {
    lightboxOpenState: [, setIsLightboxOpen],
    slideIndexState: [, setSlideIndex],
  } = useContext(LightboxContext);

  useGSAP(() => {
    if (isPageLoading) return;

    tweenGenerator.rows();
    tweenGenerator.titles();
    tweenGenerator.descriptions();
  }, {
    dependencies: [isPageLoading]
  });

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
