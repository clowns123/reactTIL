import React from 'react';
import { Redirect } from 'react-router-dom';

export default function withAuth(Component, hasToken) {
  const displayName = `withAuth(${Component.displayName})`;

  const C = (props) => {
    const token = sessionStorage.getItem('token');
    if (token === null && hasToken) {
      return <Redirect to="/signin" />;
    } else if (token !== null && !hasToken) {
      return <Redirect to="/" />;
    }
    return <Component {...props} />;
  };

  C.displayName = displayName;

  return C;
}
