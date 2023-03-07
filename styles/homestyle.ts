import styled from 'styled-components';

export const Box = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  font-family: 'Lexend', sans-serif;
  padding-top: 5rem;
  padding-bottom: 4rem;
  text-align: center;

  > div {
    max-width: 295px;
    height: 620px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  h1 {
    font-size: 1.3rem;
    font-weight: 500;
  }

  p {
    font-size: 1.1rem;
    font-weight: 400;
  }

  @media screen and (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-evenly;
    margin-top: 0;

    > div {
      max-width: none;
      width: 100%;
      height: 200px;
      display: flex;
      justify-content: space-evenly;
      flex-direction: row;
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

  @media screen and (min-width: 1366px) {
    flex-direction: row;
    justify-content: space-evenly;
    margin-top: 0;
    padding-top: 7rem;

    > div {
      max-width: none;
      width: 100%;
      height: 200px;
      display: flex;
      justify-content: space-evenly;
      flex-direction: row;
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
    height: 22rem;
    padding-top: 0;
    padding-bottom: 0;
    margin-bottom: 6rem;

    > div {
      max-width: none;
      width: 1400px;
      height: 100%;
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
    }
  }
`;

export const First = styled.div`
  max-width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 10.5rem;

  svg {
    width: 35px;
  }

  h1 {
    color: #06718f;
    width: 13rem;
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
    height: 12rem;

    svg {
      width: 45px;
    }

    h1 {
      font-size: 1.25rem;
      width: 15rem;
      margin: 1rem 0;
    }
    p {
      font-size: 1.1rem;
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
  text-align: center;
  height: 12rem;

  svg {
    width: 35px;
  }

  h1 {
    color: #06718f;
    width: 12rem;
  }
  p {
    color: #1687a7;
    width: 280px;
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

  @media screen and (min-width: 1366px) {
    max-width: 250px;
    height: 10rem;

    svg {
      width: 35px;
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
    height: 12rem;

    svg {
      width: 40px;
    }

    h1 {
      font-size: 1.25rem;
      width: 14rem;
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
  text-align: center;
  height: 10.5rem;

  svg {
    width: 35px;
  }

  h1 {
    color: #06718f;
    width: 16rem;
  }
  p {
    color: #1687a7;
    width: 310px;
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
    height: 12rem;

    svg {
      width: 45px;
    }

    h1 {
      font-size: 1.25rem;
      width: 18rem;
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
  width: 100%;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;

  img {
    position: relative;
    top: 4px;
  }

  > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: -1rem;
    white-space: break-spaces;
    background-color: #064067;

    h1 {
      font-size: 1.5rem;
      color: #fff;
      font-weight: 500;
      margin-bottom: 1rem;
      text-align: center;
    }

    h2 {
      color: #fff;
      font-weight: 400;
      text-align: center;
      font-size: 1.2rem;
    }

    p {
      text-align: center;
      color: #1687a7;
      margin-top: 0.5rem;
      line-height: 1.3rem;
      font-size: 1.1rem;
      font-weight: 400;
    }
  }

  @media screen and (min-width: 1024px) {
    > div {
      /* width: 565px; */
      margin-top: -7rem;
      background-color: #00000000;

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

  @media screen and (min-width: 1024px) {
    > div {
      /* width: 565px; */
      margin-top: -10rem;
      background-color: #00000000;

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

  @media screen and (min-width: 1440px) {
    svg {
      position: absolute;
      z-index: -1;
    }

    > div {
      width: 100%;
      justify-content: space-between;
      margin-top: 12rem;

      h1 {
        font-size: 2rem;
        font-weight: 400;
      }

      h2 {
        font-size: 1.4rem;
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

export const Main = styled.div`
  background-color: #064067;
  margin-top: -1rem;
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const MainTech = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  flex-direction: column-reverse;
  align-items: center;
  padding-bottom: 3rem;

  > div {
    width: 320px;
    height: 885px;
    justify-content: space-between;
    display: flex;
    flex-wrap: wrap;
    > div {
      width: 100%;

      h3 {
        color: #ffff;
        font-size: 1.3rem;
        font-family: 'Lexend', sans-serif;
        font-weight: 500;
        text-align: center;
        margin-bottom: 10px;
      }

      p {
        font-size: 18px;
        width: 100%;
        color: #ffff;
        text-align: center;
        font-family: 'Montserrat', sans-serif;
      }
    }
  }

  img {
    width: 250px;
    height: 250px;
    margin-top: 2rem;
    margin-bottom: 2rem;
  }

  @media screen and (min-width: 1024px) {
    width: 1400px;
    flex-direction: row;
    align-items: flex-start;
    gap: 2rem;

    > div {
      height: 500px;
      width: 590px;
      margin-top: 4rem;

      > div {
        width: 270px;

        h3 {
          text-align: left;
          text-decoration: underline #3ccefe;
          text-underline-offset: 7px;
          margin-bottom: 1rem;
        }

        p {
          font-size: 1rem;
          text-align: left;
          white-space: initial;
        }
      }
    }

    img {
      width: 250px;
      height: 229px;
      margin: none;
    }
  }

  @media screen and (min-width: 1366px) {
    width: 1400px;
    flex-direction: row;
    align-items: flex-start;
    gap: 4rem;

    > div {
      height: 500px;
      width: 590px;
      margin-top: 4rem;

      > div {
        width: 270px;

        h3 {
          font-size: 1.2rem;
        }

        p {
          font-size: 1rem;
          text-align: left;
          white-space: initial;
        }
      }
    }

    img {
      width: 250px;
      height: 229px;
      margin: none;
    }
  }

  @media screen and (min-width: 1440px) {
    width: 1400px;
    flex-direction: row;
    align-items: flex-start;
    gap: 8rem;

    > div {
      height: 500px;
      width: 710px;
      margin-top: 4rem;

      > div {
        width: 310px;

        h3 {
          text-align: left;
          text-decoration: underline #3ccefe;
          text-underline-offset: 7px;
          margin-bottom: 1rem;
        }

        p {
          font-size: 1.125rem;
          text-align: left;
          white-space: initial;
        }
      }
    }

    img {
      width: 350px;
      height: 296px;
      margin: none;
    }
  }
`;
