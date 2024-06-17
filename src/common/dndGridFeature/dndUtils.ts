import type { Dispatch, SetStateAction } from 'react';
import type { QueryClient, QueryKey } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';

export const handleDragStart = (
  e: React.DragEvent<HTMLElement>,
  id: string,
  setDraggingElId: Dispatch<SetStateAction<null | string>>,
) => {
  e.dataTransfer.setData('id', id);

  setDraggingElId(id);
};

export const handleDragOver = (
  e: React.DragEvent<HTMLElement>,
  id: string,
  setDraggingOverElId: Dispatch<SetStateAction<null | string>>,
) => {
  e.preventDefault();

  setDraggingOverElId(id);
};

export const handleDrop = (
  e: React.DragEvent<HTMLElement>,
  id: string,
  newOrder: number,
  setIsReordering: Dispatch<SetStateAction<boolean>>,
  queryClient: QueryClient,
  queryKey: QueryKey,
  setDraggingElId: Dispatch<SetStateAction<null | string>>,
  setDraggingOverElId: Dispatch<SetStateAction<null | string>>,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  callback: (documentId: string, newOrder: number) => Promise<AxiosResponse<any>>,
) => {
  const documentId = e.dataTransfer.getData('id');
  setDraggingElId(null);
  setDraggingOverElId(null);

  if (documentId === id) return;

  setIsReordering(true);
  callback(documentId, newOrder)
    .then(() => queryClient.invalidateQueries({ queryKey }))
    .catch((err) => alert(err))
    .finally(() => setIsReordering(false));
};
