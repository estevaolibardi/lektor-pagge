import { Header } from '../components/Header';
import { useState, useRef } from 'react';
import Page from '../components/page';
import { Box, Order } from '../styles/homestyle';
import Head from 'next/head';
import { IoMdWifi } from 'react-icons/io';
import { RiShieldCheckFill, RiMedalFill } from 'react-icons/ri';
import Image from 'next/image';
import Accordion from '../components/Accordion';
import { Contact } from '../components/Contact';

export default function Home() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(0);

  const handleOpenNav = () => {
    setOpen(!open);
  };

  const toggle = (i) => {
    if (selected === i + 1) {
      return setSelected(null);
    }
    setSelected(i + 1);
  };

  return (
    <Page title="Home" description="teste">
      <Header handleOpenNav={handleOpenNav} open={open} />
      <Box>
        <div>
          <IoMdWifi size={45} color="#228FF4" />
          <h1>Monitoramento de Alta Taxa de Leitura</h1>
          <p>
            Por ser automático, a taxa de leitura chega a 1440 leituras/dia.
          </p>
        </div>
        <div>
          <RiShieldCheckFill size={45} color="#228FF4" />
          <h1>Previsibilidade de Falha em Dias</h1>
          <p>
            Relatórios gerados com previsibilidade de falhas em dias, com
            assertividade de 95%.
          </p>
        </div>
        <div>
          <RiMedalFill size={45} color="#228FF4" />
          <h1>Sistema de Baixo Custo e Alto Valor Agregado</h1>
          <p>Melhor custo-benefício em manutenção preditiva do mercado.</p>
        </div>
      </Box>
      <Order>
        <div>
          <h1>Gestão de Ativos</h1>
          <p>
            Incorpore ao seu negócio o monitoramento automático e online de seus
            ativos, e através da Tecnologia IoT e Inteligência Artificial,
            obtenha informações relevantes para a tomada de decisão!
          </p>
        </div>
        <Image
          src="/monitoringg.png"
          alt="monitoring"
          priority
          width={300}
          height={180}
        />
      </Order>
      <Accordion selected={selected} toggle={toggle} />
      <Contact />
    </Page>
  );
}
