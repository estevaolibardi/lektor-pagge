import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    text-align: center;
    font-size: 1.5rem;
    font-weight: 500;
    font-family: 'Lexend', sans-serif;
    color: #06718f;
  }

  img {
    max-width: 100%;
    height: 18.7rem;
    width: 18.7rem;
  }
`;

export const FormContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FormStyle = styled.form`
  width: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 2rem;
  padding-bottom: 2rem;
`;

export const BtnBox = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;

  button {
    background-color: #228ff4;
    color: white;
    height: 40px;
    width: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-style: none;
    border-radius: 5px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    font-size: 0.9rem;
    letter-spacing: 0.03rem;
    box-shadow: rgb(0 0 0 / 24%) 0px 3px 8px;
  }
`;
