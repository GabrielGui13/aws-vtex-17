import { UserInputError } from '@vtex/api'
import { json } from 'co-body'

export async function updateClient(ctx: Context, next: () => Promise<any>) {
  const {
    vtex: {
        route: { params },
      },
    /* clients: { dynamodb: database }, */
  } = ctx

  const req = await json(ctx.req)
  const { email } = params 

  if (!req) {
    throw new UserInputError('Empty values')
  }

  /* database.updateProspectToClient(email, {...req}) */

  ctx.set('Cache-Control', 'no-cache no-store')
  ctx.body = {
    ...req,
    email
  }

  await next()
}