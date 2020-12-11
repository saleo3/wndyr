import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const index = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        sessionStorage.getItem('user') === 'emir@wndyr.com' ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

export default index;
