import Image from 'next/image';
import { ReactNode, useState } from 'react';
import Logo from '../../assets/vector.png';
import BurguerMenu from '../BurguerMenu/index';
import Link from 'next/link';

import {
  Container,
  Nav,
  NavbarContainer,
  Aside,
  LeftBox,
  SectionContainer,
} from './styles';

interface TesteProps {
  handleOpenNav: () => void;
  open: boolean;
}

export function Header({ handleOpenNav, open }: TesteProps) {
  const [active, setActive] = useState(false);

  function handleScrollTop() {
    window.scroll({
      top: 0,
      behavior: 'smooth',
    });
  }

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setActive(true);
    } else {
      setActive(false);
    }
  };

  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', changeBackground);
  }

  return (
    <Container>
      <Nav actived={active}>
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
              <li>Contato</li>
            </ul>
          </LeftBox>

          <BurguerMenu handleOpenNav={handleOpenNav} open={open} />
          <Aside open={open}>
            <div>
              <ul>
                <li>
                  <Link href="/about">Sobre</Link>
                </li>

                <li>Contato</li>
              </ul>
            </div>
          </Aside>
        </NavbarContainer>
      </Nav>
      <SectionContainer>
        <section>
          <h1>Sistema de Monitoramento Inteligente.</h1>
          <h2>
            <span>Antecipe o Futuro!</span>
          </h2>
          <p>E se você soubesse quando suas máquinas vão falhar?</p>
          <Link href="/about">
            <button>Saiba mais</button>
          </Link>
        </section>
      </SectionContainer>
    </Container>
  );
}
