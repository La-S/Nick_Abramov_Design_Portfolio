import React, { useEffect, useRef, useState } from 'react';
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
  const slideNumberRef = useRef(0);
  const slides = getLightboxSlides(gallery);

  useEffect(() => {
    if (slideIndex > slides.length - 1) setSlideIndex(0);
  }, [slideIndex]);

  useEffect(() => {
    slideNumberRef.current = 0;
    setSlideIndex(0);
  }, [slides]);

  return (
    <>
      <S.ProjectGalleryGrid className="ProjectGallery-Grid">
        {gallery.map((galleryRow, i) =>
          renderGalleryRow(galleryRow, isGallerySpaced, i, setIsLightboxOpen, slideNumberRef, setSlideIndex),
        )}
      </S.ProjectGalleryGrid>

      <Lightbox
        open={isLightboxOpen}
        close={() => {
          setIsLightboxOpen(false);
          slideNumberRef.current = 0;
        }}
        slides={slides}
        plugins={[Zoom, Video]}
        index={slideIndex}
        zoom={{
          maxZoomPixelRatio: 3,
          scrollToZoom: true,
          doubleClickMaxStops: 2,
        }}
        carousel={{
          padding: 0,
          imageFit: 'cover',
        }}
      />
    </>
  );
};

export default ProjectGalleryGrid;
