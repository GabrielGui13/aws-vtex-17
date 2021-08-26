import type { InstanceOptions, IOContext } from '@vtex/api'
import { ExternalClient } from '@vtex/api'

export default class DynamoDB extends ExternalClient {
  constructor(context: IOContext, options?: InstanceOptions) {
    super(
      'https://kjnud826rd.execute-api.us-east-2.amazonaws.com/development/leads',
      context,
      options
    )
  }

  public async getClients(): Promise<string> {
    return this.http.get('')
  }
}
