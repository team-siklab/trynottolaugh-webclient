//
// :: Configures the GraphQL endpoint connection for the app
//
import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

// :: ---

const gqlEndpointUrl = createHttpLink({
  uri: 'http://localhost:4000'
})

const client = new ApolloClient({
  link: gqlEndpointUrl,
  cache: new InMemoryCache()
})

export default client
