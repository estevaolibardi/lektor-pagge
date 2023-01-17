import styled from 'styled-components';

export const Box = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f3faff;

  div {
    max-width: 260px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 2.5rem;
    margin-bottom: 1.5rem;

    h1 {
      font-size: 1.2rem;
      text-align: center;
      width: 200px;
      color: #06718f;
      font-weight: 500;
    }

    p {
      text-align: center;
      color: #1687a7;
      margin-top: 0.5rem;
      line-height: 1.4rem;
    }
  }
`;
