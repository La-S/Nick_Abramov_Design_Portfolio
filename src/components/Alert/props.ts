import { Dispatch, SetStateAction } from 'react';

export type AlertDisplayProps = {
  open: boolean;
  message: string;
  severity: string;
};

export type SetAlertDisplayProps = Dispatch<SetStateAction<AlertDisplayProps>>;
