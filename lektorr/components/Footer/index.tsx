import { ReactNode } from 'react';

import { Container } from './styles';

export function Footer() {
  return (
    <>
      <Container>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#ffff"
            fillOpacity="1"
            d="M0,128L60,149.3C120,171,240,213,360,218.7C480,224,600,192,720,154.7C840,117,960,75,1080,69.3C1200,64,1320,96,1380,112L1440,128L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
          ></path>
        </svg>
      </Container>
    </>
  );
}
