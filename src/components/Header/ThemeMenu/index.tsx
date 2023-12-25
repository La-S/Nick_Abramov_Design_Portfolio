import React, { useContext } from 'react';
import { GlobalContext } from '../../../contexts/global';
import S from './styles';
import { setCurrentThemeNameInStorage } from '../../../utils/themeUtils';
import themeOptions from '../../../assets/themes';

const ThemeMenu = (): JSX.Element => {
  const {
    themeState: [currentTheme, setTheme],
  } = useContext(GlobalContext);

  const switchTheme = (themeName: string) => {
    const themeObject = themeOptions.find((theme) => theme.name === themeName);
    if (themeObject) {
      setTheme(themeObject.value);
      setCurrentThemeNameInStorage(themeObject.name);
    }
  };

  return (
    <S.ThemeMenu>
      {themeOptions.map(({ name: themeName, value: themeValue }, i) => (
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
