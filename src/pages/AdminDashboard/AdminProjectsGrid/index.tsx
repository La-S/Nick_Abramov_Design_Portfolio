import React, { useState } from 'react';
import { CircularProgress } from '@mui/material';
import S from './styles';
import useProjects from '../../../hooks/useProjects';
import AdminProjectsGridBox from './AdminProjectsGridBox';
import { useQueryClient } from '@tanstack/react-query';
import { AdminProjectsGridContext } from './contexts';

const AdminProjectsGrid = (): JSX.Element => {
  const queryClient = useQueryClient();
  const { projects, isLoading } = useProjects({ summary: true });
  const [isReordering, setIsReordering] = useState(false);

  return (
    <AdminProjectsGridContext.Provider
      value={{
        reorderingState: [isReordering, setIsReordering],
      }}
    >
      <S.AdminProjectsGrid>
        {isLoading ? (
          <S.LoadingBox>
            <CircularProgress />
          </S.LoadingBox>
        ) : (
          projects.map((project, i) => (
            <AdminProjectsGridBox 
              key={i} 
              project={project} 
              queryClient={queryClient} 
            />
          ))
        )}
      </S.AdminProjectsGrid>
    </AdminProjectsGridContext.Provider>
  );
};

export default AdminProjectsGrid;
