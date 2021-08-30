import type { ClientsConfig, ServiceContext } from '@vtex/api'
import { method, Service } from '@vtex/api'

import { Clients } from './clients'
import { createProspect } from './middlewares/createProspect'
import { getAllClients } from './middlewares/getAllClients'
import { updateClient } from './middlewares/updateClient'
import { getClient } from './middlewares/getClient'
import { deleteClient } from './middlewares/deleteClient'

const TIMEOUT_MS = 3000

const clients: ClientsConfig<Clients> = {
  implementation: Clients,
  options: {
    default: {
      retries: 2,
      timeout: TIMEOUT_MS,
    },
  },
}

declare global {
  type Context = ServiceContext<Clients>
}

export default new Service({
  clients,
  routes: {
    database: method({
      GET: [getAllClients],
      POST: [createProspect],
    }),
    databaseParams: method({
      GET: [getClient],
      PUT: [updateClient],
      DELETE: [deleteClient]
    }),
  },
})
