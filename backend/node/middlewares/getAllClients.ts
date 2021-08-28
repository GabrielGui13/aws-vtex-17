import { UserInputError } from '@vtex/api'

export async function getAllClients(ctx: Context, next: () => Promise<any>) {
  const {
    clients: { dynamodb: database },
  } = ctx

  const res = await database.getClients()

  if (!res) {
    throw new UserInputError('Empty values')
  }

  ctx.set('Cache-Control', 'no-cache no-store')
  ctx.body = res

  await next()
}
