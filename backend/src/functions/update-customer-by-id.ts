import { eq } from 'drizzle-orm'
import { db } from '../db'
import { customers } from '../db/schema'

interface updateCustomersByIdRequest {
  id?: string
  name?: string
  email?: string
  cellphone?: string
  cpf?: string
  status?: 'Ativo' | 'Inativo' | 'Desativado' | 'Aguardando ativação'
}

export async function updateCustomerById(
  customerId: string,
  customerBody: updateCustomersByIdRequest
): Promise<updateCustomersByIdRequest> {
  const result = await db
    .update(customers)
    .set({ ...customerBody })
    .where(eq(customers.id, customerId))
    .returning()

  return result[0]
}
