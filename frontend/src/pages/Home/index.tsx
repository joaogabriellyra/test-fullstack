import { useQuery } from '@tanstack/react-query'
import { InfoWithButtonNewCustomer } from '../../components/InfoWithButtonNewCustomer'
import { getCustomers } from '../../http/get-customers'
import {
  CpfAndCellphoneContainer,
  EditLinkButton,
  NameAndEmailContainer,
  ShowingCustomersParagraph,
  StatusIndicator,
  Table,
  TableContainer,
} from './style'
import { formatCPF, formatPhoneNumber } from '../../validationsForm'

function whatIsTheStatusColor(statusCadastro: string) {
  if (statusCadastro === 'Ativo') return 'green'
  if (statusCadastro === 'Inativo') return 'red'
  if (statusCadastro === 'Aguardando ativação') return 'yellow'
  if (statusCadastro === 'Desativado') return 'snow'
  return 'green'
}

export function Home() {
  const { data } = useQuery({
    queryKey: ['customers'],
    queryFn: getCustomers,
    staleTime: 1000 * 60,
  })
  const sortedCustomers = data?.sort((a, b) => {
    if (!a.createdAt) return 1
    if (!b.createdAt) return -1
    return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
  })
  console.log(data)
  return (
    <>
      <InfoWithButtonNewCustomer />
      <TableContainer>
        <Table>
          <tbody>
            {sortedCustomers?.map(
              ({ name, cellphone, cpf, email, id, status }) => {
                const statusIndicatorColor = whatIsTheStatusColor(status)
                return (
                  <tr key={id}>
                    <td>
                      <NameAndEmailContainer>
                        <h3>{name}</h3>
                        <span>{email}</span>
                      </NameAndEmailContainer>
                    </td>
                    <td>
                      <CpfAndCellphoneContainer>
                        <span>{formatCPF(cpf)}</span>
                        <span>{formatPhoneNumber(cellphone)}</span>
                      </CpfAndCellphoneContainer>
                    </td>
                    <td>
                      <StatusIndicator $statusColor={statusIndicatorColor}>
                        {status}
                      </StatusIndicator>
                    </td>
                    <td>
                      <EditLinkButton to={`edit-customer/${id}`}>
                        Editar
                      </EditLinkButton>
                    </td>
                  </tr>
                )
              }
            )}
          </tbody>
        </Table>
      </TableContainer>
      <ShowingCustomersParagraph>
        Exibindo <span>{data?.length} </span>clientes
      </ShowingCustomersParagraph>
    </>
  )
}
