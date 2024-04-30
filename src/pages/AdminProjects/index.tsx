import React, { useState } from 'react';
import { Box, ButtonBase, Typography } from '@mui/material';
import AdminProjectsGrid from './AdminProjectsGrid';
import ProjectForm from './ProjectForm';
import useProjects from '../../hooks/useProjects';
import S, { classes } from './styles';

const AdminProjects = (): JSX.Element => {
  const [newProjectModalOpen, setNewProjectModalOpen] = useState(false);
  const { projects, isFetched } = useProjects({ summary: true });

  const NewProjectButton = (
    <div className={classes.newProjectButtonWrapper}>
      <ButtonBase className={classes.newProjectButton} onClick={() => setNewProjectModalOpen(true)} disableRipple>
        <p>
          new project <p>&nbsp;+</p>
        </p>
      </ButtonBase>
    </div>
  );

  const NewProjectModal = (
    <S.NewProjectModal open={newProjectModalOpen} onClose={() => setNewProjectModalOpen(false)}>
      <>
        <ProjectForm setModalOpen={setNewProjectModalOpen} />
      </>
    </S.NewProjectModal>
  );

  return (
    <S.AdminProjectsContainer>
      {NewProjectButton}
      <AdminProjectsGrid />

      {isFetched && projects.length === 0 ? (
        <Box className="No-Projects-Box">
          <Typography>{'Click new project button to get started...'}</Typography>
        </Box>
      ) : (
        <></>
      )}

      {NewProjectModal}
    </S.AdminProjectsContainer>
  );
};

export default AdminProjects;
