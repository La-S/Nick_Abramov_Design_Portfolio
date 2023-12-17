import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@mui/material';
import Header from './components/Header';
import Footer from './components/Footer';
import { defaultTheme } from './assets/themes';
import S from './styles';
import AnimatedCursor from './components/AnimatedCursor';
import LandingPage from './pages/Landing/Landing';
import ProjectPage from './pages/Project';
import AboutPage from './pages/About';
import FaqPage from './pages/Faq';
import ContactPage from './pages/Contact';
import { GlobalContext } from './contexts/global';

const App = (): JSX.Element => {
  const [theme, setTheme] = useState(defaultTheme);

  return (
    <GlobalContext.Provider
      value={{
        themeState: [theme, setTheme],
      }}
    >
      <Router>
        <ThemeProvider theme={theme}>
          <CssBaseline />

          <S.BodyContainer id="Body-Container">
            <Header />

            <Routes>
              {['/', '/home', '/projects'].map((path, index) => (
                <Route key={index} path={path} element={<LandingPage />} />
              ))}
              <Route path="/projects/:projectId" element={<ProjectPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/questions" element={<FaqPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>

            <Footer />
          </S.BodyContainer>

          <AnimatedCursor />
        </ThemeProvider>
      </Router>
    </GlobalContext.Provider>
  );
};

export default App;
