import styled from 'styled-components';

const Wrapper = styled.section`
  height: 250px;
  overflow: scroll;
  background-color: #fff;
  border-radius: 15px;

  display: flex;
  flex-direction: column;

  & > div {
    padding: 1rem 2rem;
    display: flex;
    & img {
      width: 2.5rem;
      height: 2.5rem;
      border-radius: 50%;
    }
    & > div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-left: 1rem;
      & h5 {
        font-size: 1rem;
      }
      & a {
        text-decoration: none;
      }
    }
  }
`;

export { Wrapper };
