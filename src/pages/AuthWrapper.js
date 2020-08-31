import React from 'react';
import styled from 'styled-components';

import { useAuth0 } from '@auth0/auth0-react';
import Loading from '../images/preloader.gif';

const AuthWrapper = ({ children }) => {
  const { isLoading, error } = useAuth0();
  if (isLoading) {
    return (
      <Wrapper>
        <img src={Loading} alt="spinner for loading" />
      </Wrapper>
    );
  }
  if (error) {
    return (
      <Wrapper>
        <h3>{error.message}</h3>
      </Wrapper>
    );
  }
  return <React.Fragment>{children}</React.Fragment>;
};

const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  justify-items: center;
  align-items: center;
  img {
    width: 5rem;
    height: 5rem;
  }
`;

export default AuthWrapper;
