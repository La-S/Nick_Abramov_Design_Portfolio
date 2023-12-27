import React from 'react';
import S from './styles';
import { ProjectGalleryRow } from '../../../types/data/project';
import { renderGalleryRow } from './utils';

interface Props {
  gallery: Array<ProjectGalleryRow>;
  isGallerySpaced: boolean;
}

const ProjectGalleryGrid = ({ gallery , isGallerySpaced }: Props): JSX.Element => {
  return (
    <S.ProjectGalleryGrid className="ProjectGallery-Grid">
      {gallery.map((galleryRow, i) => renderGalleryRow(galleryRow, isGallerySpaced, i))}
    </S.ProjectGalleryGrid>
  );
};

export default ProjectGalleryGrid;
