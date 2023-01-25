import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 0;

  label {
    display: flex;
    align-items: flex-start;
    width: 100%;
    justify-content: flex-start;
    margin-bottom: 5px;
    color: #00708d;
    font-weight: 500;
    font-family: 'Lexend', sans-serif;
    font-size: 1.1rem;
  }

  @media (min-width: 800px) {
  }

  @media (min-width: 1440px) {
    width: 160px;
    height: 100px;
  }
`;

export const StyledInput = styled.input`
  width: 100%;
  height: 80px;
  background-color: aliceblue;
  border: 2px solid #e9eff5;
  border-radius: 3px;
  text-indent: 10px;
  font-size: 1rem;
  border-radius: 5px;
  font-family: 'Lexend', sans-serif;
  color: #4e8896;

  @media (min-width: 800px) {
    height: 48px;
    box-sizing: border-box;
    font-size: 16.2426px;
  }

  :focus {
    border: 2px solid #75cee3;
    outline: none;
  }

  ::placeholder {
    color: #8fbac4;
    font-size: 0.9rem;
    font-family: 'Lexend', sans-serif;
  }
`;

export const StyledError = styled.div`
  height: 20px;
  margin-top: 10px;
  margin-bottom: 10px;
  width: 100%;
  display: flex;
  align-items: center;

  > label {
    font-size: 15px;
  }
  > span {
    font-size: 12px;
    color: #ff577f;
    display: flex;
    align-items: flex-start;
    width: 100%;
    justify-content: flex-start;
  }
`;
