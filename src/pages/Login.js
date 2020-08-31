import React from 'react';
import styled from 'styled-components';
import { useAuth0 } from '@auth0/auth0-react';

import logo from '../images/login-img.svg';
import { Button } from '../components/styles/styledComponent';

const Login = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <Wrapper>
      <div>
        <img src={logo} alt="github user" />
        <h1>github user</h1>
        <Button color="green" width="100%" onClick={loginWithRedirect}>
          login / sign up
        </Button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;

  padding: 0 20px;
  & div {
    max-width: 500px;
    text-align: center;
    text-transform: capitalize;
    & img {
      width: 100%;
    }
    & > * {
      margin-top: 2rem;
    }
  }
`;

export default Login;
