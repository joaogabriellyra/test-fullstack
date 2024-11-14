import { Header } from './components/Header'
import { Main } from './components/Main'
import { PainelClientes } from './components/Painel-Clientes'
import { Router } from './router'

export function App() {
  return (
    <>
      <Header />
      <Main>
        <PainelClientes />
        <Router />
      </Main>
    </>
  )
}
