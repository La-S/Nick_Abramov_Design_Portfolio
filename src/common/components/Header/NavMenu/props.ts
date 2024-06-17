import { Dispatch, SetStateAction } from 'react';
import { BoxProps } from '@mui/material';

export interface NavMenuProps extends BoxProps {
  openState: [boolean, Dispatch<SetStateAction<boolean>>];
}
