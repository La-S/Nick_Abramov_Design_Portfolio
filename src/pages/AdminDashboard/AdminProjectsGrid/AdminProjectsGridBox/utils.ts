import type { Dispatch, SetStateAction } from 'react';
import type { Project } from '../../../../types/data/project';
import { reorderProjects } from '../../../../api/projectMethods.api';
import { QueryClient } from '@tanstack/react-query';

export const handleDragStart = (
  e: React.DragEvent<HTMLDivElement>,
  id: string,
  setDraggingElId: Dispatch<SetStateAction<null | string>>,
) => {
  e.dataTransfer.setData('id', id);

  setDraggingElId(id);
};

export const handleDragOver = (
  e: React.DragEvent<HTMLDivElement>,
  id: string,
  setDraggingOverElId: Dispatch<SetStateAction<null | string>>,
) => {
  e.preventDefault();

  setDraggingOverElId(id);
};

export const handleDrop = (
  e: React.DragEvent<HTMLDivElement>,
  id: string,
  newOrder: Project['order'],
  setIsReordering: Dispatch<SetStateAction<boolean>>,
  queryClient: QueryClient,
  setDraggingElId: Dispatch<SetStateAction<null | string>>,
  setDraggingOverElId: Dispatch<SetStateAction<null | string>>,
) => {
  const projectId = e.dataTransfer.getData('id');
  setDraggingElId(null);
  setDraggingOverElId(null);

  if (projectId === id) {
    return;
  }

  setIsReordering(true);
  reorderProjects(projectId, newOrder)
    .then(() => queryClient.invalidateQueries({ queryKey: ['projects'] }))
    .catch((err) => alert(err))
    .finally(() => setIsReordering(false));
};