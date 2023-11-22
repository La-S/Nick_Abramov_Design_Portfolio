import React, { useState } from 'react';
import { useTheme } from '@mui/material';
import S from './styles';
import Logo from '../Logo';
import NavMenu from './NavMenu';

const Header = (): JSX.Element => {
  const [navMenuOpen, setNavMenuOpen] = useState<boolean>(false);
  const { componentColors } = useTheme();

  return (
    <S.Header>
      <S.NewProjectLink to="/">Start a project</S.NewProjectLink>
      <S.LogoContainer>
        <Logo fillMain={componentColors.logoMain} fillSecondary={componentColors.logoSecondary} />
      </S.LogoContainer>
      <S.Burger onClick={() => setNavMenuOpen(true)} className="Burger" />

      <NavMenu openState={[navMenuOpen, setNavMenuOpen]} />
    </S.Header>
  );
};

export default Header;
