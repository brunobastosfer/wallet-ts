import Modal from 'react-modal';

interface NewTransactionModalProps {
  isNewTransactionModalOpen: boolean;
  onHandleCloseNewTransactionModal: () => void;
}

export const NewTransactionModal = ({ isNewTransactionModalOpen, onHandleCloseNewTransactionModal }: NewTransactionModalProps) => {
  return (
    <Modal 
    isOpen={isNewTransactionModalOpen}
    onRequestClose={onHandleCloseNewTransactionModal}
    >
      <h2>Cadastrar transação</h2>
  </Modal>
  )
};