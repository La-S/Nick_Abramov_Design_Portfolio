import React from 'react';
import { Navigate } from 'react-router-dom';
import LandingPage from './pages/Landing/Landing';
import ProjectPage from './pages/Project';
import AboutPage from './pages/About';
import FaqPage from './pages/Faq';
import ContactPage from './pages/Contact';
import AdminLoginPage from './pages/AdminLogin';
import AdminDashboardPage from './pages/AdminDashboard';

export type RouteFixture = {
  path: string;
  element: JSX.Element;
};

export const MAIN_ROUTES: Array<RouteFixture> = [
  {
    path: '/',
    element: <LandingPage />,
  },
  {
    path: '/home',
    element: <Navigate to="/" />,
  },
  {
    path: '/projects',
    element: <Navigate to="/" />,
  },
  {
    path: '/projects/:projectId',
    element: <ProjectPage />,
  },
  {
    path: '/about',
    element: <AboutPage />,
  },
  {
    path: '/questions',
    element: <FaqPage />,
  },
  {
    path: '/contact',
    element: <ContactPage />,
  },
];

export const ADMIN_ROUTES: Array<RouteFixture> = [
  {
    path: '/admin/login',
    element: <AdminLoginPage />,
  },
  {
    path: '/admin/dashboard',
    element: <AdminDashboardPage />,
  },
  {
    path: '/admin',
    element: <Navigate to="/admin/dashboard" />,
  },
];
