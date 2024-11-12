import { User } from '@phosphor-icons/react'
import { PainelClientesContainer } from './styles'

export function PainelClientes() {
  return (
    <PainelClientesContainer>
      <User size={32} />
      <h1>Painel de clientes</h1>
    </PainelClientesContainer>
  )
}
