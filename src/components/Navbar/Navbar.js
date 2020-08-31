import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

import Wrapper from './styled';

const Navbar = () => {
  const { isAuthenticated, logout, user } = useAuth0();
  const isUser = user && isAuthenticated;

  return (
    <Wrapper>
      {isUser && user.picture && <img src={user.picture} alt={user.name} />}
      {isUser && (user.name || user.nickname) && (
        <h4>Welcome, {(user.name || user.nickname).toUpperCase()}</h4>
      )}
      {isUser && (
        <button
          onClick={() => {
            logout({ returnTo: window.location.origin });
          }}
        >
          logout
        </button>
      )}{' '}
    </Wrapper>
  );
};

export default Navbar;
