import React from 'react';
import { Navigate, Route } from 'react-router-dom';

interface Props {
  isAdminLoggedIn: boolean;
  route: string;
  element: JSX.Element;
}

const ProtectedRoute = (props: Props): JSX.Element => {
  const { isAdminLoggedIn, route, element } = props;

  if (!isAdminLoggedIn) {
    return <Navigate to="/admin/login" />;
  }

  return (
    <Route path={route} element={element} />
  );
};

export default ProtectedRoute;
