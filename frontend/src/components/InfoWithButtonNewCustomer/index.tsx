import { Link } from 'react-router-dom'
import {
  CustomerContainer,
  LookAndButtonContainer,
  LookTheCustomersContainer,
  NewCustomerButton,
} from './styles'

export function InfoWithButtonNewCustomer() {
  return (
    <CustomerContainer>
      <LookAndButtonContainer>
        <LookTheCustomersContainer>
          <h2>Listagem de usuários</h2>
          <span>Escolha um cliente para visualizar os detalhes</span>
        </LookTheCustomersContainer>
        <Link to="new-customer">
          <NewCustomerButton>Novo cliente</NewCustomerButton>
        </Link>
      </LookAndButtonContainer>
    </CustomerContainer>
  )
}
