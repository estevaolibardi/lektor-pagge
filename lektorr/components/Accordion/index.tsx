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
        'Através da avaliação online da condição das máquinas, reduza o estoque de sobressalentes, tenha melhor planejamento de compra de peças, e tenha melhor controle da manutenção  através do envio automático de emails, sempre que uma situação crítica for detectada na máquina.                                                                                                    ',
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

const Accordion = ({ toggle, selected }: Type) => {
  return (
    <Box>
      <Image
        src="/monitoringg.png"
        alt="monitoring"
        priority
        width={300}
        height={180}
      />
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100">
        <path
          fill="#dceffe"
          fillOpacity="1"
          d="M0,100L1440,45L1440,0L0,0Z"
        ></path>
      </svg>
      <Cont>
        <div>
          <BoxContent>
            <Container className="accordion">
              <h1>Como a Lektor pode me ajudar?</h1>
              {data.map((item, i) => (
                <BoxAccordion key={i}>
                  <Question onClick={() => toggle(i)}>
                    <span>
                      {selected === i + 1 ? (
                        <RiArrowUpSLine size={30} color="#228FF4" />
                      ) : (
                        <RiArrowDownSLine size={30} color="#228FF4" />
                      )}
                    </span>
                    <h2>{item.question}</h2>
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
            <Image src="/test.jpg" width={500} height={300} alt="pc" />
          </Img>
        </div>
      </Cont>
    </Box>
  );
};

export default Accordion;
