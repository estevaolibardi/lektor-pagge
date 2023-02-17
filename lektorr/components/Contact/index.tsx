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

  // function normalizeCardNumber(str) {
  //   return (
  //     str
  //       .replace(/\D/g, '')
  //       .replace(
  //         /(?:(^\+\d{2})?)(?:([1-9]{2})|([0-9]{3})?)(\d{4,5})(\d{4})/,
  //         (fullMatch, country, ddd, dddWithZero, prefixTel, suffixTel) => {
  //           if (country)
  //             return `${country} (${
  //               ddd || dddWithZero
  //             }) ${prefixTel}-${suffixTel}`;
  //           if (ddd || dddWithZero)
  //             return `(${ddd || dddWithZero}) ${prefixTel}-${suffixTel}`;
  //           if (prefixTel && suffixTel) return `${prefixTel}-${suffixTel}`;
  //           return str;
  //         }
  //       )
  //       .substr(0, 15) || ''
  //   );
  // }

  const schema = yup.object().shape({
    user_email: yup
      .string()
      .email('Email inválido')
      .required('Email obrigatório'),
    user_name: yup.string().required('Nome obrigatório'),
    user_phone: yup.string().required('Telefone obrigatório'),
    // .matches(/^\([1-9]{2}\) (?:[2-8]|9[1-9])[0-9]{3}\-[0-9]{4}$/, {
    //   message: 'Insira um número válido.',
    //   excludeEmptyString: false,
    // }),
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 50">
        <path
          fill="#fefefe"
          fillOpacity="1"
          d="M0,50L1440,10L1440,0L0,0Z"
        ></path>
      </svg>

      <FormContainer>
        <Image
          src="/contato.png"
          height={180}
          width={300}
          alt="monitoring"
          priority
        />
        <FormStyle ref={form} onSubmit={handleSubmit(sendEmail)}>
          <h1>Entre em contato Conosco!</h1>
          <div>
            <Input
              placeholder="Digite seu nome"
              name="user_name"
              text_transform={'capitalize'}
              label="Nome:"
              error={errors.user_name?.message}
              type="text"
              register={register}
            />
            <Input
              placeholder="Digite seu email"
              name="user_email"
              register={register}
              label="Email:"
              error={errors.user_email?.message}
              type="text"
              autoComplete="off"
            />
            <Input
              name="user_phone"
              register={register}
              label="Telefone:"
              error={errors.user_phone?.message}
              autoComplete="off"
              placeholder="(DD) 00000-0000"
              type="tel"
              // onChange={(event) => {
              //   const { value } = event.target;
              //   event.target.value = normalizeCardNumber(value);
              // }}
            />
          </div>
          <TextArea
            placeholder="Digite sua mensagem"
            name="message"
            register={register}
            label="Mensagem:"
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
