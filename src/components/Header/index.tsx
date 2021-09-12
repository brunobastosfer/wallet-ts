import logoImg from '../../assets/logo.svg';
import { Container, Content } from './style';

interface HeaderProps {
  onOpenNewTransactionModal: () => void; 
}


export const Header = ({ onOpenNewTransactionModal }: HeaderProps) => {
  return (
    <Container>
      <Content>
        <img src={ logoImg } alt="Wallet logo" />
        <button onClick={ onOpenNewTransactionModal }>Adicionar transação</button>
      </Content>
    </Container>
  )
}