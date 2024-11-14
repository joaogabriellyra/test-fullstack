import { Header } from './components/Header'
import { Main } from './components/Main'
import { PainelClientes } from './components/Painel-Clientes'
import { Home } from './pages/Home'
import { Customers } from './pages/Customers'

export function App() {
  return (
    <>
      <Header />
      <Main>
        <PainelClientes />
        <Customers />
        <Home />
      </Main>
    </>
  )
}
