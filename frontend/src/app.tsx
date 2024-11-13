import { Header } from './components/Header'
import { Main } from './components/Main'
import { PainelClientes } from './components/Painel-Clientes'
import { Form } from './components/Table'
import { Customers } from './pages/Customers'

export function App() {
  return (
    <>
      <Header />
      <Main>
        <PainelClientes />
        <Customers />
        <Form />
      </Main>
    </>
  )
}
