import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import z from 'zod'
import { getCustomerById } from '../../functions/get-customer-by-id'
import { updateCustomerById } from '../../functions/update-customer-by-id'

export const updateCustomerByIdRoute: FastifyPluginAsyncZod = async app => {
  app.put(
    '/customers/:id',
    {
      schema: {
        body: z.object({
          name: z.string().min(2).max(30).optional(),
          cpf: z.string().length(11).optional(),
          cellphone: z.string().length(11).optional(),
          email: z.string().email().optional(),
          status: z
            .enum(['Ativo', 'Inativo', 'Desativado', 'Aguardando ativação'])
            .optional(),
        }),
        params: z.object({
          id: z.string().cuid2(),
        }),
      },
    },
    async (request, reply) => {
      const { id } = request.params
      const customer = await getCustomerById(id)
      const { cellphone, cpf, email, name, status } = request.body
      if (
        customer.cellphone === cellphone &&
        customer.cpf === cpf &&
        customer.email === email &&
        customer.status === status &&
        customer.name === name
      ) {
        return reply
          .status(200)
          .send({ message: 'Sem mudanças. Alteração com valores iguais.' })
      }
      if (customer) {
        await updateCustomerById(id, { ...request.body })
        return reply.status(204).send()
      }
      return reply.status(404).send({ message: 'Customer not found!' })
    }
  )
}
