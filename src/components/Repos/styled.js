import styled from 'styled-components';

const Wrapper = styled.div`
  display: grid;

  grid-template-columns: 1fr;
  gap: 2rem;
  @media (min-width: 992px) {
    grid-template-columns: 4fr 6fr;
  }
  & div {
    width: 100% !important;
  }
  & svg{
    width: 100% !important;
    border-radius: 15px;
  }
  & .fusioncharts-container{
    width: 100% !important;
  }
`;

export  { Wrapper };
