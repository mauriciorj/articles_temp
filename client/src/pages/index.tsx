import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "../styles/theme";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { ApolloProvider } from "@apollo/client";
import { MainPage } from './mainPage';

const client = new ApolloClient({
  uri: process.env.APOLLO_SERVER_URL,
  cache: new InMemoryCache(),
});

const HomePage = () => {
  return (
      <ApolloProvider client={client}>
        <ThemeProvider theme={theme}>
          <MainPage />
        </ThemeProvider>
      </ApolloProvider>
  );
};

export default HomePage;
