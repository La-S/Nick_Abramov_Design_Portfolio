import { Dispatch, SetStateAction, createContext } from 'react';
import { Theme } from '@mui/material';

export type ThemeStateDispatcher = Dispatch<SetStateAction<Theme>>;
export type ThemeStateProps = [Theme, ThemeStateDispatcher];

interface GlobalContextProps {
  themeState: ThemeStateProps;
}

export const GlobalContext = createContext<GlobalContextProps>({
  themeState: undefined,
} as unknown as GlobalContextProps);
