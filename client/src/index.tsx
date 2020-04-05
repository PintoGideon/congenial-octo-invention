import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./sections/Home/Home";
import { Listing } from "./sections/Listing/Listing";
import { Host } from "./sections/Host/Host";
import { NotFound } from "./sections/NotFound/NotFound";
import { User } from "./sections/User/User";
import { Listings } from "./sections/Listings/Listings";
import { LogIn } from "./sections/LogIn/LogIn";
import Layout from "antd/es/layout";
import { Viewer } from "./lib/types";
import { AppHeader } from "./sections/AppHeader";
import { Affix } from "antd";

const client = new ApolloClient({
  uri: "/api"
});

const initialViewer: Viewer = {
  id: null,
  token: null,
  avatar: null,
  hasWallet: null,
  didRequest: false
};

const App = () => {
  const [viewer, setViewer] = useState<Viewer>(initialViewer);

  return (
    <Router>
      <Layout id="app">
        <Affix offsetTop={0} className="app__affix-header">
          <AppHeader viewer={viewer} setViewer={setViewer} />
        </Affix>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/host" component={Host} />
          <Route exact path="/listing/id" component={Listing} />
          <Route
            exact
            path="/login"
            render={props => <LogIn {...props} setViewer={setViewer} />}
          />
          <Route exact path="/listings/:location?" component={Listings} />
          <Route exact path="/user/:id" component={User} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </Router>
  );
};

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);
