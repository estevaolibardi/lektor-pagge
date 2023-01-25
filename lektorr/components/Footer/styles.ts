import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 245px;
  background-image: linear-gradient(
      to bottom,
      rgba(6, 64, 103, 0.85),
      rgba(10, 65, 102, 0.65)
    ),
    url('/navy.png');
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: 73% 30%;

  @media screen and (min-width: 1440px) {
    height: 500px;
  }
`;
