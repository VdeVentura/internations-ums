import React, { Component } from "react";

import { HashRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "./reducers";

import NavBar from "./components/NavBar/NavBar";

import "./App.css";

const store = createStore(
  reducers /* preloadedState, */,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <NavBar />
          {/* <Route exact path="/" component={DashboardPage} /> */}
          {/* <Route path="/users" component={UsersPage} /> */}
          {/* <Route path="/groups" component={GroupsPage} /> */}
        </Router>
      </Provider>
    );
  }
}

export default App;
