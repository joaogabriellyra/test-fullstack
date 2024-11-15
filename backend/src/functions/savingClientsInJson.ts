import fs from 'node:fs/promises'
import { getCustomers } from './get-customers'

interface getCustomersRequest {
  id: string
  name: string
  email: string
  cellphone: string
  cpf: string
  status: 'Ativo' | 'Inativo' | 'Desativado' | 'Aguardando ativação'
}

export async function savingClientsInJson() {
  try {
    const allClients = await getCustomers()
    await fs.writeFile(
      './clients_backup.json',
      JSON.stringify(allClients, null, 2),
      'utf8'
    )

    console.log('Backup de clientes salvo com sucesso em arquivo json')
  } catch (error) {
    console.error('Erro ao fazer backup', error)
  }
}
