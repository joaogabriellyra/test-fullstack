import { db } from '../db'
import { customers } from '../db/schema'

interface CreateCustomerRequest {
  name: string
  email: string
  cellphone: string
  cpf: string
  status: 'Ativo' | 'Inativo' | 'Desativado' | 'Aguardando ativação'
}

export async function createCustomer({
  name,
  cellphone,
  cpf,
  email,
  status,
}: CreateCustomerRequest) {
  const result = await db
    .insert(customers)
    .values({
      name,
      cellphone,
      cpf,
      email,
      status,
    })
    .returning()

  const customer = result[0]

  return {
    customer,
  }
}
