import { Header } from '../components/Header';
import { useState, useRef } from 'react';
import Page from '../components/page';
import { Box, Order, First, Second, Third } from '../styles/homestyle';
import Head from 'next/head';
import { IoMdWifi } from 'react-icons/io';
import { RiShieldCheckFill, RiMedalFill } from 'react-icons/ri';
import Image from 'next/image';
import Accordion from '../components/Accordion';
import { Contact } from '../components/Contact';
import { TrustBy } from '../components/TrustBy';
import { Footer } from '../components/Footer';

export default function Home() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(1);

  const handleOpenNav = () => {
    setOpen(!open);
  };

  const toggle = (i) => {
    if (selected === i + selected + 1) {
      return setSelected(null);
    }
    setSelected(i + 1);
  };

  return (
    <Page title="Home" description="teste">
      <Header
        handleOpenNav={handleOpenNav}
        open={open}
        // scrollToTop={scrollToTop}
      />
      <Box>
        <div>
          <First>
            <IoMdWifi size={45} color="#228FF4" />
            <h1>Monitoramento de Alta Taxa de Leitura</h1>
            <p>
              Por ser automático, a taxa de leitura chega a 1440 leituras/dia.
            </p>
          </First>
          <Second>
            <RiShieldCheckFill size={45} color="#228FF4" />
            <h1>Previsibilidade de Falha em Dias</h1>
            <p>
              Relatórios gerados com previsibilidade de falhas em dias, com
              assertividade de 95%.
            </p>
          </Second>
          <Third>
            <RiMedalFill size={45} color="#228FF4" />
            <h1>Sistema de Baixo Custo e Alto Valor Agregado</h1>
            <p>Melhor custo-benefício em manutenção preditiva do mercado.</p>
          </Third>
        </div>
      </Box>
      <Order>
        <div>
          <h1>Gestão de Ativos</h1>
          <p>
            Incorpore ao seu negócio o monitoramento automático e online de seus
            ativos, e através da tecnologia IoT e inteligência artificial,
            obtenha informações relevantes para a tomada de decisão!
          </p>
        </div>
      </Order>
      <Accordion selected={selected} toggle={toggle} />
      <Contact />
      <TrustBy />
      <Footer />
    </Page>
  );
}
