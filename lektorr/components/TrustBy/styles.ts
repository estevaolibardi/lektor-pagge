import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding-top: 4rem;
  padding-bottom: 2rem;

  h1 {
    text-align: center;
    font-size: 1.5rem;
    width: 100%;
    font-weight: 500;
    line-height: 1.8rem;
    color: #06718f;
    margin-bottom: 1rem;
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
