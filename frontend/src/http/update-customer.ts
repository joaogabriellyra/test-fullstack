interface createCustomerRequest {
  name: string
  email: string
  cellphone: string
  cpf: string
  status: 'Ativo' | 'Inativo' | 'Desativado' | 'Aguardando ativação'
}

export async function updateCustomer(
  customerId: string,
  customer: createCustomerRequest
) {
  await fetch(`http://localhost:3333/customers/${customerId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(customer),
  })
}
