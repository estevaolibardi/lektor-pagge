import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

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
  padding-top: 2rem;

  @media screen and (min-width: 1440px) {
    padding-top: 6rem;
    flex-direction: row;
    height: 578px;
    align-items: flex-start;
    gap: 4rem;

    img {
      height: auto;
      width: auto;
    }
  }
`;

export const FormStyle = styled.form`
  width: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 2rem;
  padding-bottom: 4rem;

  h1 {
    text-align: center;
    font-size: 1.4rem;
    font-weight: 500;
    font-family: 'Lexend', sans-serif;
    color: #06718f;
    margin-bottom: 2rem;
  }

  > div {
    width: 300px;
  }

  @media screen and (min-width: 1440px) {
    width: 550px;
    height: 482px;
    justify-content: flex-end;
    padding-bottom: 0;

    > h1 {
      font-size: 2rem;
      padding-bottom: 2rem;
    }

    > div {
      display: flex;
      flex-wrap: nowrap;
      width: 100%;
      justify-content: space-between;
    }
  }
`;

export const BtnBox = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;

  button {
    background-color: #228ff4;
    color: white;
    height: 40px;
    cursor: pointer;
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

    :hover {
      background-color: #009688;
      transition: ease 0.4s;
    }
  }
`;
