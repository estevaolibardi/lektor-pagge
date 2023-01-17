import { Header } from '../components/Header';
import { useState } from 'react';
import Page from '../components/page';
import { Box } from '../styles/homestyle';
import Head from 'next/head';
import { IoMdWifi } from 'react-icons/io';
import { RiShieldCheckFill, RiMedalFill } from 'react-icons/ri';
import Image from 'next/image';

export default function Home() {
  const [open, setOpen] = useState(false);
  console.log(open);

  const handleOpenNav = () => {
    setOpen(!open);
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
    </Page>
  );
}
