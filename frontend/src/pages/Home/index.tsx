import { usuarios } from './mock-users'
import {
  CpfAndCellphoneContainer,
  EditButton,
  NameAndEmailContainer,
  StatusIndicator,
  Table,
  TableContainer,
} from './style'

function whatIsTheStatusColor(statusCadastro: string) {
  if (statusCadastro === 'Ativo') return 'green'
  if (statusCadastro === 'Inativo') return 'red'
  if (statusCadastro === 'Aguardando ativação') return 'yellow'
  if (statusCadastro === 'Desativado') return 'snow'
  return 'green'
}

export function Home() {
  return (
    <>
      <TableContainer>
        <Table>
          <tbody>
            {usuarios.map(({ celular, cpf, email, nome, statusCadastro }) => {
              const statusIndicatorColor = whatIsTheStatusColor(statusCadastro)
              return (
                <tr key={cpf}>
                  <td>
                    <NameAndEmailContainer>
                      <h3>{nome}</h3>
                      <span>{email}</span>
                    </NameAndEmailContainer>
                  </td>
                  <td>
                    <CpfAndCellphoneContainer>
                      <span>{cpf}</span>
                      <span>{celular}</span>
                    </CpfAndCellphoneContainer>
                  </td>
                  <td>
                    <StatusIndicator statusColor={statusIndicatorColor}>
                      {statusCadastro}
                    </StatusIndicator>
                  </td>
                  <td>
                    <EditButton>Editar</EditButton>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </Table>
      </TableContainer>
      <span>Exibindo {usuarios.length} clientes</span>
    </>
  )
}
