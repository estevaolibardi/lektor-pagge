import { ReactNode } from 'react';
import Image from 'next/image';
import { Container, Column, BoxColumn, Copy, Info } from './styles';
import Logo from '../../assets/Logo.png';
import { MdOutlineCopyright } from 'react-icons/md';
import { FaInstagram } from 'react-icons/fa';
import { BsFacebook } from 'react-icons/bs';

export function Footer() {
  return (
    <>
      <Container>
        <Info>
          <div>
            <h1>Lektor</h1>
            <p>Sistema de Monitoramento Inteligente.</p>
            <p>
              Gerencie seus ativos em tempo real e detecte falhas em estágio
              inicial. Para todos os tipos de indústrias.
            </p>
          </div>

          <BoxColumn>
            <Column>
              <h3>Sobre nós</h3>
              <p>Conheça a Lektor</p>
            </Column>
            <Column>
              <h3>Produtos</h3>
              <p>Sensor de Vibração</p>
              <p>Sensor de Energia</p>
              <p>Sensor de Umidade</p>
            </Column>
            <Column>
              <h3>Contato</h3>
              <p>Fale Conosco</p>
            </Column>
          </BoxColumn>
        </Info>
        <Copy>
          <div>
            <div>
              <FaInstagram size={25} />
              <BsFacebook size={25} />
            </div>

            <div>
              <MdOutlineCopyright size={30} />
              <p>Copyright 2023 Lektor Tecnologia. Todos direitos reservados</p>
            </div>
          </div>
        </Copy>
      </Container>
    </>
  );
}
