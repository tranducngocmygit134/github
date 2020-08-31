import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 1rem auto 2rem auto;
  display: grid;
  grid-template-columns: 1fr 400px;
  grid-gap: 2rem;

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
  @media (max-width: 576px) {
    grid-gap: 0;
  }
  & form {
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    & div {
      flex-grow: 1;
      display: flex;
      position: relative;
      & input {
        width: 100%;
        font-size: 1.5rem;
        text-align: center;
        outline: none;
        border-radius: 10px;
        border: 2px solid green;
        margin-right: 1rem;
        @media (max-width: 576px) {
          font-size: 1rem;
          padding-left: 1.4rem;
        }
        @media (max-width: 320px) {
          font-size: 0.8rem;
          padding-left: 0;
        }
      }
      }
      & .icon {
        font-size: 2rem;
        color: green;

        position: absolute;
        top: 50%;
        left: 2.2rem;
        transform: translate(-50%, -50%);
        @media (max-width: 576px) {
          font-size: 1.5rem;
          left: 1rem;
        }
        @media (max-width: 320px) {
          display: none;
        }
      }
    }
    & button {
      @media (max-width: 576px) {
        font-size: 1rem;
      }
      @media (max-width: 320px) {
        font-size: 1rem;
        padding: 5px 3px;
      }
    }
  }
  & h3 {
    font-size: 2rem;
    font-weight: 400;
    text-transform: capitalize;
    letter-spacing: 4px;
    color: #333;
    @media (max-width: 576px) {
      font-size: 1rem;
      padding: 1rem 0 0 2rem;
      letter-spacing: 2px;
    }
  }
`;

export default Wrapper;
