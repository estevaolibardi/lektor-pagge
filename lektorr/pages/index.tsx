import { Header } from '../components/Header';
import { useState, useRef, useEffect } from 'react';
import Page from '../components/page';
import {
  Box,
  Order,
  First,
  Second,
  Third,
  MainTech,
  Main,
} from '../styles/homestyle';
import Head from 'next/head';
import { IoMdWifi } from 'react-icons/io';
import { RiShieldCheckFill, RiMedalFill } from 'react-icons/ri';
import Image from 'next/image';
import Accordion from '../components/Accordion';
import { Contact } from '../components/Contact';
import { TrustBy } from '../components/TrustBy';
import { Footer } from '../components/Footer';
import Aos from 'aos';
import 'aos/dist/aos.css';

export default function Home() {
  useEffect(() => {
    Aos.init();
  }, []);

  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(1);
  console.log(selected);

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
        {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#fff"
            fillOpacity="1"
            d="M0,320L80,304C160,288,320,256,480,224C640,192,800,160,960,149.3C1120,139,1280,149,1360,154.7L1440,160L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
          ></path>
        </svg> */}
        <svg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M-24 194.966L57.125 182.962C138.25 170.958 300.5 146.951 462.75 110.939C625 74.9278 787.25 26.9126 949.5 8.90694C1111.75 -9.09875 1274 2.90504 1436.25 20.9107C1598.5 38.9164 1760.75 62.924 1841.87 74.9278L1923 86.9316V303H1841.87C1760.75 303 1598.5 303 1436.25 303C1274 303 1111.75 303 949.5 303C787.25 303 625 303 462.75 303C300.5 303 138.25 303 57.125 303H-24V194.966Z"
            fill="#064067"
          />
        </svg>

        <div>
          <div>
            <h1>Monitore seus Equipamentos</h1>
            <h2>
              Tecnologias <span>aplicadas</span> a Indústria 4.0
            </h2>
          </div>
          <Main>
            <MainTech>
              <div>
                <div>
                  <h3>Monitoramento Online</h3>
                  <p>
                    LEKTOR é a solução para manter suas operações funcionando
                    sem interrupções e com o melhor desempenho.
                  </p>
                </div>
                <div>
                  <h3>Tecnologia IoT</h3>
                  <p>
                    Receba alertas automáticos ao menor sinal de defeito e
                    elimine os gastos com corretivas.
                  </p>
                </div>
                <div>
                  <h3>Gestão de Ativos</h3>
                  <p>
                    Tome decisões, controle e organize suas Ordens de Serviço
                    com antecedência, através de informações claras e objetivas.
                  </p>
                </div>
                <div>
                  <h3>Manutenção Preditiva</h3>
                  <p>
                    Com nosso sistema completo, de hardware e sofware, tenha o
                    controle de suas máquinas, automatize processos e gerencie
                    as atividades!
                  </p>
                </div>
              </div>
              <Image
                data-aos="fade-left"
                data-aos-duration="700"
                src="/motor.png"
                alt="eletric-motor"
                priority
                width={340}
                height={190}
              />
            </MainTech>
          </Main>
        </div>
      </Order>
      <Accordion selected={selected} toggle={toggle} />
      <Contact />
      <TrustBy />
      <Footer />
    </Page>
  );
}
