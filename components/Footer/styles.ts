import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  height: 600px;
  background-color: #064067;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  color: #fff;

  @media screen and (min-width: 1440px) {
    height: 575px;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  height: 200px;
  justify-content: center;
  align-items: flex-start;
  justify-content: flex-start;
  width: 190px;
  color: #fff;

  p {
    margin-bottom: 1rem;
  }

  @media screen and (min-width: 1440px) {
    margin-left: 5rem;
    height: 128px;

    h3 {
      margin: 0 0 1rem;
      text-transform: uppercase;
      font-weight: 400;
      font-size: 1rem;
    }

    p {
      font-size: 1rem;
      margin-bottom: 1rem;
      font-family: 'Montserrat', sans-serif;
    }
  }
`;

export const BoxColumn = styled.div`
  display: flex;
  width: 100%;

  @media screen and (min-width: 1440px) {
    flex-direction: row;
    margin-top: 1.5rem;
  }
`;

export const Copy = styled.div`
  width: 350px;
  margin-top: 2rem;

  > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;

    > div {
      display: flex;
      :first-child {
        gap: 1rem;
      }

      :last-child {
        text-align: center;

        width: 300px;
      }
    }
  }

  @media screen and (min-width: 1440px) {
    margin-top: 3rem;

    > div {
      height: 5rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      div {
        display: flex;

        :first-child {
          gap: 1rem;
        }
      }
    }
  }
`;

export const Info = styled.div`
  width: 350px;
  display: flex;
  align-items: flex-start;
  border-bottom: solid 1.5px #fff;
  justify-content: space-between;
  flex-direction: column;

  img {
    width: 59px;
    height: 64px;
  }

  > div {
    width: 100%;
    h1 {
      font-size: 2.2rem;
      font-weight: 600;
      letter-spacing: 0.4rem;
    }

    > p {
      font-size: 1.1rem;
      font-family: 'Montserrat', sans-serif;

      :last-child {
        font-size: 1rem;
        width: 100%;
        margin-top: 2rem;
        margin-bottom: 2rem;
      }
    }
  }

  @media screen and (min-width: 1440px) {
    width: 1400px;
    height: 200px;
    flex-direction: row;

    > div {
      width: 100%;
      h1 {
        font-size: 2.2rem;
        font-weight: 600;
        letter-spacing: 0.4rem;
      }

      > p {
        font-size: 1.1rem;
        font-family: 'Montserrat', sans-serif;

        :last-child {
          font-size: 1rem;
          width: 380px;
          margin-top: 2rem;
        }
      }
    }
  }
`;
