import React from 'react';
// import './App.css';
import { extendTheme, ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import Home from './pages/Home';

const colors = {}

const theme = extendTheme({ colors });

const httpLink = createHttpLink({
  uri: '/graphql'
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});


function App() {
  return (
  <ChakraProvider theme={theme}>
    <ApolloProvider client={client}>
    <Router>
      <div>
        <Routes>
          <Route 
            path="/" 
            element={<Home />}
          />
          {/* <Route 
            path="/coop" 
            element={<CoOp />}
          />
          <Route 
            path="/Profile/:id" 
            element={<Profile />}
          /> */}
        </Routes>
      </div>
    </Router>
  </ApolloProvider>
</ChakraProvider>
  );
}

export default App;

