import type { InstanceOptions, IOContext, IOResponse } from '@vtex/api'
import { ExternalClient } from '@vtex/api'

export default class DynamoDB extends ExternalClient {
  constructor(context: IOContext, options?: InstanceOptions) {
    super('http://httpstat.us', context, options)
  }

  /*   public async getStatus(status: number): Promise<string> {
    return this.http.get(status.toString())
  } */
}
