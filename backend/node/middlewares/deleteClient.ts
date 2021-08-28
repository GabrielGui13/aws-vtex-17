import { UserInputError } from '@vtex/api'

export async function deleteClient(ctx: Context, next: () => Promise<any>) {
  const {
    vtex: {
        route: { params },
      },
    clients: { dynamodb: database }
  } = ctx

  const { email } = params 

  if (!email) {
    throw new UserInputError('Empty values')
  }

  const res = database.deleteClient(email as string)

  ctx.set('Cache-Control', 'no-cache no-store')
  ctx.body = res

  await next()
}