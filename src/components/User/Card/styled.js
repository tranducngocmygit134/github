import styled from 'styled-components';

const Wrapper = styled.article`
  padding: 0 2rem;
  border-radius: 15px;
  background-color: #fff;

  display: grid;
  grid-gap: 0.5rem;

  @media (max-width: 992px){
    padding: 1rem 2rem;
  }

  & header {
    display: grid;
    grid-template-columns: auto 1fr auto;
    align-items: center;
    & img {
      width: 4rem;
      height: 4rem;
      border-radius: 50%;
      margin-right: 1rem;
      margin-bottom: 10px;
    }
    @media (max-width: 576px) {
      grid-template-columns: 1fr 3fr;
      grid-template-row: 1fr;
      & a {
        justify-self: start;
      }
      align-items: center;
    }
  }
  & > div {
    & .icon {
      color: green;
      font-size: 1.7rem;
      margin-right: 10px;
    }
  }
`;

export { Wrapper };
