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
    margin-top: 2rem;
    margin-bottom: 1.5rem;
    font-family: 'Lexend', sans-serif;

    h1 {
      font-size: 1.2rem;
      text-align: center;
      width: 250px;
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

  @media screen and (min-width: 415px) {
    div {
      max-width: 290px;
      h1 {
        font-size: 1.2rem;
        font-weight: 500;
      }
      p {
        font-size: 1.05rem;
        font-weight: 400;
      }
    }
  }
`;

export const Order = styled.div`
  background-color: #ddefff;
  height: 19rem;
  padding-top: 2rem;
  padding-bottom: 2rem;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;

  img {
    position: relative;
    top: 4px;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 320px;
    white-space: break-spaces;

    h1 {
      font-size: 1.6rem;
      color: #06718f;
      font-family: 'Lexend', sans-serif;
    }

    p {
      text-align: center;
      color: #1687a7;
      margin-top: 0.5rem;
      line-height: 1.3rem;
      font-size: 1.07rem;
      font-family: 'Lexend', sans-serif;
    }
  }

  @media screen and (min-width: 415px) {
    div {
      h1 {
        font-size: 1.4rem;
        font-weight: 400;
      }
      p {
        font-size: 1.05rem;
        font-weight: 400;
      }
    }
  }
`;
