import React from 'react';
import { Navigate } from 'react-router-dom';
import LandingPage from './pages/Landing/Landing';
import ProjectPage from './pages/Project';
import AboutPage from './pages/About';
import FAQsPage from './pages/FAQs';
import ContactPage from './pages/Contact';
import AdminLoginPage from './pages/AdminLogin';
import AdminProjectsPage from './pages/AdminProjects';
import AdminFAQsPage from './pages/AdminFAQs';
import PhotoBlogProjectsPage from './pages/PhotoBlogProjects';

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
    path: '/projects/:projectName',
    element: <ProjectPage />,
  },
  {
    path: '/photo-blog',
    element: <PhotoBlogProjectsPage />,
  },
  {
    path: '/about',
    element: <AboutPage />,
  },
  {
    path: '/questions',
    element: <FAQsPage />,
  },
  {
    path: '/contact',
    element: <ContactPage />,
  },
];

export const ADMIN_LOGIN_ROUTE: RouteFixture = {
  path: '/admin/login',
  element: <AdminLoginPage />,
};
export const ADMIN_ROUTES: Array<RouteFixture> = [
  ADMIN_LOGIN_ROUTE,
  {
    path: '/admin/projects',
    element: <AdminProjectsPage />,
  },
  {
    path: '/admin',
    element: <Navigate to="/admin/projects" />,
  },
  {
    path: '/admin/faqs',
    element: <AdminFAQsPage />,
  }
];
