import React, { useContext, useEffect } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import MainLayout from '../MainLayout';
import AdminLayout from '../AdminLayout';
import { MAIN_ROUTES, ADMIN_ROUTES } from '../../routes';
import type { RouteFixture } from '../../routes';
import S from './styles';
import LoadingScreen from '../LoadingScreen';
import { useQueryClient } from '@tanstack/react-query';
import { GlobalContext } from '../../contexts/global';
import { checkIfCachedQueryDataExists } from '../../utils/loadingUtils';

const LANDING_PAGE_PAGE_PATHS = ['/', '/home', '/projects'];

const BodyContainer = (): JSX.Element => {
  const {
    authState: [isAdminLoggedIn],
    pageLoadingState: [isPageLoading, setIsPageLoading],
  } = useContext(GlobalContext);

  const queryClient = useQueryClient();
  const location = useLocation();

  useEffect(() => {
    if (!LANDING_PAGE_PAGE_PATHS.includes(location.pathname)) return;

    const cachedProjectsExist = checkIfCachedQueryDataExists(queryClient, ['projects', { summary: true }]);
    if (!cachedProjectsExist) {
      setIsPageLoading(true);
    }
  }, [location.pathname]);

  const renderProtectedPageElement = (route: RouteFixture, isLoggedIn: boolean) => {
    if (!isLoggedIn && route.path !== '/admin/login') {
      return <Navigate to="/admin/login" />;
    }
    if (isLoggedIn && (route.path === '/admin/login')) {
      return <Navigate to="/admin/dashboard" />;
    }

    return route.element;
  };

  return (
    <S.BodyContainer id="Body-Container">
      <Routes>
        <Route element={<MainLayout />}>
          {MAIN_ROUTES.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Route>
        <Route element={<AdminLayout />}>
          {ADMIN_ROUTES.map((route, index) => (
            <Route key={index} path={route.path} element={renderProtectedPageElement(route, isAdminLoggedIn)} />
          ))}
        </Route>
      </Routes>

      {isPageLoading && <LoadingScreen />}
    </S.BodyContainer>
  );
};

export default BodyContainer;
