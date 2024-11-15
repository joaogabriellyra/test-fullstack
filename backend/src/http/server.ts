import fastify from 'fastify'
import {
  serializerCompiler,
  validatorCompiler,
  type ZodTypeProvider,
} from 'fastify-type-provider-zod'
import { createCustomerRoute } from './routes/create-customer'
import { getCustomerByIdRoute } from './routes/get-customer-by-id'
import { getCustomersRoute } from './routes/get-customers'
import { updateCustomerByIdRoute } from './routes/update-customer-by-id'
import fastifyCors from '@fastify/cors'

const app = fastify().withTypeProvider<ZodTypeProvider>()

app.register(fastifyCors, {
  origin: '*',
})

app.setValidatorCompiler(validatorCompiler)
app.setSerializerCompiler(serializerCompiler)

app.register(createCustomerRoute)
app.register(getCustomerByIdRoute)
app.register(getCustomersRoute)
app.register(updateCustomerByIdRoute)

app
  .listen({
    port: 3333,
  })
  .then(() => console.log('server listening on port 3333'))
