import React from 'react';
import S from './styles';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { onProjectsTileMouseMove, onProjectsTileMouseOut, onProjectsTileMouseOver } from './utils';

interface ProjectInfo {
  category: string;
  imagePath: string;
}

const ProjectBox = (projectInfo: ProjectInfo) => {
  const { category, imagePath } = projectInfo;


  return (
    <S.ProjectBox className="ProjectBox-Container">
      <Link to="/projects" draggable="false">
        <img 
          src={imagePath} 
          className='ProjectBox-Img'
          draggable={false} 
          onMouseOver={onProjectsTileMouseOver}
          onMouseOut={onProjectsTileMouseOut}
          onMouseMove={onProjectsTileMouseMove}
        />
        <Typography className="Category-Name">{`#${category}`}</Typography>
      </Link>
    </S.ProjectBox>
  );
};

export default ProjectBox;
