import Image from 'next/image';
import { ReactNode } from 'react';
import Logo from '../../assets/vector.png';
import { FaBars } from 'react-icons/fa';
import BurguerMenu from '../BurguerMenu/index';
import Link from 'next/link';
import { Container, Nav, NavbarContainer, Aside, LeftBox } from './styles';

interface TesteProps {
  handleOpenNav: () => void;
  open: boolean;
}

export function Header({ handleOpenNav, open }: TesteProps) {
  return (
    <Container>
      <Nav>
        <NavbarContainer>
          <LeftBox>
            <Image src={Logo} alt="wall" />
            <h1>Lektor</h1>
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
      <section>
        <h1>Sistema de Monitoramento Inteligente.</h1>
        <h2>
          <span>Antecipe o futuro.</span>
        </h2>
        <p>E se você soubesse quando suas máquinas vão falhar?</p>
        <button>Saiba mais</button>
      </section>
    </Container>
  );
}
