import { InMemoryCache } from '@apollo/client'
import { ApolloClient } from '@apollo/client/core'
import dotenv from 'dotenv'

dotenv.config({ path: '.env.local' })

const cache = new InMemoryCache()

const client = new ApolloClient({
  cache,
  uri: process.env.SCHEMA,
})

export default client
