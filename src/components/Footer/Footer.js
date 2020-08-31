import React from 'react';

import styled from 'styled-components';

const Footer = () => {
  return (
    <Wrapper>
      <h3>Make by: TDN, 31/8/2020</h3>
      <h3>Instructor: Youtube</h3>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  background-color: #fff;
  color: #333;
  padding: 1rem 2rem;
  margin-top: 2rem;
  text-align: center;
`

export default Footer;
