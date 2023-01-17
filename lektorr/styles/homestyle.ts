import styled from 'styled-components';

export const Box = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f3faff;
  padding: 50px 0px;

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
      line-height: 1.3rem;
    }
  }

  @media screen and (min-width: 425px) {
    div {
      max-width: 290px;
      h1 {
        font-size: 1.3rem;
      }
      p {
        font-size: 1.1rem;
      }
    }
  }
`;

export const Order = styled.div`
  background-color: #ddefff;
  height: 20rem;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;

  img {
    position: relative;
    top: 10px;
    z-index: 10;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 60px 35px 0px 35px;

    h1 {
      font-size: 1.6rem;
      color: #06718f;
    }

    p {
      text-align: center;
      color: #1687a7;
      margin-top: 0.5rem;
      line-height: 1.3rem;
    }
  }
`;
