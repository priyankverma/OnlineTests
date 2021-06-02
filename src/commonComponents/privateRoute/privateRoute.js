import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter,
  Redirect,
} from "react-router-dom";
import { useSelector } from "react-redux";
const PrivateRoute = ({ children, ...rest }) => {
  const reducerData = useSelector((state) => state);
  console.log("reducerData", reducerData);

  const { signupReducer } = reducerData;
  const { data } = signupReducer;

  let auth = data && data.username;
  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/loginScreen",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
