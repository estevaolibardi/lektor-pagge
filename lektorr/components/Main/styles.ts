import styled from 'styled-components';

export const Section = styled.main`
  height: 491px;

  div {
    height: 100%;
    left: 50%;
    object-fit: cover;
    object-position: center top;
    position: absolute;
    transform: translate(-50%);
    width: 100%;
    /* background-image: linear-gradient(
        to bottom,
        rgba(6, 64, 103, 0.85),
        rgba(10, 65, 102, 0.52)
      ),
      url('/wallpaper.jpg');
    background-size: 1150px;
    background-position: 53% 20%;
    zoom: 0.9; */
  }
`;

export const Title = styled.div`
  padding: 40px 24px 0 35px;
  color: #eff0e8;
  width: 100%;

  h1 {
    margin-bottom: 0;
  }

  h2 {
    font-family: 'Lexend', sans-serif;
    font-size: 1.8rem;
    line-height: 2.3rem;
    margin-bottom: 0.5rem;
    margin-top: 0;

    span {
      color: #6ab8ff;
    }
  }

  p {
    margin-top: 1.5rem;
    margin-bottom: 3.2rem;
    font-size: 1.3rem;
    font-weight: 600;
    font-family: 'Lexend', sans-serif;
    color: #eff0e8;
    width: 250px;
  }

  button {
    width: 220px;
    border-radius: 4px;
    font-size: 1.08rem;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    height: 45px;
    border: none;
    font-size: 1rem;
    background-color: #228ff4;
    color: #ffff;
    font-family: 'Lexend', sans-serif;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
