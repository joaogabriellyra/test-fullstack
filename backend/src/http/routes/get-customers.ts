import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import { getCustomers } from '../../functions/get-customers'

export const getCustomersRoute: FastifyPluginAsyncZod = async app => {
  app.get('/customers', async (_request, reply) => {
    const customers = await getCustomers()
    return reply.status(200).send(customers)
  })
}
