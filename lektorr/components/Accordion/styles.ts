import styled from 'styled-components';

type ActiveProp = {
  selected: any;
};

export const Box = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: #f3faff;
  padding-bottom: 2rem;
`;

export const Img = styled.div`
  width: 400px;
  height: 400px;

  @media screen and (min-width: 415px) {
    display: none;
  }
`;

export const Container = styled.div`
  display: flex;
  width: 350px;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    font-size: 1.4rem;
    margin-top: 4rem;
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
`;

export const BoxAccordion = styled.div`
  margin-bottom: 5px;
  border-bottom: solid 1px #228ff4;
`;

export const Answer = styled.div<ActiveProp>`
  color: #1687a7;
  margin-bottom: 1.2rem;
  padding-left: 0.5rem;
  text-align: justify;
  display: flex;
  height: auto;
  max-height: ${({ selected }) => (selected ? '9999px' : '0')};
  overflow: hidden;
  transition: ${({ selected }) =>
    selected
      ? 'all 0.5s cubic-bezier(0, 1, 0, 1)'
      : 'all 0.5s cubic-bezier(1, 0, 1, 0)'};
`;

export const Question = styled.div`
  color: #06718f;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;

  h2 {
    font-size: 1rem;
    width: 300px;
    font-weight: 500;
    font-family: 'Lexend', sans-serif;
  }
`;
