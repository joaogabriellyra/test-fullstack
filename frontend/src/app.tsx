import { FormProvider, useForm } from 'react-hook-form'
import { Header } from './components/Header'
import { Main } from './components/Main'
import { CustomerIconAndTitle } from './components/ui/CustomerIConAndTitle'
import { Router } from './router'
import { createCustomerForm, type CreateCustomerForm } from './validationsForm'
import { zodResolver } from '@hookform/resolvers/zod'

export function App() {
  const newCustomerForm = useForm<CreateCustomerForm>({
    resolver: zodResolver(createCustomerForm),
    defaultValues: {
      cpf: '',
      cellphone: '',
    },
  })

  return (
    <>
      <Header />
      <Main>
        <CustomerIconAndTitle />
        <FormProvider {...newCustomerForm}>
          <Router />
        </FormProvider>
      </Main>
    </>
  )
}
