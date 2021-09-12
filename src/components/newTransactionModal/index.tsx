import Modal from 'react-modal';
import { Container } from './style';
import closeImg from '../..//assets/close.svg';
import { TransactionTypeContainer, RadioBox } from './style';
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import { FormEvent, useState } from 'react';
import { api } from '../../services/api';

interface NewTransactionModalProps {
  isNewTransactionModalOpen: boolean;
  onHandleCloseNewTransactionModal: () => void;
}

export const NewTransactionModal = ({ isNewTransactionModalOpen, onHandleCloseNewTransactionModal }: NewTransactionModalProps) => {
  const [title, setTitle] = useState('');
  const [value, setValue] = useState(0);
  const [category, setCategory] = useState('');
  const [type, setType] = useState('deposit');

  const handleCreateNewTransaction = (event: FormEvent) => {
    event.preventDefault();
    const data = { title, value, category, type }

    api.post('/transactions', data)
      
  }

  return (
    <Modal 
      isOpen={isNewTransactionModalOpen}
      onRequestClose={onHandleCloseNewTransactionModal}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >

      <button
        type="button"
        onClick={onHandleCloseNewTransactionModal}
        className="react-modal-close"
      >
        <img src={ closeImg } alt="Fechar modal" />
      </button>

      <Container onSubmit={ handleCreateNewTransaction }>
        <h2>Cadastrar transação</h2>

        <input
         type="text"
         placeholder="Titulo"
         value={title}
         onChange={event => setTitle(event.target.value)}
         name=""
         id=""
        />

        <input
         type="number"
         value={value}
         onChange={event => setValue(+event.target.value)}
         name=""
         placeholder="Valor"
         id=""
        />

        <TransactionTypeContainer>
          <RadioBox
            type="button"
            onClick={() => setType('deposit')}
            isActive={type === 'deposit'}
            activeColor="green"
          >
            <img src={ incomeImg } alt="Entrada" />
            <span>Entrada</span>
          </RadioBox>

          <RadioBox
            type="button"
            onClick={() => setType('withdraw')}
            isActive={type === 'withdraw'}
            activeColor="red"
          >
            <img src={ outcomeImg } alt="Saída" />
            <span>Saída</span>
          </RadioBox>
        </TransactionTypeContainer>

        <input
         type="text"
         placeholder="Categoria"
         value={ category }
         onChange={event => setCategory(event.target.value)}
         name=""
         id=""
        />

        <button type="submit">
          Cadastrar
        </button>
      </Container>
  </Modal>
  )
};