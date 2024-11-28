import React, { useState } from 'react';
import { ButtonBase } from '@mui/material';
import S, { classes } from './styles';
import usePBProjects from '../../hooks/usePBProjects';
import AdminPBProjectsGrid from './AdminPBProjectsGrid';
import PBProjectForm from './PBProjectForm';

const AdminPBProjects = (): JSX.Element => {
  const [newPBProjectModalOpen, setNewPBProjectModalOpen] = useState(false);
  const { pBProjects, isFetched } = usePBProjects({ summary: true });

  const NewPBProjectButton = (
    <div className={classes.newPBProjectButtonWrapper}>
      <ButtonBase
        className={classes.newPBProjectButton}
        onClick={() => setNewPBProjectModalOpen(true)}
        disableRipple
      >
        <p>
          new pb project <p>&nbsp;+</p>
        </p>
      </ButtonBase>
    </div>
  );

  const NewPBProjectModal = (
    <S.NewPBProjectModal
      open={newPBProjectModalOpen}
      onClose={() => setNewPBProjectModalOpen(false)}
    >
      <>
        <PBProjectForm setModalOpen={setNewPBProjectModalOpen} />
      </>
    </S.NewPBProjectModal>
  );

  return (
    <S.AdminPBProjectsContainer className={classes.root}>
      {NewPBProjectButton}
      <AdminPBProjectsGrid />

      {isFetched && pBProjects.length === 0 ? (
        <div className="No-Projects-Box">
          <p>{'Click new pb project button to get started...'}</p>
        </div>
      ) : (
        <></>
      )}

      {NewPBProjectModal}
    </S.AdminPBProjectsContainer>
  );
};

export default AdminPBProjects;
