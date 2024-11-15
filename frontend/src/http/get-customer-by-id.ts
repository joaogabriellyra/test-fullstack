interface getCustomersRequest {
  id: string
  name: string
  email: string
  cellphone: string
  cpf: string
  status: 'Ativo' | 'Inativo' | 'Desativado' | 'Aguardando ativação'
}

export async function getCustomerById(
  customerId: string
): Promise<getCustomersRequest> {
  const response = await fetch(`http://localhost:3333/customers/${customerId}`)
  const data = await response.json()

  return data
}
