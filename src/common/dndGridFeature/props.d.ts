import type { Dispatch, SetStateAction } from 'react';

export type DraggingElStateProps = [
  null | string,
  Dispatch<SetStateAction<null | string>>,
];

export type DraggingOverElIdStateProps = [
  null | string,
  Dispatch<SetStateAction<null | string>>,
];

export interface GridContextProps {
  reorderingState: [boolean, Dispatch<SetStateAction<boolean>>],
  draggingElIdState: DraggingElStateProps,
  draggingOverElIdState: DraggingOverElIdStateProps,
}
