import { client, db } from '.'
import { customers } from './schema'

async function seed() {
  await db.delete(customers)

  await db.insert(customers).values([
    {
      name: 'Ana Cornachi',
      cellphone: '11999999999',
      cpf: '12345678900',
      email: 'acornachi@uolinc.com',
      status: 'Ativo',
    },
    {
      name: 'Catharina Russo',
      cellphone: '11988888888',
      cpf: '98765432100',
      email: 'clanigra@uolinc.com',
      status: 'Ativo',
    },
    {
      name: 'Samuel Pereira',
      cellphone: '11977777777',
      cpf: '12345678900',
      email: 'vte_spereira@uolinc.com',
      status: 'Ativo',
    },
    {
      name: 'Thiago Mendonça',
      cellphone: '11979999999',
      cpf: '12345678900',
      email: 'tmendonca@uolinc.com',
      status: 'Ativo',
    },
    {
      name: 'João Gabriel Lyra',
      cellphone: '81998711311',
      cpf: '11170005403',
      email: 'joaolyra@uolinc.com',
      status: 'Aguardando ativação',
    },
  ])
}

seed().finally(() => {
  client.end()
})
