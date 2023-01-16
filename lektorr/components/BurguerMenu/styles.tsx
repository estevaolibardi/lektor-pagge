import styled, { css } from 'styled-components';

type ContainerProps = {
  handleOpenNav: boolean;
  open: boolean;
};

export const Container = styled.div<ContainerProps>`
  width: 1.7rem;
  height: 1.7rem;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  transform-origin: 1px;
  z-index: 1000;
  position: absolute;
  right: 35px;

  cursor: pointer;

  div {
    width: 1.875rem;
    position: ${({ open }) => open && 'fixed'};
    height: 0.25rem;
    background-color: #ffff;
    border-radius: 10px;
    transition: all 0.3s linear;

    &:nth-child(1) {
      transform: ${({ open }) => open && 'rotate(45deg)'};
    }
    &:nth-child(2) {
      transform: ${({ open }) => open && 'translateX(100%)'};
      opacity: ${({ open }) => open && '0'};
    }
    &:nth-child(3) {
      transform: ${({ open }) => open && 'rotate(-45deg)'};
    }
  }

  @media screen and (min-width: 1024px) {
    display: none;
  }
`;
