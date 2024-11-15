import { z } from 'zod'

export const createCustomerForm = z.strictObject({
  name: z
    .string()
    .min(2, 'O nome deve conter entre 2 e 30 caracteres')
    .max(30, 'O nome deve conter entre 2 e 30 caracteres'),
  email: z
    .string()
    .email('Email inválido!')
    .default('general.zod@candor.mil.kr'),
  cpf: z
    .string()
    .refine(value => {
      return value.length
    }, 'CPF é obrigatório!')
    .refine(value => {
      const replacedDoc = value.replace(/\D/g, '')
      return !(replacedDoc.length > 11 || replacedDoc.length < 11)
    }, 'CPF deve conter exatamente 11 números.')
    .transform(value => value.replace(/\D/g, '')),
  cellphone: z
    .string()
    .refine(value => {
      return value.length
    }, 'Telefone é obrigatório!')
    .refine(value => {
      const replacedDoc = value.replace(/\D/g, '')
      return !(replacedDoc.length > 11 || replacedDoc.length < 11)
    }, 'Telefone deve conter DDD + Número.')
    .transform(value => value.replace(/\D/g, '')),
  status: z.enum(['ativo', 'inativo', 'desativado', 'aguardando ativação']),
})

export type CreateCustomerForm = z.infer<typeof createCustomerForm>

export const formatCPF = (value: string) => {
  const cleanedValue = value.replace(/\D/g, '')

  if (cleanedValue.length <= 11) {
    return cleanedValue
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d{1,2})/, '$1-$2')
      .replace(/(-\d{2})\d+?$/, '$1')
  }
  return cleanedValue
}

export const formatPhoneNumber = (value: string) => {
  const cleanedValue = value.replace(/\D/g, '')

  if (cleanedValue.length <= 2) {
    return `(${cleanedValue}`
  }
  if (cleanedValue.length <= 6) {
    return `(${cleanedValue.slice(0, 2)}) ${cleanedValue.slice(2)}`
  }
  if (cleanedValue.length <= 10) {
    return `(${cleanedValue.slice(0, 2)}) ${cleanedValue.slice(2, 7)}-${cleanedValue.slice(7)}`
  }
  return `(${cleanedValue.slice(0, 2)}) ${cleanedValue.slice(2, 7)}-${cleanedValue.slice(7, 11)}`
}
