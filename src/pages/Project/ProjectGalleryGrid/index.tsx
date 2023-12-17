import React from 'react';
import S from './styles';
import { ProjectGalleryRow } from '../../../types/data/project';
import { renderGalleryRow } from './utils';

interface Props {
  gallery: Array<ProjectGalleryRow>,
}

const ProjectGalleryGrid = ({ gallery }: Props): JSX.Element => {    
  return (
    <S.ProjectGalleryGrid className='ProjectGallery-Grid'>
      {gallery.map((galleryRow, i) => renderGalleryRow(galleryRow, i))}
    </S.ProjectGalleryGrid>
  );
};

export default ProjectGalleryGrid;
