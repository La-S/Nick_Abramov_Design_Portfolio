import React from 'react';
import S from './styles';
import type { Project } from '../../../../types/data/project';
import { Button, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import { Trash as DeleteIcon, PencilSimple as EditIcon } from '@phosphor-icons/react';

interface Props {
  project: Project;
}

const AdminProjectsGridBox = ({ project }: Props): JSX.Element => {
  return (
    <S.AdminProjectsGridBox>
      <CardMedia sx={{ height: 250 }} image={project.mainImagePath} />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {project.category}
        </Typography>
        <Typography gutterBottom variant="h5">
          {project.name}
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" endIcon={<EditIcon color="white" />}>
          Edit
        </Button>
        <Button variant="contained" color="error" endIcon={<DeleteIcon color="white" />}>
          Delete
        </Button>
      </CardActions>
    </S.AdminProjectsGridBox>
  );
};

export default AdminProjectsGridBox;
