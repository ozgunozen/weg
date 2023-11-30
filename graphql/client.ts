import { ApolloClient, InMemoryCache } from "@apollo/client"

export const apolloClient = new ApolloClient({
  uri: "http://faker:9002/graphql",
  cache: new InMemoryCache(),
});
