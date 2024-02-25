import { createContext } from 'react';
import type { Dispatch, SetStateAction } from 'react';

export interface AdminProjectsGridContextProps {
  reorderingState: [boolean, Dispatch<SetStateAction<boolean>>],
}

export const AdminProjectsGridContext = createContext<AdminProjectsGridContextProps>({
  reorderingState: [],
} as unknown as AdminProjectsGridContextProps);
