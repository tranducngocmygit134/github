import styled from 'styled-components';

const Wrapper = styled.section`

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 0.8rem 2rem;

  .item {
    background: #fff;
    border-radius: 15px;
    padding: 1rem 0 1rem 2rem;

    display: grid;
    grid-template-columns: auto 1fr;
    grid-gap: 2rem;

    & span {
      font-size: 2rem;
      width: 3rem;
      height: 3rem;
      border-radius: 50%;

      display: flex;
      justify-content: center;
      align-items: center;
    }
    & h3 {
      font-size: 1.5rem;
    }
    & p {
      text-transform: capitalize;
    }
  }

  & .pink {
    background: #ffe0f0;
    color: #da4a91;
  }
  & .green {
    background: #55efc4;
    color: #00b894;
  }
  & .purple {
    background: #e6e6ff;
    color: #5d55fa;
  }
  & .yellow {
    background: #fffbea;
    color: #f0b429;
  }
`;

export { Wrapper };
