import { createId } from '@paralleldrive/cuid2'
import { pgTable, text, varchar, pgEnum, timestamp } from 'drizzle-orm/pg-core'

export const statusEnum = pgEnum('status', [
  'Ativo',
  'Inativo',
  'Desativado',
  'Aguardando ativação',
])

export const customers = pgTable('customers', {
  id: text('id')
    .primaryKey()
    .$defaultFn(() => createId()),
  name: text('name').notNull(),
  email: text('email').notNull(),
  cpf: varchar('cpf', { length: 11 }).notNull(),
  cellphone: varchar('cellphone', { length: 11 }).notNull(),
  status: statusEnum().notNull(),
  createdAt: timestamp('created_at', { withTimezone: true })
    .notNull()
    .defaultNow(),
})
