import { ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import BurguerMenu from '../BurguerMenu/index';
import Logo from '../../assets/vector.png';

import { NavBox, NavbarContainer, LeftBox, Aside } from './styles';

interface NavProps {
  active: boolean;
  handleOpenNav: () => void;
  handleScrollTop: () => void;
  handleScrollContact: () => void;
  open: boolean;
}

export function Nav({
  active,
  open,
  handleOpenNav,
  handleScrollTop,
  handleScrollContact,
}: NavProps) {
  return (
    <NavBox
      actived={active}
      open={open}
      handleOpenNav={handleOpenNav}
      handleScrollContact={handleScrollContact}
      handleScrollTop={handleScrollTop}
    >
      <NavbarContainer>
        <LeftBox>
          <div onClick={handleScrollTop}>
            <Image src={Logo} alt="wall" />
            <h1>Lektor</h1>
          </div>

          <ul>
            <li>
              <Link href="/about">Sobre</Link>
            </li>
            <li onClick={handleScrollContact}>Contato</li>
          </ul>
        </LeftBox>

        <BurguerMenu handleOpenNav={handleOpenNav} open={open} />
        <Aside open={open} handleOpenNav={handleOpenNav}>
          <div>
            <ul>
              <li>
                <Link href="/about">Sobre</Link>
              </li>

              <li onClick={handleScrollContact}>Contato</li>
            </ul>
          </div>
        </Aside>
      </NavbarContainer>
    </NavBox>
  );
}
