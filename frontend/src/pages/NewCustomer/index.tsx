import { Controller, useFormContext } from 'react-hook-form'
import {
  type CreateCustomerForm,
  formatCPF,
  formatPhoneNumber,
} from '../../validationsForm'
import {
  BackLinkButton,
  CreateButton,
  ButtonsContainer,
  Form,
  InfoContainer,
  Input,
  NewCustomerPageContainer,
  Select,
  ErrorMessage,
} from './styles'
import { WarningCircle } from '@phosphor-icons/react'
import { createCustomer } from '../../http/create-customer'
import { useQueryClient } from '@tanstack/react-query'

export function NewCustomerPage() {
  const queryClient = useQueryClient()

  const { register, formState, control, handleSubmit, reset } =
    useFormContext<CreateCustomerForm>()

  async function handleCreateCustomer(data: CreateCustomerForm) {
    await createCustomer(data)
    reset()
    queryClient.invalidateQueries({ queryKey: ['customer'] })
  }

  return (
    <NewCustomerPageContainer>
      <InfoContainer>
        <h3>Novo cliente</h3>
        <span>Informe os campos a seguir para criar um novo cliente:</span>
      </InfoContainer>
      <Form onSubmit={handleSubmit(handleCreateCustomer)}>
        <Input
          type="text"
          placeholder="Nome: Linus Torvalds"
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
          placeholder="E-mail: linux@email.com"
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
                placeholder="CPF: 000.000.000-00"
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
                placeholder="Telefone: (11) 99999-9999"
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
          defaultValue="Status"
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
          <CreateButton type="submit">Criar</CreateButton>
          <BackLinkButton to="/">Voltar</BackLinkButton>
        </ButtonsContainer>
      </Form>
    </NewCustomerPageContainer>
  )
}
