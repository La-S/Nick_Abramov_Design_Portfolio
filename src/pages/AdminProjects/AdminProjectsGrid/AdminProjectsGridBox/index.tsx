import React, { useContext, useState } from 'react';
import S from './styles';
import type { Project } from '../../../../types/data/project';
import { Box, Button, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import {
  Trash as DeleteIcon,
  PencilSimple as EditIcon,
  DotsSix as DnDIcon,
} from '@phosphor-icons/react';
import { deleteProject, reorderProjects } from '../../../../api/projectMethods.api';
import { QueryClient } from '@tanstack/react-query';
import ProjectForm from '../../ProjectForm';
import { AdminProjectsGridContext } from '../contexts';
import { dndClasses } from '../../../../common/dndGridFeature/styles';
import { handleDragOver, handleDragStart, handleDrop } from '../../../../common/dndGridFeature/dndUtils';

interface Props {
  project: Project;
  queryClient: QueryClient;
}

const AdminProjectsGridBox = ({ project, queryClient }: Props): JSX.Element => {
  const {
    reorderingState: [isReordering, setIsReordering],
    draggingElIdState: [draggingElId, setDraggingElId],
    draggingOverElIdState: [draggingOverElId, setDraggingOverElId],
  } = useContext(AdminProjectsGridContext);

  const [editModalOpen, setEditModalOpen] = useState(false);
  const [deletionModalOpen, setDeletionModalOpen] = useState(false);
  const handleDelete = () => {
    deleteProject(project.id)
      .then(() => queryClient.invalidateQueries({ queryKey: ['projects'] }))
      .catch((err) => alert(err.response.data.message))
      .finally(() => setDeletionModalOpen(false));
  };

  const classList = [];
  if (isReordering) {
    classList.push(dndClasses.reordering);
  }
  if (draggingElId === project.id) {
    classList.push(dndClasses.dragging);
  }
  if (draggingOverElId === project.id) {
    classList.push(dndClasses.draggingOver);
  }

  return (
    <>
      <S.AdminProjectsGridBox
        id={project.id}
        draggable={!isReordering}
        onDragStart={(e) => handleDragStart(
          e,
          project.id,
          setDraggingElId,
        )}
        onDragOver={(e) => handleDragOver(
          e,
          project.id,
          setDraggingOverElId,
        )}
        onDrop={(e) => handleDrop(
          e,
          project.id,
          project.order,
          setIsReordering,
          queryClient,
          ['projects'],
          setDraggingElId,
          setDraggingOverElId,
          reorderProjects,
        )}
        className={classList.join(' ')}
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
          <DnDIcon size={32} />
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
