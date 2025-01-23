interface getCustomersRequest {
  id: string
  name: string
  email: string
  cellphone: string
  cpf: string
  status: 'Ativo' | 'Inativo' | 'Desativado' | 'Aguardando ativação'
  createdAt?: string
}

export async function getCustomers(): Promise<getCustomersRequest[]> {
  const response = await fetch('http://localhost:3333/customers')
  const data = await response.json()
  return data
}
