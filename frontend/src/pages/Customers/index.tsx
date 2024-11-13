import {
  CustomerContainer,
  LookAndButtonContainer,
  LookTheCustomersContainer,
  NewCustomerButton,
} from './styles'

export function Customers() {
  return (
    <CustomerContainer>
      <LookAndButtonContainer>
        <LookTheCustomersContainer>
          <h2>Listagem de usuários</h2>
          <span>Escolha um cliente para visualizar os detalhes</span>
        </LookTheCustomersContainer>
        <NewCustomerButton>Novo cliente</NewCustomerButton>
      </LookAndButtonContainer>
    </CustomerContainer>
  )
}
