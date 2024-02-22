import { Dispatch, SetStateAction, createContext } from 'react';
import { Theme } from '@mui/material';

export type ThemeStateDispatcher = Dispatch<SetStateAction<Theme>>;
export type ThemeStateProps = [Theme, ThemeStateDispatcher];
export type AuthStateProps = [boolean, Dispatch<SetStateAction<boolean>>];
export type PageLoadingState = [boolean, Dispatch<SetStateAction<boolean>>];
export type TouchDeviceState = [boolean, Dispatch<SetStateAction<boolean>>];

interface GlobalContextProps {
  themeState: ThemeStateProps;
  authState: AuthStateProps;
  pageLoadingState: PageLoadingState;
  touchDeviceState: TouchDeviceState;
  cursorWrapperRef: React.MutableRefObject<HTMLDivElement | null>;
}

export const GlobalContext = createContext<GlobalContextProps>({
  themeState: undefined,
  authState: undefined,
  pageLoadingState: undefined,
  touchDeviceState: undefined,
  cursorWrapperRef: undefined,
} as unknown as GlobalContextProps);
