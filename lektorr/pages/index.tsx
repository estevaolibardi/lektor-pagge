import { Header } from '../components/Header';
import { useState } from 'react';
import Page from '../components/page';
import {
  Box,
  Order,
  Contato,
  FormStyle,
  BtnBox,
  FormContainer,
} from '../styles/homestyle';
import Head from 'next/head';
import { IoMdWifi } from 'react-icons/io';
import { RiShieldCheckFill, RiMedalFill } from 'react-icons/ri';
import Image from 'next/image';
import Accordion from '../components/Accordion';
import Input from '../components/Input';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import TextArea from '../components/TextArea';

export default function Home() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(0);
  console.log(selected);

  const handleOpenNav = () => {
    setOpen(!open);
  };

  const toggle = (i) => {
    if (selected === i + 1) {
      return setSelected(null);
    }
    setSelected(i + 1);
  };

  const schema = yup.object().shape({
    email: yup.string().email('email inválido').required('Email obrigatório'),
    name: yup.string().required('Nome obrigatório'),
    phone: yup.string().required('Digite o telefone'),
    message: yup.string().required('Digite uma mensagem'),
  });

  type FormFields = {
    name: string;
    email: number;
    phone: string;
    message: string;
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormFields>({ resolver: yupResolver(schema) });

  const onSubmit = (data) => {
    console.log(data);
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
          height={180}
          width={300}
          alt="monitoring"
        />
      </Order>
      <Accordion selected={selected} toggle={toggle} />
      <Contato>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#f3faff"
            fillOpacity="1"
            d="M0,256L1440,160L1440,0L0,0Z"
          ></path>
        </svg>
        <FormContainer>
          <h1>Entre em contato Conosco!</h1>
          <Image src="/contato.png" height={180} width={300} alt="monitoring" />
          <FormStyle onSubmit={handleSubmit(onSubmit)}>
            <Input
              placeholder="Digite seu nome"
              name="name"
              register={register}
              label="Nome:"
              error={errors.name?.message}
              type="text"
              autoComplete="off"
            />
            <Input
              placeholder="Digite seu email"
              name="email"
              register={register}
              label="Email:"
              error={errors.email?.message}
              type="email"
              autoComplete="off"
            />
            <Input
              placeholder="Digite seu telefone"
              name="phone"
              register={register}
              label="Telefone:"
              error={errors.phone?.message}
              type="text"
              autoComplete="off"
            />
            <TextArea
              placeholder="Digite sua mensagem"
              name="message"
              register={register}
              label="Mensagem:"
              error={errors.message?.message}
            />
            <BtnBox>
              <button>Enviar</button>
            </BtnBox>
          </FormStyle>
        </FormContainer>
      </Contato>
    </Page>
  );
}
