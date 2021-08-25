import { UserInputError } from '@vtex/api'
import { json } from 'co-body'

export async function write(ctx: Context, next: () => Promise<any>) {
  const req = await json(ctx.req)

  if (!req) {
    throw new UserInputError('Empty values')
  }

  // const { name, email, telefone } = req

  ctx.body = {
    ...req,
    okay: true,
  }
  ctx.set('Cache-Control', 'no-cache no-store')

  await next()
}
