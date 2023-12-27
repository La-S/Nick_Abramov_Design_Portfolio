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

  return (
    <>
      <S.ProjectGalleryGrid className="ProjectGallery-Grid">
        {gallery.map((galleryRow, i) => renderGalleryRow(galleryRow, isGallerySpaced, i, setIsLightboxOpen))}
      </S.ProjectGalleryGrid>

      <Lightbox 
        open={isLightboxOpen}
        close={() => setIsLightboxOpen(false)}
        slides={getLightboxSlides(gallery)} 
        plugins={[Zoom, Video]}
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
