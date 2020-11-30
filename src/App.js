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
import AddClients from "./components/settings/clients/addClients" 
import Regions from "./components/settings/region/index" 
import Sites from "./components/settings/sites/index" 
import Users from "./components/settings/users/index" 
import UserPermission from "./components/settings/userPermission/index" 
import addRegion from "./components/settings/region/addRegion" 
import addSite from "./components/settings/sites/addSite" 
import editConsultancy from "./components/settings/consultancy/editConsultancy" 
import editRegion from "./components/settings/region/editRegion" 
import editSite from "./components/settings/sites/editSite" 
import editClients from "./components/settings/clients/editClients" 
import building from "./components/settings/building/index" 
import binder from "./components/settings/binder/index" 
import addBinder from "./components/settings/binder/addBinder" 
import editBinder from "./components/settings/binder/editBinder" 



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
        <PrivateRoute exact path="/addClients" component={AddClients} />
        <PrivateRoute exact path="/regions" component={Regions} />
        <PrivateRoute exact path="/sites" component={Sites} />
        <PrivateRoute exact path="/users" component={Users} />
        <PrivateRoute exact path="/userPermission" component={UserPermission} />
        <PrivateRoute exact path="/addRegion" component={addRegion} />
        <PrivateRoute exact path="/addSite" component={addSite} />
        <PrivateRoute exact path="/editConsultancy" component={editConsultancy} />
        <PrivateRoute exact path="/editRegion" component={editRegion} />
        <PrivateRoute exact path="/editSite" component={editSite} />
        <PrivateRoute exact path="/editClients" component={editClients} />
        <PrivateRoute exact path="/building" component={building} />
        <PrivateRoute exact path="/binder" component={binder} />
        <PrivateRoute exact path="/addBinder" component={addBinder} />
        <PrivateRoute exact path="/editBinder" component={editBinder} />
        
      </Switch>
    </Router>
  );
}

export default App;
