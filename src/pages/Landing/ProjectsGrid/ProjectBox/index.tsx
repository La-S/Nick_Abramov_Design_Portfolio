import React from 'react';
import S from './styles';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { onProjectsTileMouseMove, onProjectsTileMouseOut, onProjectsTileMouseOver } from './utils';

interface Props {
  id: string;
  category: string;
  imagePath: string;
}

const ProjectBox = (props: Props) => {
  const { category, imagePath, id } = props;

  return (
    <S.ProjectBox className="ProjectBox-Container">
      <Link to={`/projects/${id}`} draggable="false">
        <img
          src={imagePath}
          className="ProjectBox-Img"
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
