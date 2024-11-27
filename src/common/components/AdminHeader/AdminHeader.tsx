import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ButtonBase, Typography, useTheme } from '@mui/material';
import { SignOut as SignOutIcon } from '@phosphor-icons/react';
import Logo from '../Logo';
import { GlobalContext } from '../../../contexts/global';
import { cookies } from '../../../api/api';
import S from './styles';
import HeaderStyles from '../../components/Header/styles';

const NAV_LINKS = [
  { name: 'Projects', to: '/admin/projects' },
  { name: 'FAQs', to: '/admin/faqs' },
  { name: 'PB Projects', to: '/admin/photo-blog' }
];

const AdminHeader = (): JSX.Element => {
  const {
    authState: [, setAuthState],
  } = useContext(GlobalContext);
  const location = useLocation();
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
        {NAV_LINKS.map(({ name, to }) => (
          <Link key={name} to={to}>
            <Typography {...location.pathname === to ? { className: 'Active' } : {}}>
              {name}
            </Typography>
          </Link>
        ))}
        <ButtonBase disableRipple onClick={logout}>
          <SignOutIcon />
        </ButtonBase>
      </S.HeaderNavLinks>
    </HeaderStyles.Header>
  );
};

export default AdminHeader;
