import { Header } from './components/Header'
import { Main } from './components/Main'
import { PainelClientes } from './components/Painel-Clientes'

export function App() {
  return (
    <>
      <Header />
      <Main>
        <PainelClientes />
      </Main>
    </>
  )
}
