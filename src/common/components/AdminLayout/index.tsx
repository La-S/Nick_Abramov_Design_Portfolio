import React, { useContext, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { GlobalContext } from '../../../contexts/global';
import { validateAdminAuthentication } from '../../../api/authMethods.api';
import AdminHeader from '../AdminHeader/AdminHeader';
import { ADMIN_LOGIN_ROUTE } from '../../../routes';

const AdminLayout = (): JSX.Element => {
  const {
    authState: [, setIsAdminLoggedIn],
    pageLoadingState: [, setIsPageLoading],
  } = useContext(GlobalContext);
  const location = useLocation();
  const shouldDisplayHeader = location.pathname !== ADMIN_LOGIN_ROUTE.path;

  useEffect(() => {
    setIsPageLoading(true);

    validateAdminAuthentication()
      .then(() => setIsAdminLoggedIn(true))
      .catch(() => {})
      .finally(() => setIsPageLoading(false));
  }, []);

  return (
    <>
      {shouldDisplayHeader ? <AdminHeader /> : <></>}
      <Outlet />
    </>
  );
};

export default AdminLayout;
