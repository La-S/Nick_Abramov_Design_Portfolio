import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { GlobalContext } from './contexts/global';
import { CssBaseline, ThemeProvider } from '@mui/material';
import S from './styles';
import AnimatedCursor from './components/AnimatedCursor';
import { adminRoutes, mainRoutes } from './routes';
import type { RouteFixture } from './routes';
import { getCurrentTheme } from './utils/themeUtils';
import LoadingScreen from './components/LoadingScreen';
import MainLayout from './components/MainLayout';
import AdminLayout from './components/AdminLayout';

const App = (): JSX.Element => {
  const currentTheme = getCurrentTheme();
  const [theme, setTheme] = useState(currentTheme);
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  const [isPageLoading, setIsPageLoading] = useState(false);

  const renderProtectedPageElement = (route: RouteFixture, isLoggedIn: boolean) => {
    if (!isLoggedIn && route.path !== '/admin/login') {
      return <Navigate to="/admin/login" />;
    }
    if (isLoggedIn && (route.path === '/admin/login' || route.path === '/admin')) {
      return <Navigate to="/admin/dashboard" />;
    }

    return route.element;
  };

  return (
    <GlobalContext.Provider
      value={{
        themeState: [theme, setTheme],
        authState: [isAdminLoggedIn, setIsAdminLoggedIn],
        pageLoadingState: [isPageLoading, setIsPageLoading],
      }}
    >
      <Router>
        <ThemeProvider theme={theme}>
          <CssBaseline />

          <S.BodyContainer id="Body-Container">
            <Routes>
              <Route element={<MainLayout />}>
                {mainRoutes.map((route, index) => (
                  <Route key={index} path={route.path} element={route.element} />
                ))}
              </Route>
              <Route element={<AdminLayout />}>
                {adminRoutes.map((route, index) => (
                  <Route key={index} path={route.path} element={renderProtectedPageElement(route, isAdminLoggedIn)} />
                ))}
              </Route>
            </Routes>

            {isPageLoading && <LoadingScreen />}
          </S.BodyContainer>

          <AnimatedCursor />
        </ThemeProvider>
      </Router>
    </GlobalContext.Provider>
  );
};

export default App;
