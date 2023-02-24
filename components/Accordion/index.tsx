import React, { useState } from 'react';
import {
  Container,
  Answer,
  Question,
  BoxAccordion,
  Box,
  Img,
  Cont,
  BoxContent,
} from './styles';
import Image from 'next/image';
import { RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';

const data: { question: string; answer: string; image: string; id: number }[] =
  [
    {
      id: 1,
      question: 'Redução de custos de manutenção!',
      answer:
        'Realize manutenções somente quando e onde for necessário, evitando assim gastos supérfluos.',
      image: '/monitoringg.png',
    },
    {
      id: 2,
      question: 'Segurança na produtividade!',
      answer:
        'Evite perdas por paradas inesperadas, e mantenha sua produção com o melhor desempenho.',
      image: '/test.jpg',
    },
    {
      id: 3,
      question: 'Melhor controle e planejamento da manutenção!',
      answer:
        'Reduza o estoque de sobressalentes, tenha melhor planejamento de compra de peças, receba emails automáticos sempre que uma situação crítica for detectada na máquina.                                                                                                    ',
      image: '/monitoringg.png',
    },
    {
      id: 4,
      question: 'Melhor compreensão das medições realizadas!',
      answer:
        'Obtenha relatórios eletrônicos online das condições dos ativos, com faixas completas de harmônicas avaliadas, e previsibilidade de falha das máquinas em dias.                                                                                                             ',
      image: '/monitoringg.png',
    },
  ];

type Type = {
  toggle: (i) => any;
  selected: any;
};

const STYLE = {
  infoColor: {
    color: 'green',
  },
  warningColor: {
    color: 'orange',
  },
  errorColor: {
    color: 'red',
  },
};

const Accordion = ({ toggle, selected }: Type) => {
  return (
    <Box>
      <Cont>
        <div>
          <BoxContent>
            <Container
              className="accordion"
              data-aos="fade-right"
              data-aos-duration="700"
            >
              <div>
                <h1>
                  O que a Lektor <span>proporciona?</span>
                </h1>
              </div>

              {data.map((item, i) => (
                <BoxAccordion key={i}>
                  <Question onClick={() => toggle(i)} selected={selected}>
                    <span>
                      {selected === i + 1 ? (
                        <RiArrowUpSLine size={30} color="#228FF4" />
                      ) : (
                        <RiArrowDownSLine size={30} color="#5084b8" />
                      )}
                    </span>

                    <h2
                      style={
                        selected === i + 1
                          ? { fontWeight: '500' }
                          : { fontWeight: '500', color: '#5084b8' }
                      }
                    >
                      {item.question}
                    </h2>
                  </Question>
                  {selected === i + 1 ? (
                    <Answer selected={selected}>{item.answer}</Answer>
                  ) : (
                    false
                  )}
                </BoxAccordion>
              ))}
            </Container>
          </BoxContent>

          <Img>
            <Image src="/ai.png" width={500} height={300} alt="pc" />
          </Img>
        </div>
      </Cont>
    </Box>
  );
};

export default Accordion;
