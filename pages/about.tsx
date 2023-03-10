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
  Title,
  Main,
  Box1,
  Box2,
  Box3,
  Card,
  Wrapper,
  Info,
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

        <Title>
          <div>
            <div>
              <h1>
                Sem quebras, maior vida útil e melhor performance de suas
                máquinas!
              </h1>
              <h1>
                Faça a <span>melhor</span> Preditiva!
              </h1>
            </div>

            <p>
              Adquira um sistema de monitoramento on-line capaz de mapear toda
              sua planta fabril, e detecte falhas em estágio inicial através de
              análises feitas por inteligência artificial.
            </p>
          </div>

          <Image
            src="/factory_isometric.png"
            alt="factory_isometric"
            priority
            width={500}
            height={400}
          />
        </Title>
      </Container>
      <Main>
        <Box1>
          <Image
            src="/ais.jpg"
            alt="factory_isometric"
            priority
            width={500}
            height={500}
          />
          <div>
            <h1>
              <span>Sensor de Vibração e Temperatura</span>
            </h1>
            <h2>Inteligência Artificial</h2>
            <p>
              Nosso sistema de IA, Lógica Fuzzy e reconhecimento de padrões, tem
              assertividade no diagnóstico muito superior a avaliação feita por
              especialistas!
            </p>
          </div>
        </Box1>
        <Wrapper>
          <Box2>
            <div>
              <h2>Modo de Falha</h2>
              <p>
                Através do modo de falha, determine no sinal medido, a
                composição dos harmônicos referentes às principais anomalias, e
                tenha a provável causa de falha em sua máquina!
              </p>
            </div>

            <div>
              <div>
                <h3>Prognóstico</h3>
                <p>Folga Mêcanica</p>
                <p>Desalinhamento</p>
                <p>Engrenagem</p>
              </div>
              <div>
                <h3>Impacto</h3>
                <p>71,096%</p>
                <p>16,589%</p>
                <p>05,925%</p>
              </div>
            </div>

            <div>
              <Image
                src="/data.png"
                alt="data"
                priority
                width={325}
                height={359}
              />
            </div>

            <div>
              <h2>Benefícios para o Cliente</h2>
              <p>
                Através do modo de falha, determine no sinal medido, a
                composição dos harmônicos referentes às principais anomalias.
              </p>
              <ul>
                <li>Geração de Ordem de Serviço automática;</li>
                <li>Melhor controle e planejamento da manutenção;</li>
                <li>Melhor planejamento de compras</li>
                <li>Redução de estoque de peças</li>
                <li>Redução de custos de manutenção</li>
                <li>Redução de paradas não programadas</li>
                <li>
                  Intervenção somente quando necessária, evitando perdas por
                  paradas inesperadas.
                </li>
              </ul>
            </div>

            <div>
              <Image
                src="/previsao.png"
                alt="data"
                priority
                width={500}
                height={500}
              />
            </div>
          </Box2>

          <Box3>
            <div>
              <Image
                src="/ai.png"
                alt="factory_isometric"
                priority
                width={500}
                height={500}
              />
            </div>

            <div>
              <h2>Previsibilidade de Falha em Dias</h2>
              <p>
                Entenda de forma simples a gravidade que as consequências das
                falhas estão gerando em suas máquinas em DIAS até ela quebrar,
                caso não seja feita nenhuma manutenção.
              </p>
              <p>
                Se o problema realmente for resolvido, a previsão em dias irá
                aumentar, indicando que a máquina já esta operando em condições
                nominais!
              </p>
            </div>

            <div>
              <h3>Previsibilidade de Falha</h3>
              <div>
                <div>
                  <p>Condição Nominal</p>
                  <p>Inspeção</p>
                  <p>Alerta</p>
                  <p>Manutenção</p>
                </div>
                <div>
                  <p>121 a 365 dias</p>
                  <p>61 a 120 dias</p>
                  <p>31 a 60 dias</p>
                  <p>Período &lt; 30 dias</p>
                </div>
              </div>
            </div>

            <div>
              <Image
                src="/contadu.png"
                alt="data"
                priority
                width={500}
                height={500}
              />
              <p>
                A cada alarme gerado o sistema envia automaticamente um e-mail
                para qualquer funcionário, avisando o horário que a anomalia foi
                detectada!
              </p>
            </div>

            <div>
              <h2>Diferenciais</h2>
              <ul>
                <li>Sensores Digitais;</li>
                <li>Monitoramento em tempo real;</li>
                <li>Alta taxa de leitura (340.000/mês);</li>
                <li>Coleta de dados automática;</li>
                <li>Faixa completa de harmônicas avaliadas;</li>
                <li>Análise de dados com AI;</li>
                <li>Previsibilidade de falha em dias;</li>
                <li>Medição contínua de FFT;</li>
              </ul>
            </div>
          </Box3>
        </Wrapper>

        <Card>
          <div>
            <h1>
              <span>Nossos sensores para a Indústria 4.0</span>
            </h1>
            <p>
              Evite que os desvios de manutenção e operação se tornem um
              problema e uma dor de cabeça!
            </p>
          </div>
          <div>
            <div>
              <Image
                src="/sensor.png"
                alt="factory_isometric"
                priority
                width={60}
                height={60}
              />
              <h1>Sensor de Vibração e Temperatura</h1>
              <p>
                Detecte todas as falhas possíveis com nossa ampla faixa de
                frequência, incluindo falhas de rolamentos e engrenagens.
              </p>
            </div>
            <div>
              <Image
                src="/energy.png"
                alt="factory_isometric"
                priority
                width={60}
                height={60}
              />
              <h1>Sensor de Energia</h1>
              <p>
                Detecte falhas elétricas e monitore o consumo de energia, acesse
                análises da qualidade e eficiência energética da operação.
              </p>
            </div>
            <div>
              <Image
                src="/umidade.png"
                alt="factory_isometric"
                priority
                width={50}
                height={50}
              />
              <h1>Sensor de Umidade</h1>
              <p>
                Monitore a umidade e mantenha suas máquinas operando com a
                melhor eficiência.
              </p>
            </div>
          </div>
        </Card>
      </Main>
      <Footer />
    </Page>
  );
}
