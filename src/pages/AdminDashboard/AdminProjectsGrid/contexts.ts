import { createContext } from 'react';
import type { Dispatch, SetStateAction } from 'react';

export type DraggingElStateProps = [
  null | string,
  Dispatch<SetStateAction<null | string>>,
];

export type DraggingOverElIdStateProps = [
  null | string,
  Dispatch<SetStateAction<null | string>>,
];

export interface AdminProjectsGridContextProps {
  reorderingState: [boolean, Dispatch<SetStateAction<boolean>>],
  draggingElIdState: DraggingElStateProps,
  draggingOverElIdState: DraggingOverElIdStateProps,
}

export const AdminProjectsGridContext = createContext<AdminProjectsGridContextProps>({
  reorderingState: [],
  draggingElIdState: [],
  draggingOverElIdState: [],
} as unknown as AdminProjectsGridContextProps);
