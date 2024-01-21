import React, { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import { Video, Zoom } from 'yet-another-react-lightbox/plugins';
import { ProjectGalleryRow } from '../../../types/data/project';
import { getLightboxSlides, renderGalleryRow } from './utils';
import S from './styles';
import 'yet-another-react-lightbox/styles.css';

interface Props {
  gallery: Array<ProjectGalleryRow>;
  isGallerySpaced: boolean;
}

const ProjectGalleryGrid = ({ gallery, isGallerySpaced }: Props): JSX.Element => {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [slideIndex, setSlideIndex] = useState(0);
  const slides = getLightboxSlides(gallery);

  const renderGallery = () => {
    let slideIndexUpperBoundary = 0;

    return gallery.map((galleryRow, i) => {
      const actualCellAmount = Math.min(galleryRow.cells.length, galleryRow.cellAmount);
      slideIndexUpperBoundary += actualCellAmount;
      return renderGalleryRow(
        galleryRow,
        isGallerySpaced,
        i,
        setIsLightboxOpen,
        slideIndexUpperBoundary,
        setSlideIndex,
      );
    });
  };

  return (
    <>
      <S.ProjectGalleryGrid className="ProjectGallery-Grid">{renderGallery()}</S.ProjectGalleryGrid>

      <Lightbox
        open={isLightboxOpen}
        close={() => {
          setIsLightboxOpen(false);
        }}
        slides={slides}
        plugins={[Zoom, Video]}
        index={slideIndex}
        zoom={{
          maxZoomPixelRatio: 1.35,
          scrollToZoom: true,
          doubleClickMaxStops: 1,
        }}
        carousel={{
          padding: 0,
          imageFit: 'contain',
        }}
      />
    </>
  );
};

export default ProjectGalleryGrid;
