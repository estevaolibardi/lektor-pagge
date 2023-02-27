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

  @media screen and (min-width: 1440px) {
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

  > h1 {
    width: 700px;
    font-size: 2rem;
    font-weight: 500;
    letter-spacing: 0.1rem;

    span {
      --color: #2196f3;
      --position: 0.1rem 2.8rem;
      --width: 180px;
      --height: 8px;
      background: linear-gradient(var(--color), var(--color)) var(--position) /
        var(--width) var(--height) no-repeat;
      padding-bottom: 15px;
    }
  }

  > p {
    font-size: 1.2rem;
    width: 565px;
    font-weight: 400;
    margin-top: 4rem;
    letter-spacing: 0.05rem;
  }
`;

export const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 600px;

  > div {
    width: 1400px;
    display: flex;
    height: 300px;
  }
`;
