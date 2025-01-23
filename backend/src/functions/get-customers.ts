import { db } from '../db'
import { customers } from '../db/schema'

interface getCustomersRequest {
  id: string
  name: string
  email: string
  cellphone: string
  cpf: string
  status: 'Ativo' | 'Inativo' | 'Desativado' | 'Aguardando ativação'
  createdAt?: Date
}
export async function getCustomers(): Promise<getCustomersRequest[]> {
  return await db
    .select({
      id: customers.id,
      name: customers.name,
      email: customers.email,
      cellphone: customers.cellphone,
      cpf: customers.cpf,
      status: customers.status,
      createdAt: customers.createdAt,
    })
    .from(customers)
}
