import { zodResolver } from '@hookform/resolvers/zod'
import { Controller, useForm } from 'react-hook-form'
import {
  type CreateCustomerForm,
  createCustomerForm,
  formatCPF,
  formatPhoneNumber,
} from './validations'
import {
  BackButton,
  CreateButton,
  ButtonsContainer,
  Form,
  InfoContainer,
  Input,
  NewCustomerPageContainer,
  Select,
  ErrorMessage,
} from './styles'
import { Link } from 'react-router-dom'
import { WarningCircle } from '@phosphor-icons/react'

export function NewCustomerPage() {
  const { register, handleSubmit, control, formState } =
    useForm<CreateCustomerForm>({
      resolver: zodResolver(createCustomerForm),
      defaultValues: {
        cpf: '',
        cellphone: '',
      },
    })

  function handleCreateCustomer(data: CreateCustomerForm) {
    console.log(data)
  }

  return (
    <NewCustomerPageContainer>
      <InfoContainer>
        <h3>Novo usuário</h3>
        <span>Informe os campos a seguir para criar um novo usuário:</span>
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
          defaultValue="status"
          $hasError={formState.errors.status?.message}
        >
          <option value="status">Status</option>
          <option value="ativo">Ativo</option>
          <option value="inativo">Inativo</option>
          <option value="desativado">Desativado</option>
          <option value="aguardando ativação">Aguardando ativação</option>
        </Select>
        {formState.errors.status && (
          <ErrorMessage>
            <WarningCircle size={24} />
            Por favor escolha um status válido
          </ErrorMessage>
        )}
        <ButtonsContainer>
          <CreateButton type="submit">Criar</CreateButton>
          <Link to="/">
            <BackButton type="button">Voltar</BackButton>
          </Link>
        </ButtonsContainer>
      </Form>
    </NewCustomerPageContainer>
  )
}
