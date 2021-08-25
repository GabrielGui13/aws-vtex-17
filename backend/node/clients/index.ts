import { IOClients } from '@vtex/api'

import DynamoDB from './dynamodb'

// Extend the default IOClients implementation with our own custom clients.
export class Clients extends IOClients {
  public get dynamodb() {
    return this.getOrSet('dynamodb', DynamoDB)
  }
}
