import { Header } from '../components/Header';
import { useState } from 'react';
import { HomeContainer } from '../styles/homestyle';

export default function Home() {
  const [open, setOpen] = useState(false);
  console.log(open);

  const handleOpenNav = () => {
    setOpen(!open);
  };

  return (
    <HomeContainer>
      <Header handleOpenNav={handleOpenNav} open={open} />
    </HomeContainer>
  );
}
