import React from "react";
import { Route, Router, Switch, Redirect } from "react-router-dom"; 


import history from "./config/history";
import PrivateRoute from "./components/common/components/PrivateRoute";
import PublicRoute from "./components/common/components/publicRoute";
import LoginForm from "./components/login/index"




function App() {
  return (
    <Router history={history}>
      <Switch>
        <PublicRoute exact path="/" component={LoginForm} />
        <PublicRoute exact path="/login" component={LoginForm} />
      </Switch>
    </Router>
  );
}

export default App;
