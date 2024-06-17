import React, { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useTheme } from '@mui/material';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import { List as BurgerIcon } from '@phosphor-icons/react';
import Logo from '../Logo';
import NavMenu from './NavMenu';
import S from './styles';
import { getCurrentThemeName, setCurrentThemeNameInStorage } from '../../../utils/themeUtils';
import { GlobalContext } from '../../../contexts/global';
import lightTheme from '../../../assets/themes/lightTheme';
import defaultTheme from '../../../assets/themes/defaultTheme';

const Header = (): JSX.Element => {
  const pathName = useLocation().pathname.substring(1);
  const {
    themeState: [, setTheme],
  } = useContext(GlobalContext);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(getCurrentThemeName() === 'dark');
  const [navMenuOpen, setNavMenuOpen] = useState<boolean>(false);
  const { breakpoints, componentColors, textColors } = useTheme();
  const getFillMainColor = () => {
    if (pathName === 'about' && window.innerWidth >= breakpoints.values.tablet) {
      return textColors.tertiaryAlternate;
    }

    return componentColors.logoMain;
  };
  const [fillMain, setFillMain] = useState(getFillMainColor());

  const toggleTheme = () => {
    if (isDarkMode) {
      setTheme(lightTheme);
      setCurrentThemeNameInStorage('light');
      setIsDarkMode(false);
    } else {
      setTheme(defaultTheme);
      setCurrentThemeNameInStorage('dark');
      setIsDarkMode(true);
    }
  };

  useEffect(() => {
    const resizeListener = () => setFillMain(getFillMainColor());
    addEventListener('resize', resizeListener);

    return () => removeEventListener('resize', resizeListener);
  }, []);
  useEffect(() => {
    setFillMain(getFillMainColor());
  }, [pathName]);

  return (
    <S.Header pathName={pathName}>
      <S.NewProjectLink to="/contact" pathName={pathName}>
        Start a project
      </S.NewProjectLink>
      <S.LogoContainer>
        <Logo fillMain={fillMain} fillSecondary={componentColors.logoSecondary} isLink />
      </S.LogoContainer>
      <S.BurgerContainer>
        <DarkModeSwitch
          className={`Theme-Toggle ${isDarkMode ? '' : 'Light-Theme-Active'}`}
          checked={isDarkMode}
          onChange={toggleTheme}
        />
        <BurgerIcon onClick={() => setNavMenuOpen(true)} className="Burger-Icon" />
      </S.BurgerContainer>

      <NavMenu openState={[navMenuOpen, setNavMenuOpen]} />
    </S.Header>
  );
};

export default Header;
