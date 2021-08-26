import { IOClients } from '@vtex/api'

import DynamoDB from './dynamodb'

export class Clients extends IOClients {
  public get dynamodb() {
    return this.getOrSet('dynamodb', DynamoDB)
  }
}
