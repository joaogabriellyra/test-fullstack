import {
  InfoWithButtonNewCustomerContainer,
  LookAndButtonContainer,
  LookTheCustomersContainer,
  NewCustomerLinkButton,
} from './styles'

export function InfoWithButtonNewCustomer() {
  return (
    <InfoWithButtonNewCustomerContainer>
      <LookAndButtonContainer>
        <LookTheCustomersContainer>
          <h2>Listagem de clientes</h2>
          <span>Escolha um cliente para visualizar os detalhes</span>
        </LookTheCustomersContainer>

        <NewCustomerLinkButton to="/new-customer">
          Novo cliente
        </NewCustomerLinkButton>
      </LookAndButtonContainer>
    </InfoWithButtonNewCustomerContainer>
  )
}
