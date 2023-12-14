import React from 'react';
import S from './styles';
import { Typography } from '@mui/material';

interface ProjectInfo {
  category: string;
  imagePath: string;
}

const ProjectBox = (projectInfo: ProjectInfo) => {
  const { category, imagePath } = projectInfo;

  return (
    <S.ProjectBox>
      <img src={imagePath} alt="" className='ProjectBox-Img' />
      <Typography className="Category-Name">{`#${category}`}</Typography>
    </S.ProjectBox>
  );
};

export default ProjectBox;
