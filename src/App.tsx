import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet, Navigate } from 'react-router-dom';
import { GlobalContext } from './contexts/global';
import { CssBaseline, ThemeProvider } from '@mui/material';
import Header from './components/Header';
import Footer from './components/Footer';
import S from './styles';
import AnimatedCursor from './components/AnimatedCursor';
import { adminRoutes, mainRoutes } from './routes';
import type { RouteFixture } from './routes';
import { validateAdminAuthentication } from './api/authMethods.api';
import { getCurrentTheme } from './utils/themeUtils';
import LoadingScreen from './components/LoadingScreen';

const App = (): JSX.Element => {
  const currentTheme = getCurrentTheme();
  const [theme, setTheme] = useState(currentTheme);
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  const [isPageLoading, setIsPageLoading] = useState(true);

  const renderProtectedPageElement = (route: RouteFixture, isLoggedIn: boolean) => {
    if (!isLoggedIn && route.path !== '/admin/login') {
      return <Navigate to="/admin/login" />;
    }
    if (isLoggedIn && route.path === '/admin/login') {
      return <Navigate to="/admin/dashboard" />;
    }

    return route.element;
  };

  const MainLayout = (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
  const AdminLayout = (
    <>
      <Outlet />
    </>
  );

  // TODO: Render a loading screen before this authentication is complete
  useEffect(() => {
    validateAdminAuthentication()
      .then(() => setIsAdminLoggedIn(true))
      .catch(() => {});
  }, []);

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
              <Route element={MainLayout}>
                {mainRoutes.map((route, index) => (
                  <Route key={index} path={route.path} element={route.element} />
                ))}
              </Route>
              <Route element={AdminLayout}>
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
