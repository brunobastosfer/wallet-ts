import { Summary } from '../Summarry';
import { TransactionTable } from '../TransactionsTable';
import { Container } from './styles';

export const Dashboard = () => {
  return (
    <Container>
      <Summary />
      <TransactionTable />
    </Container>
  );
}