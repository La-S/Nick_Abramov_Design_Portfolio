import React, { useState } from 'react';
import S from './styles';
import type { Project } from '../../../../types/data/project';
import { Box, Button, ButtonBase, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import { 
  Trash as DeleteIcon,
  PencilSimple as EditIcon,
  DotsSix as DnDIcon,
} from '@phosphor-icons/react';
import { deleteProject } from '../../../../api/projectMethods.api';
import { QueryClient } from '@tanstack/react-query';
import ProjectForm from '../../ProjectForm';

interface Props {
  project: Project;
  queryClient: QueryClient;
}

const AdminProjectsGridBox = ({ project, queryClient }: Props): JSX.Element => {
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [deletionModalOpen, setDeletionModalOpen] = useState(false);
  const handleDelete = () => {
    deleteProject(project.id)
      .then(() => queryClient.invalidateQueries({ queryKey: ['projects'] }))
      .catch((err) => console.log(err))
      .finally(() => setDeletionModalOpen(false));
  };

  return (
    <>
      <S.AdminProjectsGridBox
        data-id={project.id}
        data-order={project.order}
      >
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
          <ButtonBase
            disableRipple
            className='DnDButton'
          >
            <DnDIcon
              size={32}
            />
          </ButtonBase>
          <Box className="CardButtons-Wrapper">
            <Button variant="contained" endIcon={<EditIcon color="white" />} onClick={() => setEditModalOpen(true)}>
              Edit
            </Button>
            <Button
              variant="contained"
              color="error"
              endIcon={<DeleteIcon color="white" />}
              onClick={() => setDeletionModalOpen(true)}
            >
              Delete
            </Button>
          </Box>
        </CardActions>
      </S.AdminProjectsGridBox>

      <S.EditModal open={editModalOpen} onClose={() => setEditModalOpen(false)}>
        <>
          <ProjectForm projectId={project.id} setModalOpen={setEditModalOpen} />
        </>
      </S.EditModal>

      <S.DeleteModal open={deletionModalOpen} onClose={() => setDeletionModalOpen(false)}>
        <Box className="Delete-Confirmation-Box">
          <Typography variant="h5">
            Are you sure you want to delete <b>{project.name}</b>?
          </Typography>
          <Typography variant="subtitle1">This action is irreversible</Typography>
          <Box className="Confirmation-Buttons">
            <Button onClick={() => setDeletionModalOpen(false)}>Cancel</Button>
            <Button variant="contained" color="error" onClick={handleDelete}>
              Delete
            </Button>
          </Box>
        </Box>
      </S.DeleteModal>
    </>
  );
};

export default AdminProjectsGridBox;
