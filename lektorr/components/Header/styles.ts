import styled from 'styled-components';
import introBackgroundImg from '../../assets/wallpaper.jpg';

type ContainerProps = {
  open: boolean;
};

export const Container = styled.header`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 540px;
  background-image: linear-gradient(
      to bottom,
      rgba(6, 64, 103, 0.85),
      rgba(10, 65, 102, 0.52)
    ),
    url('/wall.jpg');
  background-size: 1150px;
  background-position: 53% 20%;
  zoom: 0.9;

  section {
    padding: 40px 24px 0 35px;
    color: #eff0e8;
    width: 100%;

    h2 {
      font-family: 'Lexend', sans-serif;
      font-size: 2rem;
      line-height: 2.3rem;
      margin-bottom: 0.5rem;

      span {
        color: #6ab8ff;
      }
    }

    p {
      margin-top: 2rem;
      margin-bottom: 3.2rem;
      font-size: 1.3rem;
      font-weight: 600;
      font-family: 'Lexend', sans-serif;
      color: #eff0e8;
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
  }
`;

export const Nav = styled.nav`
  background: transparent;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px) {
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
`;

export const LeftBox = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;

  img {
    width: 1.5rem;
    height: 1.4rem;
  }

  h1 {
    font-size: 1.8rem;
    color: #ffff;
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
      }
    }
  }
`;
