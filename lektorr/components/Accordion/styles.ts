import styled from 'styled-components';

type ActiveProp = {
  selected: any;
};

export const Box = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  flex-direction: column;
  padding-bottom: 1rem;
  align-items: center;
  background-color: #f3faff;
  position: relative;

  img {
    position: absolute;
    top: -12vh;
    height: auto;
  }

  @media screen and (min-width: 1440px) {
    padding-bottom: 0;

    img {
      position: absolute;
      top: -3vh;
      width: auto;
    }
  }
`;

export const Img = styled.div`
  display: none;
  justify-content: center;
  align-items: center;

  img {
    width: 200px;
    height: 200px;
    position: unset;
  }

  @media screen and (min-width: 1024px) {
    display: flex;
  }
`;

export const Cont = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
  gap: 50px;

  > div {
    display: flex;
    align-items: center;
    gap: 10rem;
    margin-top: 7rem;
    justify-content: center;
  }

  @media screen and (min-width: 1440px) {
    > div {
      width: 1400px;
      height: 420px;
      gap: 2rem;

      > div {
        height: 550px;
        width: 550px;
        align-items: flex-start;

        h1 {
          color: #06718f;
        }
      }
    }
  }
`;

export const BoxContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: 1.2rem;
    color: #06718f;
    margin-bottom: 2rem;
  }
`;

export const Container = styled.div`
  display: flex;
  width: 350px;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;

  h1 {
    font-size: 1.5rem;
    margin-bottom: 2rem;
    font-weight: 500;
    width: 300px;
    text-align: start;
    color: #06718f;
    font-family: 'Lexend', sans-serif;
  }

  > div {
    width: 320px;
  }

  @media screen and (min-width: 1024px) {
    /* width: 400px; */
    text-align: center;

    h1 {
      font-size: 1.4rem;
      width: auto;
    }
    /* div {
      width: 400px;
    } */
  }

  @media screen and (min-width: 1440px) {
    width: 100%;
    margin-top: 3rem;

    h1 {
      margin-top: 0rem;
      font-size: 1.8rem;
    }

    div {
      width: 100%;
    }
  }
`;

export const BoxAccordion = styled.div`
  margin-bottom: 5px;
  border-bottom: solid 1px #228ff4;
  width: 535px;
`;

export const Answer = styled.div<ActiveProp>`
  color: #1687a7;
  margin-bottom: 1.2rem;
  font-size: 1rem;
  padding-left: 0.5rem;
  text-align: justify;
  font-family: 'Lexend', sans-serif;
  display: flex;
  height: auto;
  max-height: ${({ selected }) => (selected ? '9999px' : '0')};
  overflow: hidden;
  transition: ${({ selected }) =>
    selected
      ? 'all 0.5s cubic-bezier(0, 1, 0, 1)'
      : 'all 0.5s cubic-bezier(1, 0, 1, 0)'};

  @media screen and (min-width: 1440px) {
    font-size: 1.2rem;
  }
`;

export const Question = styled.div`
  color: #06718f;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;

  span {
    cursor: pointer;
  }

  h2 {
    font-size: 1.1rem;
    width: 300px;
    font-weight: 500;
    font-family: 'Lexend', sans-serif;
    cursor: pointer;
  }

  @media screen and (min-width: 1024px) {
    h2 {
      width: 315px;
    }
  }

  @media screen and (min-width: 1440px) {
    width: 535px;
    h2 {
      width: 100%;
      font-size: 1.3rem;
      text-align: start;
    }
  }
`;
