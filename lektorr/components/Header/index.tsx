import Image from 'next/image';
import { ReactNode, useState } from 'react';
import Logo from '../../assets/vector.png';
import BurguerMenu from '../BurguerMenu/index';
import Link from 'next/link';
import { Nav } from '../Nav/index';

import {
  Container,
  NavbarContainer,
  Aside,
  LeftBox,
  SectionContainer,
  CallBtn,
  TrustBy,
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

  function handleScrollContact() {
    handleOpenNav();
    window.scroll({
      top: 2100,
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
      <Nav
        active={active}
        handleOpenNav={handleOpenNav}
        handleScrollContact={handleScrollContact}
        handleScrollTop={handleScrollTop}
        open={open}
      />
      {/* <Nav actived={active}>
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
        </Nav> */}
      <SectionContainer>
        <section>
          <h1>Sistema de Monitoramento</h1>
          <h2>
            Inteligente.
            <span> Antecipe o Futuro!</span>
          </h2>
          <p>
            Escolha a melhor tecnologia de manutenção preditiva! E se você
            soubesse quando suas máquinas vão falhar?
          </p>

          <CallBtn>
            <Link href="/about">
              <button>Saiba mais</button>
            </Link>
          </CallBtn>

          <TrustBy>
            <div>
              <Image src="/ambev.png" width={138} height={30} alt="wall" />
              <Image src="/hy.png" width={160} height={25} alt="wall" />
              <Image src="/bosch.png" width={150} height={28} alt="wall" />
              <Image src="/logoatlas.png" width={250} height={22} alt="wall" />
            </div>
          </TrustBy>
        </section>
      </SectionContainer>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#ffffff"
          fillOpacity="1"
          d="M0,128L80,144C160,160,320,192,480,181.3C640,171,800,117,960,106.7C1120,96,1280,128,1360,144L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        ></path>
      </svg>
    </Container>
  );
}
