import { UserInputError } from '@vtex/api'
import { json } from 'co-body'

export async function createProspect(ctx: Context, next: () => Promise<any>) {
  const {
    clients: { dynamodb: database },
  } = ctx

  const req = await json(ctx.req)

  if (!req) {
    throw new UserInputError('Empty values')
  }

  const { nome, email, telefone, tipo, data_criacao } = req

  if (
    !nome ||
    !email ||
    !telefone ||
    !tipo ||
    !data_criacao
  ) {
    throw new UserInputError('Empty values')
  }

   const res = await database.registerProspect(req)

  ctx.set('Cache-Control', 'no-cache no-store')
  ctx.body = {
    res
  }

  await next()
}
