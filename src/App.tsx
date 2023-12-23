import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet, Navigate } from 'react-router-dom';
import { GlobalContext } from './contexts/global';
import { CssBaseline, ThemeProvider } from '@mui/material';
import Header from './components/Header';
import Footer from './components/Footer';
import { defaultTheme } from './assets/themes';
import S from './styles';
import AnimatedCursor from './components/AnimatedCursor';
import { adminRoutes, mainRoutes } from './routes';
import type { RouteFixture } from './routes';
import { validateAdminAuthentication } from './api/authMethods.api';

const App = (): JSX.Element => {
  const [theme, setTheme] = useState(defaultTheme);
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);

  const renderProtectedPageElement = (route: RouteFixture, isLoggedIn: boolean) => {
    console.log(isLoggedIn);
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
          </S.BodyContainer>

          <AnimatedCursor />
        </ThemeProvider>
      </Router>
    </GlobalContext.Provider>
  );
};

export default App;
