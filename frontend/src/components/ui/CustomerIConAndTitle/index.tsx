import { User } from '@phosphor-icons/react'
import { PainelClientesContainer } from './styles'
import { Separator } from '../../Separator'

export function CustomerIconAndTitle() {
  return (
    <>
      <PainelClientesContainer>
        <User size={32} />
        <h1>Painel de clientes</h1>
      </PainelClientesContainer>
      <Separator />
    </>
  )
}
