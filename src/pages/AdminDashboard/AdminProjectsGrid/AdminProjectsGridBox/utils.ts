import type { Dispatch, SetStateAction } from 'react';
import type { Project } from '../../../../types/data/project';
import { reorderProjects } from '../../../../api/projectMethods.api';
import { QueryClient } from '@tanstack/react-query';

export const handleDragStart = (e: React.DragEvent<HTMLDivElement>, id: string) => {
  e.dataTransfer.setData('id', id);
};

export const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
  e.preventDefault();
};

export const handleDrop = (
  e: React.DragEvent<HTMLDivElement>,
  newOrder: Project['order'],
  setIsReordering: Dispatch<SetStateAction<boolean>>,
  queryClient: QueryClient,
) => {
  const projectId = e.dataTransfer.getData('id');
  setIsReordering(true);
  reorderProjects(projectId, newOrder)
    .then(() => queryClient.invalidateQueries({ queryKey: ['projects'] }))
    .catch((err) => alert(err))
    .finally(() => setIsReordering(false));
};