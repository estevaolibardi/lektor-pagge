import styled from 'styled-components';

export const Box = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f3faff;
  font-family: 'Lexend', sans-serif;
  padding-top: 2rem;
  text-align: center;

  > div {
    max-width: 350px;
  }

  h1 {
    font-size: 1.2rem;
    font-weight: 500;
  }

  p {
    font-size: 1.05rem;
    font-weight: 400;
  }

  @media screen and (min-width: 415px) {
    > div {
      max-width: 295px;
    }
  }

  @media screen and (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-evenly;
    height: 20rem;
    margin-top: 0;

    > div {
      max-width: none;
      width: 100%;
      display: flex;
      justify-content: space-evenly;
    }

    svg {
      width: 35px;
    }

    h1 {
      font-size: 1rem;
      width: 100%;
      margin: 1rem 0;
    }
    p {
      font-size: 0.9rem;
      width: 250px;
      height: 65px;
    }
  }

  @media screen and (min-width: 1440px) {
    height: 28rem;
    padding-top: 0;

    > div {
      max-width: none;
      width: 100%;
      display: flex;
      justify-content: space-evenly;
    }
  }
`;

export const First = styled.div`
  max-width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 2rem;
  height: 160px;

  svg {
    width: 35px;
  }

  h1 {
    color: #06718f;
    width: 12rem;
  }

  p {
    color: #1687a7;
  }

  @media screen and (min-width: 1024px) {
    max-width: 250px;

    svg {
      width: 45px;
    }

    h1 {
      font-size: 1rem;
      width: 70%;
      margin: 1rem 0;
      text-align: center;
    }
    p {
      font-size: 0.9rem;
      width: 100%;
      height: 65px;
    }
  }

  @media screen and (min-width: 1440px) {
    text-align: center;

    svg {
      width: 45px;
    }

    h1 {
      font-size: 1.5rem;
      width: 18rem;
      margin: 1rem 0;
    }
    p {
      font-size: 1.2rem;
      width: 20rem;
      height: 65px;
    }
  }
`;
export const Second = styled.div`
  max-width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 1.5rem;
  text-align: center;
  height: 180px;

  svg {
    width: 35px;
  }

  h1 {
    color: #06718f;
    width: 12rem;
  }
  p {
    color: #1687a7;
    width: 265px;
  }

  @media screen and (min-width: 1024px) {
    max-width: 250px;

    svg {
      width: 45px;
    }

    h1 {
      font-size: 1rem;
      width: 70%;
      margin: 1rem 0;
      text-align: center;
    }
    p {
      font-size: 0.9rem;
      width: 100%;
      height: 65px;
    }
  }

  @media screen and (min-width: 1440px) {
    svg {
      width: 45px;
    }

    h1 {
      font-size: 1.5rem;
      width: 15rem;
      margin: 1rem 0;
      text-align: center;
    }
    p {
      font-size: 1.1rem;
      width: 24rem;
      height: 65px;
    }
  }
`;

export const Third = styled.div`
  max-width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 2rem;
  text-align: center;
  height: 165px;

  svg {
    width: 35px;
  }

  h1 {
    color: #06718f;
    width: 14rem;
  }
  p {
    color: #1687a7;
  }

  @media screen and (min-width: 1024px) {
    max-width: 250px;

    svg {
      width: 40px;
    }

    h1 {
      font-size: 1rem;
      width: 90%;
      text-align: center;
      margin: 1rem 0;
    }
    p {
      font-size: 0.9rem;
      width: 100%;
      height: 65px;
    }
  }

  @media screen and (min-width: 1440px) {
    svg {
      width: 45px;
    }

    h1 {
      font-size: 1.5rem;
      width: 20rem;
      text-align: center;
      margin: 1rem 0;
    }
    p {
      font-size: 1.1rem;
      width: 20rem;
      height: 65px;
    }
  }
`;

export const Order = styled.div`
  background-color: #ddefff;
  height: 21rem;
  padding-top: 3rem;
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
      font-size: 1.3rem;
      color: #06718f;
      font-weight: 500;
      margin-bottom: 1rem;
    }

    p {
      text-align: center;
      color: #1687a7;
      margin-top: 0.5rem;
      line-height: 1.3rem;
      font-size: 1.05rem;
      font-weight: 400;
    }
  }

  @media screen and (min-width: 1024px) {
    height: 18.5rem;
    padding-top: 5rem;

    div {
      width: 565px;

      h1 {
        font-size: 1.4rem;
        font-weight: 400;
        padding-bottom: 1rem;
      }
      p {
        font-size: 1.05rem;
        font-weight: 400;
      }
    }
  }

  @media screen and (min-width: 1440px) {
    height: 18rem;

    div {
      width: 565px;

      h1 {
        font-size: 2rem;
        font-weight: 400;
        padding-bottom: 1rem;
      }
      p {
        font-weight: 400;
        font-size: 1.25rem;
        width: 42rem;
        text-align: center;
        line-height: 1.5rem;
      }
    }
  }
`;
