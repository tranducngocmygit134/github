import styled from 'styled-components';

const Wrapper = styled.section`
  margin: 2rem 0;

  display: grid;
  grid-gap: 2rem ;
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export { Wrapper };
