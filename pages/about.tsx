import Link from 'next/link';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { SectionContainer } from '../components/Header/styles';
import { Nav } from '../components/Nav';
import Page from '../components/page';
import Image from 'next/image';
import Logo from '../assets/vector.png';
import BurguerMenu from '../components/BurguerMenu';
import {
  Container,
  NavBox,
  NavbarContainer,
  LeftBox,
  Aside,
} from '../styles/aboutstyle';

interface NavProps {
  active: boolean;
  handleOpenNav: () => void;
  handleScrollContact: () => void;
  open: boolean;
}

export default function About({
  active,
  open,
  handleOpenNav,

  handleScrollContact,
}: NavProps) {
  return (
    <Page title="About" description="about">
      <Container>
        <NavBox
          actived={active}
          open={open}
          handleOpenNav={handleOpenNav}
          handleScrollContact={handleScrollContact}
        >
          <NavbarContainer>
            <LeftBox>
              <div>
                <Image src={Logo} alt="wall" />
                <h1>
                  <Link href="/">Lektor</Link>
                </h1>
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
      </Container>
    </Page>
  );
}
