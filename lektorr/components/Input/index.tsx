import { Container, StyledInput, StyledError } from './styles';
import { RegisterOptions, UseFormRegisterReturn } from 'react-hook-form';

type Props = {
  placeholder?: string;
  label?: string;
  type?: string;
  register: (name: string, options?: RegisterOptions) => UseFormRegisterReturn;
  name?: string;
  error?: string;
  autoComplete?: string;
};

const Input = ({
  placeholder,
  label,
  type,
  register,
  name,
  error,
  autoComplete,
}: Props) => {
  return (
    <Container>
      <label>{label}</label>
      <StyledInput
        type={type}
        placeholder={placeholder}
        autoComplete={autoComplete}
        {...register(name)}
      />
      <StyledError>{!!error && <span>{error}</span>}</StyledError>
    </Container>
  );
};

export default Input;
