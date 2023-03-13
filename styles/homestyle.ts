import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
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
  padding: 3rem 2rem 5rem 2rem;
  margin-top: 5rem;
  width: 100%;
  color: #ecf1f9;

  img {
    width: 300px;
    height: 280px;
  }

  > div {
    p {
      margin: 2rem 0rem;
      font-size: 1.2rem;
    }

    h1 {
      span {
        --color: #61e3eb;
        --position: 0.1rem 2.8rem;
        --width: 180px;
        --height: 8px;
        background: linear-gradient(var(--color), var(--color)) var(--position) /
          var(--width) var(--height) no-repeat;
        padding-bottom: 15px;
      }
    }
  }

  @media screen and (min-width: 1366px) {
    width: 1025px;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 7rem;
    padding: 0;

    > div {
      width: 600px;
      height: 270px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      h1 {
        font-size: 1.8rem;
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
        margin: 1rem 0rem;
      }
    }

    img {
      margin-top: 2rem;
      width: 450px;
      height: 310px;
      position: absolute;
      left: 55%;
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

  img {
    width: 300px;
    height: 300px;
  }

  @media screen and (min-width: 1366px) {
    img {
      width: 500px;
      height: 500px;
    }
  }
`;

export const Card = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0rem 2rem 0rem 2rem;
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #274596;

    h1 {
      font-size: 1.5rem;
      width: 90%;
      text-align: center;
      margin-bottom: 2rem;
    }

    p {
      font-size: 1.2rem;
      text-align: center;
    }

    :last-child {
      margin-top: 4rem;
      margin-bottom: 2rem;
      gap: 2rem;
      max-width: 90%;

      h1 {
        font-size: 1.3rem;
      }

      img {
        width: 60px;
        height: 60px;
        margin-bottom: 1rem;
      }

      p {
        font-size: 1.1rem;
      }

      div {
        box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
          rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
        padding: 2rem 1rem;

        :last-child {
          margin-top: 0;
          max-width: 100%;
          gap: 0;
        }
      }
    }
  }

  @media screen and (min-width: 1366px) {
    width: 1025px;
    margin-bottom: 5rem;
    margin-top: 3rem;

    > div {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 470px;
      height: 135px;
      justify-content: space-between;
      text-align: center;
      color: #274596;

      > h1 {
        font-size: 1.5rem;
        font-weight: 500;
        width: 100%;

        span {
          --color: #58cfc9;
          --position: 0.1rem 2.2rem;
          --width: 100%;
          --height: 8px;
          background: linear-gradient(var(--color), var(--color))
            var(--position) / var(--width) var(--height) no-repeat;
          padding-bottom: 15px;
        }
      }

      p {
        font-size: 1.1rem;
        line-height: 22px;
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
            margin-bottom: 0;
          }
        }
      }
    }
  }

  @media screen and (min-width: 1440px) {
    width: 1145px;
    height: 600px;
    margin-bottom: 5rem;

    > div {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 470px;
      height: 140px;
      justify-content: space-between;
      text-align: center;
      color: #274596;

      > h1 {
        font-size: 1.6rem;
        font-weight: 500;
        width: 100%;
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
  width: 100%;
  display: flex;
  flex-direction: column-reverse;
  padding: 3rem 2rem 0rem 2rem;
  justify-content: space-around;
  color: #274596;

  div {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    h1 {
      text-align: center;
      font-size: 1.6rem;
      width: 85%;

      span {
        --color: #5692ec;
        --position: 0rem 4.5rem;
        --width: 255px;
        --height: 20px;
        background: linear-gradient(to right, var(--color), #5fe3ea)
          var(--position) / var(--width) var(--height) no-repeat;
        padding-bottom: 48px;
      }
    }
  }

  h2 {
    margin: 4rem 0 2rem;
    text-align: center;
    font-weight: 600;
  }

  p {
    font-size: 1.2rem;
    text-align: center;
    margin-bottom: 2rem;
  }

  @media screen and (min-width: 1366px) {
    width: 1025px;
    margin-top: 4rem;
    flex-direction: row;
    padding: 0;

    img {
      width: 450px;
      height: 380px;
    }

    div {
      display: flex;
      flex-direction: column;
      width: 460px;
      justify-content: flex-end;
      text-align: start;
      align-items: flex-start;

      p {
        font-size: 1.1rem;
        text-align: start;
      }

      h1 {
        font-size: 1.5rem;
        margin-bottom: 4rem;
        font-weight: 500;
        width: 100%;
        text-align: start;

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
        font-size: 1.3rem;
        font-weight: 600;
        width: 100%;
        text-align: start;
        margin: 0rem 0 2rem;
      }
    }
  }

  @media screen and (min-width: 1440px) {
    width: 1400px;
    margin-top: 6rem;
    justify-content: space-around;
    flex-direction: row;

    img {
      width: 500px;
      height: 420px;
    }

    div {
      width: 615px;
      text-align: start;
      align-items: flex-start;

      h1 {
        font-size: 1.6rem;
        text-align: start;

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
        text-align: start;
      }

      p {
        width: 520px;
        font-size: 1.2rem;
        text-align: start;
      }
    }
  }
`;

export const Box2 = styled.div`
  width: 100%;
  display: flex;
  padding: 3rem 2rem 0rem 2rem;
  flex-direction: column;
  justify-content: end;
  color: #274596;
  margin-bottom: 2rem;

  div {
    text-align: center;
    h2 {
      font-weight: 600;
    }

    > p {
      font-size: 1.2rem;
      margin-bottom: 3rem;
    }

    :nth-child(2) {
      display: flex;
      box-shadow: 0px 4px 5px 3px rgba(185, 220, 253, 1);
      border-radius: 20px;
      justify-content: space-evenly;

      > div {
        box-shadow: none;
        text-align: start;

        > p {
          margin-bottom: 1rem;
        }
      }

      :last-child {
        flex-direction: column;
        text-align: end;
        margin-top: 0;
      }
    }

    :nth-child(3) {
      display: flex;
      justify-content: center;
      margin: 4rem 0;

      img {
        height: 280px;
        width: 280px;
      }
    }

    :nth-child(4) {
      ul {
        font-size: 1.1rem;
        text-align: start;
      }
    }

    :last-child {
      display: flex;
      justify-content: center;
      margin-top: 4rem;

      img {
        width: 190px;
        height: 140px;
      }
    }
  }

  img {
    width: 300px;
    height: 300px;
  }

  @media screen and (min-width: 1366px) {
    padding: 0;
    max-width: 400px;
    justify-content: flex-start;

    div {
      h2 {
        text-align: start;
        font-size: 1.3rem;
      }

      > p {
        text-align: start;
        font-size: 1.1rem;
      }

      :nth-child(2) {
        max-width: 320px;

        > div {
          > p {
          }
        }

        :last-child {
        }
      }

      :nth-child(3) {
        img {
        }
      }

      :nth-child(4) {
        p {
          margin-bottom: 2rem;
        }

        ul {
          padding: 0 1.4rem;
          width: 460px;
        }
      }

      :last-child {
        img {
        }
      }
    }
  }

  @media screen and (min-width: 1440px) {
    max-width: 500px;

    div {
      h2 {
        text-align: start;
      }

      p {
        width: 465px;
        font-size: 1.2rem;
        text-align: start;
        margin-bottom: 0;
      }

      :nth-child(2) {
        width: 320px;
        height: 200px;
        margin-top: 3rem;
        justify-content: space-evenly;
        display: flex;

        > div {
          box-shadow: none;
          width: 160px;
          margin-top: 0;
          display: flex;
          justify-content: space-evenly;
          flex-direction: column;

          h3 {
            margin-top: 0;
          }

          :last-child {
            width: 100px;
            flex-direction: column;
            text-align: end;

            p {
              width: 100%;
              text-align: end;
            }
          }
        }
      }

      :nth-child(3) {
        margin: 0;
        justify-content: flex-start;

        img {
          height: 280px;
          width: 280px;
          margin-left: 4rem;
          margin-top: 5rem;
          margin-bottom: 4rem;
        }
      }

      :nth-child(4) {
        ul {
          padding: 1.4rem;
          width: 460px;
          font-size: 1.1rem;
        }

        p {
          width: 420px;
        }
      }

      :last-child {
        justify-content: flex-start;

        img {
          :last-child {
            width: 220px;
            height: 150px;
            margin-left: 6rem;
            margin-bottom: 0;
            margin-top: 4rem;
          }
        }
      }
    }
  }
`;

export const Box3 = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3rem 2rem 0rem 2rem;
  justify-content: center;
  color: #274596;
  margin-bottom: 4rem;
  align-items: center;

  img {
    width: 180px;
    height: 150px;
  }

  > div {
    display: none;
    flex-direction: column;

    :nth-child(2) {
      display: flex;
      text-align: center;

      div {
        width: 100%;
        margin-bottom: 1rem;
        display: flex;
        justify-content: center;

        h2 {
          width: 90%;
        }
      }

      p {
        font-size: 1.2rem;

        :last-child {
          margin-top: 2rem;
        }
      }
    }

    :nth-child(3) {
      display: flex;
      box-shadow: 2px 3px 5px 3px rgb(185 220 253);
      border-radius: 20px;
      margin: 4rem 0;
      font-size: 1rem;
      width: 100%;

      h3 {
        padding: 0 1rem;
      }

      div {
        flex-direction: row;
        margin-bottom: 0.7rem;
        display: flex;
        justify-content: center;

        div {
          flex-direction: column;
          box-shadow: none;

          :last-child {
            text-align: end;
          }
        }
      }
    }

    :nth-child(4) {
      display: flex;
      align-items: center;

      img {
        width: 200px;
        height: 200px;
        margin-right: 2rem;
      }

      p {
        margin-top: 2rem;
        text-align: center;
        font-size: 1.2rem;
      }
    }

    :last-child {
      display: flex;
      margin-top: 2rem;
      text-align: center;

      ul {
        font-size: 1.1rem;
        text-align: start;
      }
    }
  }

  @media screen and (min-width: 1366px) {
    padding: 0;
    max-width: 430px;

    img {
    }

    > div {
      display: flex;

      :nth-child(2) {
        text-align: start;

        h1 {
        }

        div {
          h2 {
            text-align: start;
            width: 100%;
            font-size: 1.3rem;
            font-weight: 600;
          }
        }

        p {
          font-size: 1.1rem;
        }
      }

      :nth-child(3) {
        max-width: 375px;

        h3 {
          padding: 0 1.5rem;
        }

        p {
          font-size: 1.1rem;
        }

        div {
          justify-content: space-evenly;

          div {
            :last-child {
            }
          }
        }
      }

      :nth-child(4) {
        img {
        }

        p {
          font-size: 1.1rem;
          width: 90%;
          text-align: start;
        }
      }

      :last-child {
        h2 {
          font-size: 1.3rem;
          text-align: start;
        }

        ul {
          padding: 0 1.4rem;
        }
      }
    }
  }

  @media screen and (min-width: 1440px) {
    max-width: 465px;
    justify-content: start;
    display: flex;
    align-items: flex-start;

    img {
      width: 330px;
      height: 280px;
      margin-top: -3rem;
      margin-bottom: 1rem;
      margin-left: 3rem;
    }

    > div {
      display: flex;
      flex-direction: center;
      align-items: center;

      :nth-child(2) {
        width: 655px;
        display: flex;
        margin-right: 5rem;
        align-items: flex-start;
        text-align: start;

        h1 {
          font-size: 1.7rem;
        }

        h2 {
          font-size: 1.4rem;
          font-weight: 500;
        }

        p {
          width: 490px;
          font-size: 1.2rem;
          margin-bottom: 2rem;
        }
      }

      :nth-child(3) {
        width: 375px;
        height: 240px;
        align-items: start;
        margin-top: 1rem;
        margin-right: 0;
        justify-content: space-around;
        flex-direction: column;

        h3 {
          width: 375px;
          font-weight: 500;
          text-align: start;
          margin-left: 1rem;
          margin-top: 1rem;
        }

        p {
          margin-bottom: 1rem;
          font-size: 1.1rem;
        }

        div {
          flex-direction: row;
          display: flex;
          justify-content: center;
          width: 100%;
          div {
            flex-direction: column;
            width: 185px;

            :last-child {
              width: 150px;
              text-align: end;
            }
          }
        }
      }

      :nth-child(4) {
        width: 100%;
        display: flex;
        align-items: flex-start;

        img {
          width: 250px;
          height: 250px;
          margin-top: 4rem;
          margin-bottom: 0;
          margin-left: 3rem;
        }

        p {
          width: 400px;
          font-size: 1.1rem;
          margin-top: 2rem;
          margin-bottom: 2rem;
          text-align: start;
        }
      }

      :last-child {
        width: 100%;

        h2 {
          width: 100%;
          text-align: start;
        }

        ul {
          padding: 0 1.4rem;
          line-height: 1.6rem;
          margin: 0;
          width: 100%;
          font-size: 1.1rem;
        }
      }
    }
  }
`;

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  flex-direction: column;

  img {
    width: 300px;
    height: 300px;
  }

  @media screen and (min-width: 1366px) {
    max-width: 1025px;
    flex-direction: row;
    justify-content: space-around;
  }

  @media screen and (min-width: 1440px) {
  }
`;

export const Info = styled.div`
  display: flex;
  width: 400px;
  justify-content: center;
`;

export const Trust = styled.div`
  margin-top: 4rem;
  display: flex;
  justify-content: end;

  div {
    display: flex;
    justify-content: space-between;
    width: 350px;
    height: 100px;
    flex-wrap: wrap;
    align-items: center;

    img {
      width: 120px;

      :nth-child(2) {
        margin-right: 70px;
        width: 130px;
        height: 25px;
      }

      :last-child {
        width: 200px;
        height: 20px;
      }
    }
  }

  @media screen and (min-width: 1024px) {
    div {
      width: 825px;
      height: 50px;

      img {
        width: 90px;
        height: 25px;

        :nth-child(2) {
          margin-right: 0px;
          width: 120px;
          height: 20px;
        }

        :nth-child(3) {
          width: 100px;
          height: 20px;
        }

        :last-child {
          width: 200px;
          height: 18px;
        }
      }
    }
  }

  @media screen and (min-width: 1366px) {
    margin-top: 1rem;
    width: 1025px;
    justify-content: flex-start;

    div {
      height: 50px;
      width: 60%;

      img {
        width: 90px;
        height: 25px;

        :nth-child(2) {
          margin-right: 0px;
          width: 120px;
          height: 20px;
        }

        :nth-child(3) {
          width: 100px;
          height: 20px;
        }

        :last-child {
          width: 200px;
          height: 18px;
        }
      }
    }
  }

  @media screen and (min-width: 1440px) {
    margin-top: 5rem;

    div {
      width: 1000px;

      img {
        width: 138px;
        height: 30px;

        :nth-child(2) {
          margin-right: 0px;
          width: 160px;
          height: 25px;
        }

        :nth-child(3) {
          width: 150px;
          height: 28px;
        }

        :last-child {
          width: 250px;
          height: 22px;
        }
      }
    }
  }
`;
