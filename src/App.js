import "./App.css";
import React, { Component } from "react";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import combinedReducer from "./../src/redux/combinedReducers";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter,
  Redirect,
} from "react-router-dom";
import Dashboard from "../src/screens/dashboard/dashboard";
import LoginScreen from "./screens/login/loginScreen";
import Summary from "./screens/summary/summary";
import PrivateRoute from "./commonComponents/privateRoute/privateRoute";
const ReduxThunk = require("redux-thunk").default;

let composeEnhancer = compose;
export const store = createStore(
  //creates an instance of store to be used globally
  combinedReducer, // pass in the combined reducers
  composeEnhancer(applyMiddleware(ReduxThunk)) // use the middleware for async actions
);

class App extends Component {
  constructor(props) {
    super(props);

    // Store the previous pathname and search strings
    this.currentPathname = null;
    this.currentSearch = null;
  }
  componentDidMount() {
    const { history } = this.props;
    history.listen((newLocation, action) => {
      if (action === "REPLACE") {
        if (
          newLocation.pathname !== this.currentPathname ||
          newLocation.search !== this.currentSearch
        ) {
          // Save new location
          this.currentPathname = newLocation.pathname;
          this.currentSearch = newLocation.search;

          // Clone location object and push it to history
          history.replace({
            pathname: newLocation.pathname,
            search: newLocation.search,
          });
        }
      } else {
        // Send user back if they try to navigate back
        history.go(1);
      }
    });
  }

  render() {
    console.log("signupReducer", this.props.signupReducer);
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route
              exact
              path="/"
              render={() => <Redirect to="/loginScreen" />}
            />

            <Route exact path="/loginScreen" component={LoginScreen} />
            <PrivateRoute path="/dashboard">
              <Dashboard />
            </PrivateRoute>
            <PrivateRoute path="/summary">
              <Summary />
            </PrivateRoute>
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/summary" component={Summary} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

// export default connect(mapStateToProps, null)(App);
export default withRouter(App);
