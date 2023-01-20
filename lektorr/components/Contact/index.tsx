import { ReactNode, useRef } from 'react';
import Input from '../../components/Input';
import { useForm } from 'react-hook-form';
import { Container, FormContainer, FormStyle, BtnBox } from './styles';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import TextArea from '../../components/TextArea';
import Image from 'next/image';
import emailjs from '@emailjs/browser';

export function Contact() {
  const form = useRef();
  const schema = yup.object().shape({
    user_email: yup
      .string()
      .email('email inválido')
      .required('Email obrigatório'),
    user_name: yup.string().required('Nome obrigatório'),
    user_phone: yup.string().required('Digite o telefone'),
    message: yup.string().required('Digite uma mensagem'),
  });

  type FormFields = {
    user_name: string;
    user_email: number;
    user_phone: string;
    message: string;
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormFields>({ resolver: yupResolver(schema) });

  const sendEmail = (data, e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_tapqxha',
        'template_hzr0plx',
        e.target,
        '4X23yM7r5Snjy_LFk'
      )
      .then((error) => {
        console.log(error.text);
      });
    e.target.reset();
  };

  return (
    <Container>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#f3faff"
          fillOpacity="1"
          d="M0,256L1440,160L1440,0L0,0Z"
        ></path>
      </svg>
      <FormContainer>
        <h1>Entre em contato Conosco!</h1>
        <Image
          src="/contato.png"
          height={180}
          width={300}
          alt="monitoring"
          priority
        />
        <FormStyle ref={form} onSubmit={handleSubmit(sendEmail)}>
          <Input
            placeholder="Digite seu nome"
            name="user_name"
            register={register}
            label="Nome:"
            error={errors.user_name?.message}
            type="text"
            autoComplete="off"
          />
          <Input
            placeholder="Digite seu email"
            name="user_email"
            register={register}
            label="Email:"
            error={errors.user_email?.message}
            type="email"
            autoComplete="off"
            id="user_email"
          />
          <Input
            placeholder="Digite seu telefone"
            name="user_phone"
            register={register}
            label="Telefone:"
            error={errors.user_phone?.message}
            type="text"
            id="user_phone"
            autoComplete="off"
          />
          <TextArea
            placeholder="Digite sua mensagem"
            name="message"
            register={register}
            label="Mensagem:"
            id="message"
            error={errors.message?.message}
          />
          <BtnBox>
            <button type="submit">Enviar</button>
          </BtnBox>
        </FormStyle>
      </FormContainer>
    </Container>
  );
}
