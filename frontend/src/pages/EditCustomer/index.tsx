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
  const queryClient = useQueryClient()
  const [customerWhoWillBeEdited, setCustomerWhoWillBeEdited] = useState({
    name: '',
    email: '',
    cellphone: '',
    status: 'Status',
    cpf: '',
  })
  const { id } = useParams()

  const { data } = useQuery({
    queryKey: ['customers'],
    queryFn: getCustomers,
    staleTime: 1000 * 60,
  })

  useEffect(() => {
    const customerWhoWillBeEdited = data?.find(customer => customer.id === id)
    if (customerWhoWillBeEdited) {
      setCustomerWhoWillBeEdited(customerWhoWillBeEdited)
    }
  }, [id, data])
  const { register, formState, control, handleSubmit, reset } =
    useFormContext<CreateCustomerForm>()

  function handleEditCustomer(data: CreateCustomerForm) {
    if (id) {
      updateCustomer(id, data)
      reset()
      queryClient.invalidateQueries({ queryKey: ['customer'] })
    }
  }

  return (
    <EditCustomerPageContainer>
      <InfoContainer>
        <h3>Alterar dados do cliente</h3>
        <span>
          Edite os campos a seguir para atualizar as informações do cliente:
        </span>
      </InfoContainer>
      <Form onSubmit={handleSubmit(handleEditCustomer)}>
        <Input
          type="text"
          {...register('name')}
          placeholder={`Nome: ${customerWhoWillBeEdited.name}`}
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
          placeholder={`E-mail: ${customerWhoWillBeEdited.email}`}
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
                placeholder={`CPF: ${customerWhoWillBeEdited.cpf}`}
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
                placeholder={`Telefone: ${customerWhoWillBeEdited.cellphone}`}
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
          defaultValue={customerWhoWillBeEdited.status}
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
