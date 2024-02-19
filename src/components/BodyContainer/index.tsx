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
import { scrollToTop } from '../../utils/domUtils';

const MAX_LOADING_DELAY = 2500;
const LANDING_PAGE_PATHS = ['/', '/home', '/projects'];
const PROJECT_PAGE_PREFIX = '/projects';

const BodyContainer = (): JSX.Element => {
  const {
    authState: [isAdminLoggedIn],
    pageLoadingState: [, setIsPageLoading],
  } = useContext(GlobalContext);

  const queryClient = useQueryClient();
  const location = useLocation();

  const renderProtectedPageElement = (route: RouteFixture, isLoggedIn: boolean) => {
    if (!isLoggedIn && route.path !== '/admin/login') {
      return <Navigate to="/admin/login" />;
    }
    if (isLoggedIn && route.path === '/admin/login') {
      return <Navigate to="/admin/dashboard" />;
    }

    return route.element;
  };

  useEffect(() => {
    scrollToTop();
    
    if (LANDING_PAGE_PATHS.includes(location.pathname)) {
      const cachedProjectsExist = checkIfCachedQueryDataExists(queryClient, ['projects', { summary: true }]);
      if (!cachedProjectsExist) {
        setIsPageLoading(true);
      }
    }
    if (location.pathname.includes(PROJECT_PAGE_PREFIX)) {
      const projectId = location.pathname.replace(`${PROJECT_PAGE_PREFIX}/`, '');
      if (projectId) {
        const cachedProjectExists = checkIfCachedQueryDataExists(queryClient, ['project', projectId]);
        if (!cachedProjectExists) {
          setIsPageLoading(true);
        }
      }
    }

    setTimeout(() => setIsPageLoading(false), MAX_LOADING_DELAY);
  }, [location.pathname]);

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

      <LoadingScreen />
    </S.BodyContainer>
  );
};

export default BodyContainer;
