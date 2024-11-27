import React, { useState } from 'react';
import {
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Box,
  Button,
} from '@mui/material';
import {
  Trash as DeleteIcon,
  PencilSimple as EditIcon,
} from '@phosphor-icons/react';
import { deletePBProject } from '../../../../api/pBProjectMethods.api';
import { generatePBProjectDateString } from '../../../PBProjects/utils';
import S, { classes } from './styles';
import type { PBProject } from '../../../../types/data/pBProject';
import type { QueryClient } from '@tanstack/react-query';
import PBProjectForm from '../../PBProjectForm';

interface AdminPBProjectsGridBoxProps {
  pBProject: PBProject;
  queryClient: QueryClient;
}

const AdminPBProjectsGridBox = ({
  pBProject,
  queryClient
}: AdminPBProjectsGridBoxProps): JSX.Element => {
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [deletionModalOpen, setDeletionModalOpen] = useState(false);
  const handleDelete = () => {
    deletePBProject(pBProject.id)
      .then(() => queryClient.invalidateQueries({ queryKey: ['photo-blog-projects'] }))
      .catch((err) => alert(err.response.data.message))
      .finally(() => setDeletionModalOpen(false));
  };
  const formattedDate = generatePBProjectDateString(pBProject.dateInfo);

  return (
    <>
      <S.AdminPBProjectsGridBox className={classes.root}>
        <CardMedia sx={{ height: 250 }} image={pBProject.mainImage.path} />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {formattedDate}
          </Typography>
          <Typography gutterBottom variant="h5">
            {pBProject.nameInfo.short || pBProject.nameInfo.full}
          </Typography>
        </CardContent>
        <CardActions>
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
      </S.AdminPBProjectsGridBox>

      <S.EditModal open={editModalOpen} onClose={() => setEditModalOpen(false)}>
        <>
          <PBProjectForm pBProjectId={pBProject.id} setModalOpen={setEditModalOpen} />
        </>
      </S.EditModal>

      <S.DeleteModal open={deletionModalOpen} onClose={() => setDeletionModalOpen(false)}>
        <Box className="Delete-Confirmation-Box">
          <Typography variant="h5">
            Are you sure you want to delete <b>{pBProject.nameInfo.full}</b>?
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

export default AdminPBProjectsGridBox;
