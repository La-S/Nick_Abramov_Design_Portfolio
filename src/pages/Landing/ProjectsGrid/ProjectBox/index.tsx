import React from 'react';
import S from './styles';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';

interface ProjectInfo {
  category: string;
  imagePath: string;
}

type ProjectBoxMouseEvent = React.MouseEvent<HTMLImageElement, MouseEvent>;

const ProjectBox = (projectInfo: ProjectInfo) => {
  const { category, imagePath } = projectInfo;
  const onMouseOver = (e: ProjectBoxMouseEvent) => {
    if (e.target === null) return;

    const projectImage = e.target as HTMLImageElement;
    projectImage.style.transform = 'scale(1.15)';
  };
  const onMouseOut = (e: ProjectBoxMouseEvent) => {
    if (e.target === null) return;

    const projectImage = e.target as HTMLImageElement;
    projectImage.style.transform = 'scale(1)';
  };
  const onMouseMove = (e: ProjectBoxMouseEvent) => {
    if (e.target === null) return;
    
    const projectImage = e.target as HTMLImageElement;
    const projectImageBoundingBox = projectImage.getBoundingClientRect();
    const transformOriginX = (e.clientX - projectImageBoundingBox.left) / projectImageBoundingBox.width * 100;
    const transformOriginY = (e.clientY - projectImageBoundingBox.top) / projectImageBoundingBox.height * 100;

    projectImage.style.transformOrigin = `${transformOriginX}% ${transformOriginY}%`;
  };

  return (
    <S.ProjectBox className="ProjectBox-Container">
      <Link to="/projects" draggable="false">
        <img 
          src={imagePath} 
          className='ProjectBox-Img'
          draggable={false} 
          onMouseOver={onMouseOver}
          onMouseOut={onMouseOut}
          onMouseMove={onMouseMove}
        />
        <Typography className="Category-Name">{`#${category}`}</Typography>
      </Link>
    </S.ProjectBox>
  );
};

export default ProjectBox;
