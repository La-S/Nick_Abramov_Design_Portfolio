import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ButtonBase, useTheme } from '@mui/material';
import { SignOut as SignOutIcon } from '@phosphor-icons/react';
import Logo from '../Logo';
import { GlobalContext } from '../../contexts/global';
import { cookies } from '../../api/api';
import S from './styles';
import HeaderStyles from '../../components/Header/styles';

const AdminHeader = (): JSX.Element => {
  const {
    authState: [, setAuthState],
  } = useContext(GlobalContext);
  const theme = useTheme();

  const logout = () => {
    cookies.remove('access_token', { path: '/' });
    setAuthState(false);
  };

  return (
    <HeaderStyles.Header pathName="/admin/projects">
      <HeaderStyles.LogoContainer>
        <Link to="/">
          <Logo fillMain={theme.componentColors.logoMain} fillSecondary={theme.componentColors.logoSecondary} />
        </Link>
      </HeaderStyles.LogoContainer>

      <S.HeaderNavLinks>
        <ButtonBase disableRipple onClick={logout}>
          <SignOutIcon />
        </ButtonBase>
      </S.HeaderNavLinks>
    </HeaderStyles.Header>
  );
};

export default AdminHeader;
