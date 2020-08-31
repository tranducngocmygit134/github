import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { black2, danger1 } from '../components/styles/styledVariable';
import { Button } from '../components/styles/styledComponent';

const Error = () => {
  return (
    <Wrapper>
      <h1>404</h1>
      <h5>sorry, page not found</h5>
      <Link to="/">
        <Button color={danger1}>back home</Button>
      </Link>
    </Wrapper>
  );
};

export default Error;

const Wrapper = styled.section`
  height: 100vh;
  text-transform: capitalize;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & h1 {
    font-size: 8rem;
  }
  & h5 {
    font-size: 2rem;
    color: ${black2};
  }
  & a {
    margin-top: 2rem;
  }
`;
