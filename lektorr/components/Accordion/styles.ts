import styled from 'styled-components';

type ActiveProp = {
  selected: any;
};

type ActiveProps = {
  selected: any;
};

export const Box = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  flex-direction: column;
  padding-bottom: 1rem;
  align-items: center;
  background-color: #fefefe;
  /* position: relative; */

  img {
    /* position: absolute; */
    top: -12vh;
    height: auto;
  }

  @media screen and (min-width: 1440px) {
    padding-bottom: 0;

    img {
      /* position: absolute; */
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
    width: 400px;
    border-radius: 20px;
    /* opacity: 0.85; */
    position: unset;
  }

  @media screen and (min-width: 1024px) {
    display: flex;
  }

  @media screen and (min-width: 1440px) {
    img {
      margin-top: 2rem;
    }
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
    margin-top: 5rem;
    justify-content: center;
  }

  @media screen and (min-width: 1440px) {
    > div {
      width: 1400px;
      height: 500px;
      align-items: flex-start;
      margin-top: 6rem;
      gap: 5rem;
      justify-content: flex-start;

      > div {
        width: 550px;
        h1 {
          color: #0050a5;
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
  height: 530px;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;

  h1 {
    font-size: 1.5rem;
    margin-bottom: 2rem;
    font-weight: 500;
    width: 350px;
    text-align: start;
    color: #0067a4;
    font-family: 'Lexend', sans-serif;
  }

  > div {
    width: 350px;
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
    height: 500px;

    h1 {
      margin-top: 0rem;
      font-size: 1.8rem;
      width: 100%;
    }

    div {
      width: 100%;
    }
  }
`;

export const BoxAccordion = styled.div`
  margin-bottom: 5px;
  border-bottom: solid 2px #b9cde8;
  width: 535px;
`;

export const Answer = styled.div<ActiveProp>`
  color: #0050a5;
  margin-bottom: 1.2rem;
  font-size: 1.1rem;
  padding-left: 0.5rem;
  font-family: 'Montserrat', sans-serif;
  display: flex;
  text-align: justify;
  height: auto;
  max-height: ${({ selected }) => (selected ? '9999px' : '0')};
  overflow: hidden;
  transition: ${({ selected }) =>
    selected
      ? 'all 0.5s cubic-bezier(0, 1, 0, 1)'
      : 'all 0.5s cubic-bezier(1, 0, 1, 0)'};

  @media screen and (min-width: 1440px) {
    font-size: 1.1rem;
    text-align: left;
  }
`;

export const Question = styled.div<ActiveProps>`
  color: #0050a5;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;

  span {
    cursor: pointer;
  }

  h2 {
    font-size: 1.2rem;
    width: 300px;
    /* font-weight: 500; */
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
