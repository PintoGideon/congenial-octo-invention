import React from "react";
import ReactDOM from "react-dom";
import { Listings } from "./containers/Listings/Listings";
import "./styles/index.css";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

const client = new ApolloClient({
  uri: "/api"
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <Listings title="Tinyhouse Listings" />
  </ApolloProvider>,
  document.getElementById("root")
);
