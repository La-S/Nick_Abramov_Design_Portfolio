import React, { useContext } from 'react';
import { GlobalContext } from '../../../contexts/global';
import { defaultTheme, lightTheme } from '../../../assets/themes';
import S from './styles';

const THEME_OPTIONS = [
  {
    name: 'Dark Theme',
    value: defaultTheme,
  },
  {
    name: 'Light Theme',
    value: lightTheme,
  },
];

const ThemeMenu = (): JSX.Element => {
  const {
    themeState: [currentTheme, setTheme],
  } = useContext(GlobalContext);
  
  const switchTheme = (themeName: string) => {
    const themeObject = THEME_OPTIONS.find((theme) => theme.name === themeName);
    if (themeObject) setTheme(themeObject.value);
  };

  return (
    <S.ThemeMenu>
      {THEME_OPTIONS.map(({ name: themeName, value: themeValue }, i) => (
        <li
          key={i}
          {...(themeValue === currentTheme
            ? { className: 'Selected' }
            : {
              onClick: () => switchTheme(themeName),
            })}
        >
          {themeName}
        </li>
      ))}
    </S.ThemeMenu>
  );
};

export default ThemeMenu;
