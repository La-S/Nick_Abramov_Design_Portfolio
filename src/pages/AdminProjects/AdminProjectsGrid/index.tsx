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
  const [draggingElId, setDraggingElId] = useState<string | null>(null);
  const [draggingOverElId, setDraggingOverElId] = useState<string | null>(null);

  return (
    <AdminProjectsGridContext.Provider
      value={{
        reorderingState: [isReordering, setIsReordering],
        draggingElIdState: [draggingElId, setDraggingElId],
        draggingOverElIdState: [draggingOverElId, setDraggingOverElId],
      }}
    >
      <S.AdminProjectsGrid>
        {isLoading ? (
          <S.LoadingBox>
            <CircularProgress />
          </S.LoadingBox>
        ) : (
          projects.map((project) => {
            const uniqueOrderId =`${project.id} ${project.order}`;
            return (
              <AdminProjectsGridBox
                key={uniqueOrderId}
                project={project}
                queryClient={queryClient}
              />
            );
          })
        )}
      </S.AdminProjectsGrid>
    </AdminProjectsGridContext.Provider>
  );
};

export default AdminProjectsGrid;
