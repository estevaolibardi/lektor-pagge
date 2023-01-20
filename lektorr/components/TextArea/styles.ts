import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  textarea {
    width: 100%;
    background-color: aliceblue;
    border: 2px solid #e9eff5;
    resize: none;
    border-radius: 5px;
    font-family: 'Lexend', sans-serif;
    color: #4e8896;
    font-size: 0.9rem;
    text-indent: 10px;
    padding-top: 10px;

    ::placeholder {
      color: #8fbac4;
      font-size: 0.9rem;
      font-family: 'Lexend', sans-serif;
    }

    :focus {
      border: 2px solid #75cee3;
      outline: none;
    }
  }
  label {
    width: 100%;
    margin-bottom: 5px;
    display: flex;
    align-items: flex-start;
    width: 100%;
    justify-content: flex-start;
    margin-bottom: 5px;
    color: #00708d;
    font-weight: 500;
  }
`;

export const StyledError = styled.div`
  height: 20px;
  margin-top: 5px;
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
