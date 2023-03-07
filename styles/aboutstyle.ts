import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 550px;
  align-items: center;
  background-color: #064067;

  svg {
    position: absolute;
    top: 44rem;
    width: 100%;
  }

  @media screen and (min-width: 1024px) {
    background-size: 100%;
    background-position: 53% 50%;

    svg {
      top: 36rem;
    }
  }

  @media screen and (min-width: 1366px) {
    height: 500px;
  }

  @media screen and (min-width: 1440px) {
    height: 530px;
    background-size: 100%;
    background-position: 0% 58%;
    background-size: 1900px;
  }
`;

type ActiveProp = {
  actived: boolean;
  handleOpenNav: () => void;
  handleScrollContact: () => void;
  open: boolean;
};

type ContainerProps = {
  open: boolean;
  handleOpenNav: () => void;
};

export const NavBox = styled.nav<ActiveProp>`
  background: ${({ actived }) => (actived ? '#00708d' : 'transparent')};
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: absolute;
  top: 0;
  z-index: 10;

  .active {
    background-color: red;
  }

  @media screen and (max-width: 1024px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1;
  width: 100%;
  padding: 0 35px;

  @media screen and (min-width: 1024px) {
    padding: 0;
    max-width: 888px;
  }

  @media screen and (min-width: 1200px) {
    max-width: 965px;
  }

  @media screen and (min-width: 1300px) {
    max-width: max(965px, 1025px);
  }

  /* @media screen and (min-width: 1440px) {
    max-width: max(1025px, 1200px);
  } */

  @media screen and (min-width: 1600px) {
    max-width: 1400px;
  }
`;

export const LeftBox = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;

  ul {
    display: none;
    li {
      cursor: pointer;
      :hover {
        color: #00c564;
      }
    }
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;

    img,
    h1 {
      cursor: pointer;
    }
  }

  img {
    width: 1.5rem;
    height: 1.4rem;
  }

  h1 {
    font-size: 1.8rem;
    color: #ffff;
  }

  @media screen and (min-width: 1024px) {
    width: 100%;
    justify-content: space-between;

    ul {
      display: flex;
      list-style: none;
      gap: 2rem;
      font-family: 'Lexend', sans-serif;
      color: #ffff;
      font-size: 1.2rem;
    }
  }

  @media screen and (min-width: 1024px) {
    ul {
      font-size: 1.3rem;
      gap: 4rem;
    }
  }
`;

export const Aside = styled.div<ContainerProps>`
  position: fixed;
  top: 0px;
  right: 0px;
  width: 100%;
  max-width: 27.3rem;
  background-color: #064067;
  z-index: 100;
  opacity: 1;
  transform-origin: 0% 0%;
  justify-content: center;
  transform: ${({ open }) =>
    open ? 'translate3d(0px, 0px, 0px)' : 'translate3d(100%,0px,0px)'};
  transition: transform 0.5s ease 0s;
  will-change: transform;

  > div {
    display: flex;
    padding: 5rem 2rem 3rem;
    font-size: 1.6rem;
    align-items: flex-start;
    line-height: 1.75rem;
    width: 100%;
    font-family: 'Inter', sans-serif;
    font-weight: 500;
    color: rgb(239 240 232);

    ul {
      min-height: 100vh;
      li {
        padding-bottom: 0.75rem;
        list-style: none;
      }
    }
  }

  @media screen and (min-width: 1024px) {
    display: none;
  }
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 300px;
  margin-top: 5rem;
  width: 1400px;
  color: #ecf1f9;

  @media screen and (min-width: 1366px) {
    width: 1025px;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 7rem;

    > div {
      width: 600px;
      height: 270px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      h1 {
        font-size: 1.9rem;
        span {
          --color: #61e3eb;
          --position: 0.1rem 2.8rem;
          --width: 180px;
          --height: 8px;
          background: linear-gradient(var(--color), var(--color))
            var(--position) / var(--width) var(--height) no-repeat;
          padding-bottom: 15px;
        }
      }

      p {
        width: 468px;
        font-size: 1.2rem;
      }
    }

    img {
      margin-top: 4rem;
      width: 500px;
      height: 308px;
      position: absolute;
      left: 50%;
    }
  }

  @media screen and (min-width: 1440px) {
    margin-top: 0;
    width: 1400px;
    align-items: center;
    margin-top: 3rem;

    > div {
      h1 {
        width: 750px;
        font-size: 2rem;
        font-weight: 500;
      }

      > p {
        font-size: 1.2rem;
        width: 565px;
        font-weight: 400;
        margin-top: 4rem;
        letter-spacing: 0.05rem;
      }
    }

    img {
      margin-top: 12rem;
      width: 530px;
      height: 350px;
    }
  }
`;

export const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;

export const Card = styled.div`
  width: 1135px;
  display: flex;
  height: 600px;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media screen and (min-width: 1366px) {
    width: 1025px;
    margin-bottom: 5rem;

    > div {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 470px;
      height: 115px;
      justify-content: space-between;
      text-align: center;
      color: #274596;

      > h1 {
        font-size: 1.5rem;
        font-weight: 500;
      }

      p {
        font-size: 1.1rem;
        line-height: 28px;
        width: 436px;
        letter-spacing: 3%;
      }

      :last-child {
        height: 400px;
        width: 100%;
        flex-direction: row;

        div {
          display: flex;
          justify-content: center;
          flex-direction: column;
          align-items: center;
          width: 315px;
          height: 360px;
          background-color: #fff;
          justify-content: center;
          box-shadow: rgba(0, 0, 0, 0.15) 0px 15px 25px,
            rgba(0, 0, 0, 0.05) 0px 5px 10px;

          h1 {
            font-size: 1.2rem;
            margin: 25px 0;
            font-weight: 500;
          }

          p {
            font-size: 1.1rem;
            width: 270px;
          }

          :last-child {
            flex-direction: column;
          }
        }
      }
    }
  }

  @media screen and (min-width: 1440px) {
    width: 1145px;
    margin-bottom: 5rem;

    > div {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 470px;
      height: 115px;
      justify-content: space-between;
      text-align: center;
      color: #274596;

      > h1 {
        font-size: 1.6rem;
        font-weight: 500;
      }

      p {
        font-size: 1.2rem;
        line-height: 28px;
        width: 460px;
        letter-spacing: 3%;
      }

      img {
        width: 50px;
        height: 50px;
      }

      :last-child {
        height: 400px;
        width: 100%;
        flex-direction: row;

        div {
          display: flex;
          justify-content: center;
          flex-direction: column;
          align-items: center;
          width: 350px;
          height: 360px;
          justify-content: center;

          h1 {
            font-size: 1.3rem;
            margin: 25px 0;
            font-weight: 500;
          }

          p {
            font-size: 1.2rem;
            width: 285px;
          }

          :last-child {
            flex-direction: column;
          }
        }
      }
    }
  }
`;

export const Box1 = styled.div`
  width: 1025px;
  display: flex;
  margin-top: 8rem;
  justify-content: space-around;
  color: #274596;
  margin-bottom: 2rem;

  @media screen and (min-width: 1366px) {
    img {
      width: 450px;
      height: 380px;
    }

    div {
      display: flex;
      flex-direction: column;
      width: 480px;
      justify-content: center;

      p {
        font-size: 1.1rem;
      }

      h1 {
        font-size: 1.5rem;
        margin-bottom: 5rem;
        font-weight: 500;
      }

      h2 {
        font-size: 1.3rem;
        font-weight: 500;
      }
    }
  }

  @media screen and (min-width: 1440px) {
    width: 1400px;
    margin-top: 6rem;
    justify-content: space-around;

    img {
      width: 500px;
      height: 420px;
    }

    div {
      width: 685px;

      h1 {
        font-size: 1.6rem;
        span {
          --color: #5692ec;
          --position: 0.1rem 2.3rem;
          --width: 100%;
          --height: 8px;
          background: linear-gradient(to right, var(--color), #5fe3ea)
            var(--position) / var(--width) var(--height) no-repeat;
          padding-bottom: 15px;
        }
      }

      h2 {
        font-size: 1.4rem;
      }

      p {
        width: 545px;
        font-size: 1.2rem;
      }
    }
  }
`;

export const Box2 = styled.div`
  width: 1025px;
  display: flex;
  justify-content: end;
  color: #274596;
  margin-bottom: 2rem;

  img {
    width: 350px;
    height: 250px;
  }

  div {
    width: 450px;
    display: flex;
    flex-direction: column;

    ul {
      padding: 1rem;
      font-size: 1.1rem;
    }

    p {
      font-size: 1.2rem;
    }

    h2 {
      font-size: 1.3rem;
      font-weight: 500;
    }
  }

  @media screen and (min-width: 1440px) {
    width: 995px;
    justify-content: space-around;

    img {
      height: 330px;
    }

    div {
      width: 560px;

      ul {
        font-size: 1.2rem;
      }

      h1 {
        font-size: 1.7rem;
      }

      h2 {
        font-size: 1.4rem;
      }

      p {
        width: 490px;
        font-size: 1.2rem;
      }
    }
  }
`;

export const Box3 = styled.div`
  width: 1025px;
  display: flex;
  justify-content: center;
  color: #274596;
  gap: 2rem;
  margin-bottom: 8rem;
  align-items: center;

  img {
    width: 180px;
    height: 150px;
  }

  div {
    width: 480px;
    display: flex;
    flex-direction: column;

    p {
      margin-bottom: 2rem;
      font-size: 1.1rem;
    }

    ul {
      padding: 1rem;
    }

    h2 {
      font-size: 1.3rem;
      font-weight: 500;
    }
  }

  @media screen and (min-width: 1440px) {
    width: 1400px;
    justify-content: end;
    margin-top: 1rem;

    img {
      width: 250px;
      height: 200px;
    }

    > div {
      flex-direction: center;
      align-items: center;

      :last-child {
        width: 655px;
        display: flex;
        align-self: start;
        margin-right: 5rem;
        align-items: flex-start;

        h1 {
          font-size: 1.7rem;
        }

        h2 {
          font-size: 1.4rem;
        }

        p {
          width: 545px;
          font-size: 1.2rem;
        }
      }
    }
  }
`;
