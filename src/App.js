import React from "react";
import { Route, Router, Switch, Redirect } from "react-router-dom";


import history from "./config/history";
import PrivateRoute from "./components/common/components/PrivateRoute";
import PublicRoute from "./components/common/components/publicRoute";
import LoginForm from "./components/login/index"
import Dashboard from "./components/dashboard/index"
import Consultancy from "./components/settings/consultancy/index"
import addBuilding from "./components/settings/building/addBuilding"
import Clients from "./components/settings/clients/index"
import AddConsultancy from "./components/settings/consultancy/addConsultancy" 




function App() {
  return (
    <Router history={history}>
      <Switch>
        <PublicRoute exact path="/" component={LoginForm} />
        <PublicRoute exact path="/login" component={LoginForm} />
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
        <PrivateRoute exact path="/consultancy" component={Consultancy} />
        <PrivateRoute exact path="/addBuilding" component={addBuilding} />
        <PrivateRoute exact path="/clients" component={Clients} />
        <PrivateRoute exact path="/addConsultancy" component={AddConsultancy} />
      </Switch>
    </Router>
  );
}

export default App;
