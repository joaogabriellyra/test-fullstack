import { eq } from 'drizzle-orm'
import { db } from '../db'
import { customers } from '../db/schema'

interface getCustomersByIdRequest {
  name: string
  email: string
  cellphone: string
  cpf: string
  status: 'Ativo' | 'Inativo' | 'Desativado' | 'Aguardando ativação'
}

export async function getCustomerById(
  customerId: string
): Promise<getCustomersByIdRequest> {
  const result = await db
    .select({
      name: customers.name,
      email: customers.email,
      cellphone: customers.cellphone,
      cpf: customers.cpf,
      status: customers.status,
    })
    .from(customers)
    .where(eq(customers.id, customerId))

  return result[0]
}
