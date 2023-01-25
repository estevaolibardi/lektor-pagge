import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding-top: 2rem;
  padding-bottom: 4rem;

  h1 {
    text-align: center;
    font-size: 1.5rem;
    width: 325px;
    font-weight: 500;
    line-height: 1.8rem;
    font-family: 'Lexend', sans-serif;
    color: #06718f;
    margin-bottom: 2rem;
  }

  @media screen and (min-width: 1440px) {
    padding-top: 10rem;
    padding-bottom: 0;

    h1 {
      font-size: 2rem;
      width: 100%;
    }
  }
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;

  div {
    width: 315px;
    flex-wrap: wrap;
    display: flex;
    gap: 30px;
    justify-content: space-between;
  }

  @media screen and (min-width: 1440px) {
    div {
      width: 100%;
    }
  }
`;
