import { Controller, useFormContext } from 'react-hook-form'
import {
  formatCPF,
  formatPhoneNumber,
  type CreateCustomerForm,
} from '../../validationsForm'
import {
  BackLinkButton,
  ButtonsContainer,
  EditCustomerPageContainer,
  ErrorMessage,
  Form,
  InfoContainer,
  Input,
  Select,
  UpdateButton,
} from './styles'
import { WarningCircle } from '@phosphor-icons/react'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { getCustomers } from '../../http/get-customers'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { updateCustomer } from '../../http/update-customer'

export function EditCustomerPage() {
  const [successMessage, setSuccessMessage] = useState('')
  const { register, formState, control, handleSubmit, reset } =
    useFormContext<CreateCustomerForm>()
  const queryClient = useQueryClient()
  const { id } = useParams()

  const { data } = useQuery({
    queryKey: ['customers'],
    queryFn: getCustomers,
    staleTime: 1000 * 60,
  })

  useEffect(() => {
    const customerWhoWillBeEdited = data?.find(customer => customer.id === id)
    if (customerWhoWillBeEdited) {
      reset({
        name: customerWhoWillBeEdited.name || '',
        email: customerWhoWillBeEdited.email || '',
        cellphone: formatPhoneNumber(customerWhoWillBeEdited.cellphone) || '',
        status: customerWhoWillBeEdited.status || 'Status',
        cpf: formatCPF(customerWhoWillBeEdited.cpf) || '',
      })
    }
  }, [id, data, reset])

  async function handleEditCustomer(data: CreateCustomerForm) {
    if (id) {
      await updateCustomer(id, data)
      reset()
      queryClient.invalidateQueries({ queryKey: ['customers'] })
      setSuccessMessage('Cadastro atualizado com sucesso!')
      setTimeout(() => setSuccessMessage(''), 3000)
    }
  }

  return (
    <EditCustomerPageContainer>
      <InfoContainer>
        <h3>Alterar dados do cliente</h3>
        <span>
          Edite os campos a seguir para atualizar as informações do cliente:
        </span>
        {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
      </InfoContainer>
      <Form onSubmit={handleSubmit(handleEditCustomer)}>
        <Input
          type="text"
          {...register('name')}
          $hasError={formState.errors.name?.message}
        />
        {formState.errors.name && (
          <ErrorMessage>
            <WarningCircle size={24} /> {formState.errors.name?.message}
          </ErrorMessage>
        )}
        <Input
          type="email"
          {...register('email')}
          $hasError={formState.errors.email?.message}
        />
        {formState.errors.email && (
          <ErrorMessage>
            <WarningCircle size={24} /> {formState.errors.email?.message}
          </ErrorMessage>
        )}
        <Controller
          control={control}
          name="cpf"
          render={({ field: { onChange, value } }) => {
            return (
              <Input
                {...register('cpf')}
                value={value}
                onChange={e => {
                  const { value } = e.target
                  onChange(formatCPF(value))
                }}
                $hasError={formState.errors.cpf?.message}
              />
            )
          }}
        />
        {formState.errors.cpf && (
          <ErrorMessage>
            <WarningCircle size={24} /> {formState.errors.cpf?.message}
          </ErrorMessage>
        )}
        <Controller
          control={control}
          name="cellphone"
          render={({ field: { onChange, value } }) => {
            return (
              <Input
                {...register('cellphone')}
                value={value}
                onChange={e => {
                  const { value } = e.target
                  onChange(formatPhoneNumber(value))
                }}
                $hasError={formState.errors.cellphone?.message}
              />
            )
          }}
        />
        {formState.errors.cellphone && (
          <ErrorMessage>
            <WarningCircle size={24} /> {formState.errors.cellphone?.message}
          </ErrorMessage>
        )}
        <Select
          {...register('status')}
          $hasError={formState.errors.status?.message}
        >
          <option value="Status">Status</option>
          <option value="Ativo">Ativo</option>
          <option value="Inativo">Inativo</option>
          <option value="Desativado">Desativado</option>
          <option value="Aguardando ativação">Aguardando ativação</option>
        </Select>
        {formState.errors.status && (
          <ErrorMessage>
            <WarningCircle size={24} />
            Por favor escolha um status válido
          </ErrorMessage>
        )}
        <ButtonsContainer>
          <UpdateButton type="submit">Atualizar</UpdateButton>
          <BackLinkButton to="/">Voltar</BackLinkButton>
        </ButtonsContainer>
      </Form>
    </EditCustomerPageContainer>
  )
}
