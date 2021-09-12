import { useEffect } from "react"
import { api } from "../../services/api"
import { Container } from "./style"

export const TransactionTable = () => {

  useEffect(() => {
    api('/transactions')
      .then(result => console.log(result.data))
  }, [])

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Desenvolvimento de website</td>
            <td className="deposit">R$12.000</td>
            <td>Desenvolvimento</td>
            <td>20/02/2021</td>
          </tr>
          <tr>
            <td>Cartão</td>
            <td className="withdraw">- R$12.000</td>
            <td>Despesas</td>
            <td>15/02/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}