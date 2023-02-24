import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding-bottom: 2rem;
  padding-top: 2rem;

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
    width: 390px;
    height: 200px;
    flex-wrap: wrap;
    display: flex;
    justify-content: space-between;
    align-items: center;

    img {
      :first-child {
        height: 40px;
        width: 175px;
        margin-left: 1rem;
      }

      :nth-child(2) {
        width: 170px;
        height: 40px;
      }

      :nth-child(3) {
        width: 150px;
        height: 30px;
        margin-left: 2rem;
      }

      :nth-child(4) {
        width: 170px;
        height: 45px;
      }

      :last-child {
        width: 120px;
        height: 40px;
      }
    }
  }

  @media screen and (min-width: 1440px) {
    width: 100%;
    div {
      width: 100%;
      gap: 30px;

      img {
        :first-child {
          height: 50px;
          width: 210px;
          margin-left: 0;
        }

        :nth-child(2) {
          width: 180px;
          height: 70px;
        }

        :nth-child(3) {
          width: 180px;
          height: 60px;
          margin-left: 0;
        }

        :nth-child(4) {
          width: 178px;
          height: 55px;
        }

        :last-child {
          width: 150px;
          height: 70px;
        }
      }
    }
  }
`;
