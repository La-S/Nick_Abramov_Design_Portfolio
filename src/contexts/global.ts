import { Dispatch, SetStateAction, createContext } from 'react';
import { Theme } from '@mui/material';

export type ThemeStateDispatcher = Dispatch<SetStateAction<Theme>>;
export type ThemeStateProps = [Theme, ThemeStateDispatcher];
export type AuthStateProps = [boolean, Dispatch<SetStateAction<boolean>>];

interface GlobalContextProps {
  themeState: ThemeStateProps;
  authState: AuthStateProps;
}

export const GlobalContext = createContext<GlobalContextProps>({
  themeState: undefined,
  authState: undefined,
} as unknown as GlobalContextProps);
