import { Link } from 'react-router-dom'
import {
  InfoWithButtonNewCustomerContainer,
  LookAndButtonContainer,
  LookTheCustomersContainer,
  NewCustomerButton,
} from './styles'

export function InfoWithButtonNewCustomer() {
  return (
    <InfoWithButtonNewCustomerContainer>
      <LookAndButtonContainer>
        <LookTheCustomersContainer>
          <h2>Listagem de usuários</h2>
          <span>Escolha um cliente para visualizar os detalhes</span>
        </LookTheCustomersContainer>
        <Link to="new-customer">
          <NewCustomerButton type="button">Novo cliente</NewCustomerButton>
        </Link>
      </LookAndButtonContainer>
    </InfoWithButtonNewCustomerContainer>
  )
}
