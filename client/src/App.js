import React from "react";
// import custom fonts
import "@fontsource/nosifer";
import "@fontsource/butcherman";
import "@fontsource/frijole";
import "@fontsource/major-mono-display";
import "@fontsource/nosifer";
import "@fontsource/noto-serif-ahom";
// Chakra provider
import { ChakraProvider } from "@chakra-ui/react";
// custom theme
import theme from "./theme/theme";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { ShopProvider } from "./utils/ShopContext";
import Home from './pages/Home';
import Shop from './pages/Shop'
import CoOp from './pages/CoOp';
import Signup from './pages/Signup';
import Login from './pages/Login';

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
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
        {/* <Home /> */}
        <Router>
          <ShopProvider>
            <div>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/coop" element={<CoOp />} />
                <Route path="/shop" element={<Shop />} />
                {/* <Route 
            path="/Profile/:id" 
            element={<Profile />}
            /> */}
          <Route
            path="/signup"
            element={<Signup />}
          />
          <Route
            path="/login"
            element={<Login />}
          />
        </Routes>
      </div>
      </ShopProvider>
    </Router> 
  </ApolloProvider>
</ChakraProvider>
  );
}

export default App;
