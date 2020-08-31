import styled from 'styled-components';

const Wrapper = styled.nav`
  background: #fff;

  padding: 1rem 2rem;
  margin-bottom: 3rem;

  display: flex;
  justify-content: space-around;
  align-items: center;
  @media (max-width: 768px) {
    padding: 1rem;
    margin-bottom: 1.5rem;
  }
  & button {
    background-color: transparent;
    font-size: 1.3rem;
    font-weight: bold;
    outline: none;
    border: none;
    text-transform: capitalize;

    cursor: pointer;
  }
  & img {
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
  }
  & h4 {
    @media (max-width: 500px) {
      display: none;
    }
  }
`;
export default Wrapper;
