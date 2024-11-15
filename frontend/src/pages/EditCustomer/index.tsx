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

export function EditCustomerPage() {
  const user = {
    name: 'João Silva',
    email: 'joao@email.com',
    cpf: '12345678900',
    cellphone: '81998711311',
    status: 'inativo',
  }

  const { register, formState, control, handleSubmit } =
    useFormContext<CreateCustomerForm>()

  function handleEditCustomer(data: CreateCustomerForm) {
    console.log(data)
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
          placeholder={`Nome: ${user.name}`}
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
          placeholder={`E-mail: ${user.email}`}
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
                placeholder={`CPF: ${user.cpf}`}
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
                placeholder={`Telefone: ${user.cellphone}`}
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
          <UpdateButton type="submit">Atualizar</UpdateButton>
          <BackLinkButton to="/">Voltar</BackLinkButton>
        </ButtonsContainer>
      </Form>
    </EditCustomerPageContainer>
  )
}
