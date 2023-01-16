import { Header } from '../components/Header';
import { useState } from 'react';
import Page from '../components/page';
import { HomeContainer } from '../styles/homestyle';
import Head from 'next/head';
import Main from '../components/Main/main';

export default function Home() {
  const [open, setOpen] = useState(false);
  console.log(open);

  const handleOpenNav = () => {
    setOpen(!open);
  };

  return (
    <Page title="Home" description="teste">
      <Header handleOpenNav={handleOpenNav} open={open} />
      <Main></Main>
    </Page>
  );
}
