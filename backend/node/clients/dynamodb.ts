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
    return this.http.get('', {
      metric: 'get-all-clients'
    })
  }

  public async getSpecificClient(email: string): Promise<string> {
    return this.http.get(`${email}`, {
      metric: 'get-unique-client'
    })
  }

  public async registerProspect({...prospectData}): Promise<string> {
    return this.http.post('', prospectData, {
      metric: 'register-prospect'
    })
  }

  public async updateProspectToClient(email: string, {...clientType}): Promise<string> {
    return this.http.put(`${email}`, clientType, {
      metric: 'update-prospect-to-client'
    })
  }
    
  public async deleteClient(email: string): Promise<any> {
    return this.http.delete(`${email}`, {
      metric: 'delete-client'
    })
  }
}
