import { MouseEventHandler } from 'react';
import { Container } from './styles';

interface TesteProps {
  open: boolean;
  onClick?: React.MouseEventHandler;
  handleOpenNav: () => any;
}

const BurguerMenu = ({ handleOpenNav, open, onClick }: TesteProps) => {
  return (
    <Container onClick={handleOpenNav} open={open}>
      <div></div>
      <div></div>
      <div></div>
    </Container>
  );
};

export default BurguerMenu;
