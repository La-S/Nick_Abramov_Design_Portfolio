import React from 'react';
import { useTheme } from '@mui/material';
import S from './styles';
import Logo from '../Logo';

const Header = (): JSX.Element => {
  // const [navMenuOpen, setNavMenuOpen] = useState(false);
  const { componentColors } = useTheme();

  return (
    <S.Header>
      <S.NewProjectLink to="/">Start a project</S.NewProjectLink>
      <S.LogoContainer>
        <Logo fillMain={componentColors.logoMain} fillSecondary={componentColors.logoSecondary} />
      </S.LogoContainer>
      <S.Burger />

      {/* NavMenu */}
    </S.Header>
  );
};

export default Header;
