import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import z from 'zod'
import { getCustomerById } from '../../functions/get-customer-by-id'

export const getCustomerByIdRoute: FastifyPluginAsyncZod = async app => {
  app.get(
    '/customers/:id',
    {
      schema: {
        params: z.object({
          id: z.string().cuid2(),
        }),
      },
    },
    async (request, reply) => {
      const { id } = request.params
      const customer = await getCustomerById(id)
      if (customer) {
        return reply.status(200).send(customer)
      }
      return reply.status(404).send({ message: 'Customer not found!' })
    }
  )
}
