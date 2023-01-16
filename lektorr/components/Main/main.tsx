import React from 'react';
import { Section, Title } from './styles';

const Main = (props: any) => {
  return (
    <Section>
      <Title>
        <h1>Sistema de Monitoramento Inteligente.</h1>
        <h2>
          <span>Antecipe o futuro!</span>
        </h2>
        <p>E se você soubesse quando suas máquinas vão falhar?</p>
        <button>Saiba mais</button>
      </Title>
    </Section>
  );
};

export default Main;
