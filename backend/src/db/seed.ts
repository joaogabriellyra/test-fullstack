import { client, db } from '.'
import { customers } from './schema'

async function seed() {
  await db.delete(customers)

  await db.insert(customers).values([
    {
      name: 'João Silva',
      cellphone: '11999999999',
      cpf: '12345678900',
      email: 'joao@email.com',
      status: 'Ativo',
    },
    {
      name: 'Maria Souza',
      cellphone: '11988888888',
      cpf: '98765432100',
      email: 'maria@email.com',
      status: 'Inativo',
    },
    {
      name: 'Carlos Pereira',
      cellphone: '11977777777',
      cpf: '12345678900',
      email: 'carlos@email.com',
      status: 'Desativado',
    },
    {
      name: 'Ana Costa',
      cellphone: '11999999999',
      cpf: '12345678900',
      email: 'ana@email.com',
      status: 'Aguardando ativação',
    },
  ])
}

seed().finally(() => {
  client.end()
})
