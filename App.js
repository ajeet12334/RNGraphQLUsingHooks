/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import Index from './src/index'
import React from 'react'

//1
import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

// 2
const httpLink = createHttpLink({
    uri: 'http://api.tradesathi.com'
})

// 3
const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache()
})

//4


const App = () => {
  return (
    <>
    <ApolloProvider client={client}>
      <Index />
    </ApolloProvider>
    </>
  );
};

export default App;
