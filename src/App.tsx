import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@mui/material';
import Header from './components/Header';
import Footer from './components/Footer';
import { defaultTheme } from './assets/themes';
import S from './styles';

const App = (): JSX.Element => {
  const [theme] = useState(defaultTheme);

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <S.BodyContainer>
          <Header />

          <Routes>
            <Route path="/about">
              About
            </Route>
            <Route path="/users">
              Users
            </Route>
            <Route path="/">
            Home
            </Route>
          </Routes>

          <div style={{ height: '90vh' }} />
          <Footer />
        </S.BodyContainer>
      </ThemeProvider>
    </Router>
  );
};

export default App;
