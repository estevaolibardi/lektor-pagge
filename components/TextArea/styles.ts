import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  textarea {
    width: 100%;
    background-color: #fefefe;
    border: 2px solid #e9eff5;
    resize: none;
    border-radius: 5px;
    font-family: 'Lexend', sans-serif;
    color: #4e8896;
    font-size: 0.9rem;
    padding-left: 1rem;
    padding-right: 1rem;
    padding-top: 10px;

    ::placeholder {
      color: #8fbac4;
      font-size: 0.9rem;
      font-family: 'Lexend', sans-serif;
    }

    :hover {
      border: 2px solid #75cee3;
      transition: ease 0.5s;
    }

    :focus {
      border: 2px solid #75cee3;
      outline: none;
      background-color: #daedff;
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
    font-family: 'Lexend', sans-serif;
    font-size: 1.1rem;
  }

  @media (min-width: 1024px) {
    flex-direction: column;

    label {
      font-size: 1rem;
    }
  }

  @media (min-width: 1440px) {
    flex-direction: column;
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
