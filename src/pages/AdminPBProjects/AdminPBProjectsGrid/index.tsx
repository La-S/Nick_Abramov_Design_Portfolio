import React from 'react';
import S, { classes } from './styles';
import { useQueryClient } from '@tanstack/react-query';
import usePBProjects from '../../../hooks/usePBProjects';
import { CircularProgress } from '@mui/material';
import AdminPBProjectsGridBox from './AdminPBProjectsGridBox';

const AdminPBProjectsGrid = (): JSX.Element => {
  const queryClient = useQueryClient();
  const { pBProjects, isLoading } = usePBProjects({ summary: true });

  return (
    <S.AdminPBProjectsGrid className={classes.root}>
      {isLoading ? (
        <S.LoadingBox>
          <CircularProgress />
        </S.LoadingBox>
      ): (
        pBProjects.map((pbProject) => (
          <AdminPBProjectsGridBox
            key={pbProject.id}
            pBProject={pbProject}
            queryClient={queryClient}
          />
        ))
      )}
    </S.AdminPBProjectsGrid>
  );
};

export default AdminPBProjectsGrid;
