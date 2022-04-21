import { Container } from './styles';

export function TransactionsTable () {
  return (
    <Container>
     <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Preço</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

     
        <tbody>
          <tr>
            <td >Compras no supermercado</td>
            <td  className="deposit" > R$ 500,00</td>
            <td >Alimentação</td>
            <td  >20/06/2020</td>
          </tr>                 
        </tbody>

        <tbody>
          <tr>
            <td  >Aluguel</td>
            <td className="withdraw">- R$ 500,00</td>
            <td  >Alimentação</td>
            <td  >20/06/2020</td>
          </tr>                 
        </tbody>
 
    </table>

    </Container>
  );
}