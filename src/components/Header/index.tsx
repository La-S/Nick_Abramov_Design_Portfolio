import React, { useEffect, useState } from 'react';
import { useTheme } from '@mui/material';
import S from './styles';
import Logo from '../Logo';
import NavMenu from './NavMenu';
import { useLocation } from 'react-router-dom';

const Header = (): JSX.Element => {
  const pathName = useLocation().pathname.substring(1);
  const [navMenuOpen, setNavMenuOpen] = useState<boolean>(false);
  const { breakpoints, componentColors, textColors } = useTheme();
  const getFillMainColor = () => {
    if (pathName === 'about'
    && window.innerWidth >= breakpoints.values.tablet) {
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
    <S.Header pathName={pathName} >
      <S.NewProjectLink to="/contact" pathName={pathName}>Start a project</S.NewProjectLink>
      <S.LogoContainer>
        <Logo 
          fillMain={fillMain}
          fillSecondary={componentColors.logoSecondary}
          isLink 
        />
      </S.LogoContainer>
      <S.Burger onClick={() => setNavMenuOpen(true)} className="Burger" />

      <NavMenu openState={[navMenuOpen, setNavMenuOpen]} />
    </S.Header>
  );
};

export default Header;
