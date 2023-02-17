import { Container, StyledInput, StyledError } from './styles';
import {
  RegisterOptions,
  UseFormRegisterReturn,
  ValidationMode,
} from 'react-hook-form';

type Props = {
  placeholder?: string;
  label?: string;
  type?: string;
  register: (name: string, options?: RegisterOptions) => UseFormRegisterReturn;
  name?: string;
  error?: string;
  autoComplete?: string;
  id?: string;
  text_transform?: string;
  texttransform?: string;
};

const Input = ({
  placeholder,
  label,
  type,
  register,
  name,
  error,
  autoComplete,
  texttransform,
  ...rest
}: Props) => {
  return (
    <Container>
      <label>{label}</label>
      <StyledInput
        type={type}
        placeholder={placeholder}
        autoComplete={autoComplete}
        text_transform={texttransform}
        {...register(name)}
        {...rest}
      />
      <StyledError>{!!error && <span>{error}</span>}</StyledError>
    </Container>
  );
};

export default Input;
