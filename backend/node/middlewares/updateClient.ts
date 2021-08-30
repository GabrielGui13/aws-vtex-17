import { UserInputError } from '@vtex/api'
import { json } from 'co-body'

export async function updateClient(ctx: Context, next: () => Promise<any>) {
  const {
    vtex: {
        route: { params },
      },
    clients: { dynamodb: database }
  } = ctx

  const req = await json(ctx.req)
  const { email } = params 

  if (!req || !email) {
    throw new UserInputError('Empty values')
  }

  const res = database.updateProspectToClient(email as string, {...req})

  ctx.set('Cache-Control', 'no-cache no-store')
  ctx.body = {
    ...res.statusCode
  }

  await next()
}