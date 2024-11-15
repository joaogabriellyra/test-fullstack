import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import z from 'zod'
import { createCustomer } from '../../functions/create-customer'
import { savingClientsInJson } from '../../functions/savingClientsInJson'

export const createCustomerRoute: FastifyPluginAsyncZod = async app => {
  app.post(
    '/customers',
    {
      schema: {
        body: z.object({
          name: z.string().min(2).max(30),
          cpf: z.string().length(11),
          cellphone: z.string().length(11),
          email: z.string().email(),
          status: z.enum([
            'Ativo',
            'Inativo',
            'Desativado',
            'Aguardando ativação',
          ]),
        }),
      },
    },
    async (request, reply) => {
      const { cellphone, cpf, email, name, status } = request.body

      await createCustomer({
        name: name,
        cpf: cpf,
        email: email,
        status: status,
        cellphone: cellphone,
      })
      await savingClientsInJson()
      return reply.status(201).send()
    }
  )
}
