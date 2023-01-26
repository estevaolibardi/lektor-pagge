import styled from 'styled-components';

type ContainerProps = {
  open: boolean;
  handleOpenNav: () => void;
};

type ActiveProp = {
  actived: boolean;
};

export const Container = styled.header`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 520px;
  background-image: linear-gradient(
      to bottom,
      rgba(6, 64, 103, 0.85),
      rgba(10, 65, 102, 0.65)
    ),
    url('/wall.jpg');
  background-size: 1150px;
  background-position: 53% 30%;
  align-items: center;

  @media screen and (min-width: 1024px) {
    background-size: 100%;
    background-position: 53% 50%;
  }

  @media screen and (min-width: 1440px) {
    /* height: 600px; */
    background-size: 100%;
    background-position: 100% 40%;
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
      font-weight: 600;
      font-family: 'Lexend', sans-serif;
      color: #eff0e8;
      width: 300px;
    }

    button {
      width: 175px;
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
    }

    @media screen and (min-width: 1024px) {
      padding: 0;
      display: flex;
      flex-direction: column;
      max-width: 794px;

      h1 {
        font-size: 1.8rem;
      }

      h2 {
        font-size: 1.8rem;
      }

      p {
        width: 500px;
        font-size: 1.1rem;
      }

      button {
        width: 175px;
      }
    }

    @media screen and (min-width: 1440px) {
      padding: 0;
      display: flex;
      flex-direction: column;
      max-width: 1060px;

      h1 {
        font-size: 2.5rem;
      }

      h2 {
        font-size: 2.5rem;
      }

      p {
        width: 800px;
        font-size: 1.5rem;
      }

      button {
        width: 220px;
      }
    }
  }
`;

export const Nav = styled.nav<ActiveProp>`
  background: ${({ actived }) => (actived ? '#00708d' : 'transparent')};
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: fixed;
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
  max-width: 1400px;

  @media screen and (min-width: 1024px) {
    padding: 0;
    max-width: 888px;
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
