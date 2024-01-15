import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { ButtonBase, useTheme } from '@mui/material';
import { SignOut as SignOutIcon } from '@phosphor-icons/react';
import HeaderStyles from '../../components/Header/styles';
import Logo from '../../components/Logo';
import S from './styles';
import { cookies } from '../../api/api';
import { GlobalContext } from '../../contexts/global';
import AdminProjectsGrid from './AdminProjectsGrid';
import ProjectForm from './ProjectForm';

const AdminDashboard = (): JSX.Element => {
  const {
    authState: [, setAuthState],
  } = useContext(GlobalContext);
  const theme = useTheme();
  const [newProjectModalOpen, setNewProjectModalOpen] = useState(false);

  const logout = () => {
    cookies.remove('access_token', { path: '/' });
    setAuthState(false);
  };

  const Header = (
    <HeaderStyles.Header pathName="/admin/dashboard">
      <HeaderStyles.LogoContainer>
        <Link to="/">
          <Logo fillMain={theme.componentColors.logoMain} fillSecondary={theme.componentColors.logoSecondary} />
        </Link>
      </HeaderStyles.LogoContainer>

      <S.HeaderNavLinks>
        <ButtonBase className="New-Project-Button" onClick={() => setNewProjectModalOpen(true)} disableRipple>
          <p>
            new project <p>&nbsp;+</p>
          </p>
        </ButtonBase>
        <ButtonBase disableRipple onClick={logout}>
          <SignOutIcon />
        </ButtonBase>
      </S.HeaderNavLinks>
    </HeaderStyles.Header>
  );

  const NewProjectModal = (
    <S.NewProjectModal open={newProjectModalOpen} onClose={() => setNewProjectModalOpen(false)}>
      <>
        <ProjectForm setModalOpen={setNewProjectModalOpen} />
      </>
    </S.NewProjectModal>
  );

  return (
    <S.AdminDashboardContainer>
      {Header}
      <AdminProjectsGrid />

      {NewProjectModal}
    </S.AdminDashboardContainer>
  );
};

export default AdminDashboard;
