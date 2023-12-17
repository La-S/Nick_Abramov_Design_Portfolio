import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Box, useTheme } from '@mui/material';
import { List as BurgerIcon, PaintBrush as ThemeIcon, CaretDown as CaretIcon } from '@phosphor-icons/react';
import Logo from '../Logo';
import NavMenu from './NavMenu';
import S from './styles';

const Header = (): JSX.Element => {
  const pathName = useLocation().pathname.substring(1);
  const [navMenuOpen, setNavMenuOpen] = useState<boolean>(false);
  const { breakpoints, componentColors, textColors } = useTheme();
  const getFillMainColor = () => {
    if (pathName === 'about' && window.innerWidth >= breakpoints.values.tablet) {
      return textColors.tertiaryAlternate;
    }

    return componentColors.logoMain;
  };
  const [fillMain, setFillMain] = useState(getFillMainColor());

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
        <Box className="Theme-Switch">
          <ThemeIcon className="Theme-Icon" />
          <CaretIcon className="Caret-Icon" />
        </Box>
        <BurgerIcon onClick={() => setNavMenuOpen(true)} className="Burger-Icon" />
      </S.BurgerContainer>

      <NavMenu openState={[navMenuOpen, setNavMenuOpen]} />
    </S.Header>
  );
};

export default Header;
