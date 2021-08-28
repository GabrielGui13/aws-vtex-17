import { UserInputError } from '@vtex/api'

export async function getClient(ctx: Context, next: () => Promise<any>) {
  const {
      vtex: {
          route: {
              params
          }
      },
    clients: { dynamodb: database },
  } = ctx

  const { email } = params 

  if (!email) {
    throw new UserInputError('Empty values')
  }

  const res = await database.getSpecificClient(email as string)

  if (!res) {
    throw new UserInputError('Empty values')
  }

  ctx.set('Cache-Control', 'no-cache no-store')
  ctx.body = res

  await next()
}
