import styled from 'styled-components';

type ContainerProps = {
  open: boolean;
  handleOpenNav: () => void;
};

type ActiveProp = {
  actived: boolean;
};

export const TrustBy = styled.div`
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
    margin-top: 2rem;
    div {
      width: 825px;
      height: 100px;

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

export const CallBtn = styled.div`
  width: 175px;

  button {
    width: 100%;
    border-radius: 5px;
    font-size: 1.1rem;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    height: 45px;
    border: none;
    background-color: #228ff4;
    color: #ffff;
    font-family: 'Lexend', sans-serif;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    :hover {
      background-color: #00c564;
      transition: ease 0.3s;
      font-weight: 500;
    }

    @media screen and (min-width: 1024px) {
      width: 175px;
    }

    @media screen and (min-width: 1440px) {
      width: 220px;
    }
  }
`;

export const Container = styled.header`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 765px;
  background-image: linear-gradient(
      to bottom,
      rgba(6, 64, 103, 0.85),
      rgba(10, 65, 102, 0.75)
    ),
    url('/wall.jpg');
  background-size: 1150px;
  background-repeat: no-repeat;
  background-position: 53% 0%;
  align-items: center;

  svg {
    position: absolute;
    top: 44rem;
    width: 100%;
  }

  @media screen and (min-width: 1024px) {
    height: 570px;
    background-position: 53% 50%;

    svg {
      top: 27rem;
    }
  }

  @media screen and (min-width: 1366px) {
    height: 620px;
    background-position: 53% 50%;
    background-size: 100%;

    svg {
      top: 27rem;
    }
  }

  @media screen and (min-width: 1440px) {
    height: 825px;
    background-position: 0% 58%;
    background-size: 1900px;

    svg {
      top: 36rem;
    }
  }
`;

export const SectionContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  section {
    padding: 90px 35px 0 35px;
    color: #eff0e8;
    width: 100%;

    h1 {
      font-family: 'Lexend', sans-serif;
      font-size: 2rem;
      line-height: 2.3rem;
      margin-bottom: 0.2rem;
    }

    h2 {
      font-family: 'Lexend', sans-serif;
      font-size: 2rem;
      line-height: 2.3rem;
      margin-bottom: 0.5rem;
      margin-top: 0;

      span {
        color: #6ab8ff;
      }
    }

    p {
      margin-top: 1.5rem;
      margin-bottom: 3rem;
      font-size: 1.3rem;
      font-weight: 500;
      font-family: 'Lexend', sans-serif;
      color: #eff0e8;
      width: 290px;
    }

    @media screen and (min-width: 1024px) {
      padding: 0;
      display: flex;
      flex-direction: column;
      max-width: 890px;
      margin-top: 5rem;

      h1 {
        font-size: 1.8rem;
      }

      h2 {
        font-size: 1.8rem;
      }

      p {
        width: 500px;
        font-size: 1.1rem;
        font-weight: 400;
      }

      button {
        width: 175px;
      }
    }

    @media screen and (min-width: 1366px) {
      padding: 0;
      display: flex;
      flex-direction: column;
      max-width: 1025px;
      margin-top: 4rem;

      h1 {
        font-size: 1.8rem;
      }

      h2 {
        font-size: 1.8rem;
      }

      p {
        width: 500px;
        font-size: 1.1rem;
        font-weight: 400;
      }

      button {
        width: 175px;
      }
    }

    @media screen and (min-width: 1440px) {
      padding: 0;
      display: flex;
      flex-direction: column;
      max-width: 1400px;
      justify-content: flex-start;

      h1 {
        font-size: 2.8rem;
        margin-bottom: 1rem;
        letter-spacing: 0.1rem;
      }

      h2 {
        font-size: 2.8rem;
        letter-spacing: 0.1rem;
      }

      p {
        width: 600px;
        font-size: 1.4rem;
      }
    }
  }
`;

// export const Nav = styled.nav<ActiveProp>`
//   background: ${({ actived }) => (actived ? '#00708d' : 'transparent')};
//   width: 100%;
//   height: 80px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   font-size: 1rem;
//   position: fixed;
//   top: 0;
//   z-index: 10;

//   .active {
//     background-color: red;
//   }

//   @media screen and (max-width: 1024px) {
//     transition: 0.8s all ease;
//   }
// `;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1;
  width: 100%;
  padding: 0 35px;
  max-width: 1400px;

  @media screen and (min-width: 1024px) {
    padding: 0;
    max-width: 890px;
  }

  @media screen and (min-width: 1200px) {
    padding: 0;
    max-width: 965px;
  }

  @media screen and (min-width: 1300px) {
    padding: 0;
    max-width: max(965px, 1025px);
  }

  @media screen and (min-width: 1440px) {
    padding: 0;
    max-width: max(1025px, 1200px);
  }

  @media screen and (min-width: 1600px) {
    padding: 0;
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

  @media screen and (min-width: 1440px) {
    gap: 0px;
    ul {
      font-size: 1.3rem;
      gap: 4rem;
    }
  }
`;

export const NavLogo = styled.div`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.3rem;
  display: flex;
  align-items: center;
  font-size: 1.8rem;
  text-decoration: none;

  @media screen and (min-width: 1024px) {
    margin-left: 24px;
  }
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    right: 0;
    top: 0.4rem;
    transform: translate(-100%, 100%);
    font-size: 1.5rem;
    cursor: pointer;
    color: #fff;
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
`;
