import { UserInputError } from '@vtex/api'

export async function read(ctx: Context, next: () => Promise<any>) {
  const {
    clients: { dynamodb: database },
  } = ctx

  const query = await database.getClients()

  if (!query) {
    throw new UserInputError('Empty values')
  }

  ctx.body = query
  ctx.set('Cache-Control', 'no-cache no-store')

  await next()
}
