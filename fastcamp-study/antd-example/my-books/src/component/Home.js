import React from 'react';
import withAuth from './withAuth';

function Home(props) {
  //   const token = sessionStorage.getItem('token');
  //   console.log(token);
  //   if (token === null) {
  //     return <Redirect to="/signin" />;
  //   }
  return (
    <div>
      <h1>HOME</h1>
    </div>
  );
}

export default withAuth(Home, true);
