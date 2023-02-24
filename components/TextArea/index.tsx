import React from 'react';
import { Container, StyledError } from './styles';
import { RegisterOptions, UseFormRegisterReturn } from 'react-hook-form';

type Props = {
  placeholder?: string;
  label?: string;
  register: (name: string, options?: RegisterOptions) => UseFormRegisterReturn;
  name?: string;
  error?: string;
  id?: string;
};

const TextArea = ({ placeholder, label, register, name, error }: Props) => {
  return (
    <Container>
      <label>{label}</label>
      <textarea
        placeholder={placeholder}
        {...register(name)}
        rows={10}
        cols={10}
      />
      <StyledError>{!!error && <span>{error}</span>}</StyledError>
    </Container>
  );
};

export default TextArea;
