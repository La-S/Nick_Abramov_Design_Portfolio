import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@mui/material';
import Header from './components/Header';
import Footer from './components/Footer';
import { defaultTheme } from './assets/themes';
import S from './styles';
import AnimatedCursor from './components/AnimatedCursor';
import FaqPage from './pages/Faq';
import ContactPage from './pages/Contact';

const App = (): JSX.Element => {
  const [theme] = useState(defaultTheme);

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <S.BodyContainer>
          <Header />

          <Routes>
            <Route path="/">
              Home
            </Route>
            <Route path="/questions" Component={FaqPage} />
            <Route path="/contact" Component={ContactPage} />
          </Routes>

          <Footer />
        </S.BodyContainer>

        <AnimatedCursor />
      </ThemeProvider>
    </Router>
  );
};

export default App;
