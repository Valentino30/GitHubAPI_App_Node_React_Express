import "./App.css";
import React from "react";
import NavBar from "./components/NavBar";
import { Container } from "@material-ui/core";
import ItemsListContainer from "./containers/ItemsListContainer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div test-class="App">
      <Container style={{ width: 350 }}>
        <Router>
          <Switch>
            <Route
              exact
              path="/users"
              component={(props) => (
                <React.Fragment>
                  <NavBar type="GitHub's Users" />
                  <ItemsListContainer {...props} type="users" />
                </React.Fragment>
              )}
            />
            <Route
              exact
              path="/users/:userId/repos"
              component={(props) => (
                <React.Fragment>
                  <NavBar type={`${props.match.params.userId}'s repos`} />
                  <ItemsListContainer {...props} type="repos" />
                </React.Fragment>
              )}
            />
          </Switch>
        </Router>
      </Container>
    </div>
  );
}

export default App;
