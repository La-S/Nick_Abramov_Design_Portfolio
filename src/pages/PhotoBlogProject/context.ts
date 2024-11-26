import { createContext } from 'react';
import type { Dispatch, SetStateAction } from 'react';

interface LightboxContextProps {
  lightboxOpenState: [boolean, Dispatch<SetStateAction<boolean>>];
  slideIndexState: [number, Dispatch<SetStateAction<number>>];
}

export const LightboxContext = createContext<LightboxContextProps>({
  lightboxOpenState: [false, () => {}],
  slideIndexState: [0, () => {}],
});