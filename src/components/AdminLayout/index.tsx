import React, { useContext, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { GlobalContext } from '../../contexts/global';
import { validateAdminAuthentication } from '../../api/authMethods.api';

const AdminLayout = ():JSX.Element => {
  const { 
    authState: [, setIsAdminLoggedIn],
    pageLoadingState: [, setIsPageLoading],
  } = useContext(GlobalContext);

  useEffect(() => {
    setIsPageLoading(true);

    validateAdminAuthentication()
      .then(() => setIsAdminLoggedIn(true))
      .catch(() => {})
      .finally(() => setIsPageLoading(false));
  }, []);

  return (
    <>
      <Outlet />
    </>
  );
};

export default AdminLayout;
