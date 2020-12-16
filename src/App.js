import React from "react";
import { Route, Router, Switch, Redirect } from "react-router-dom";

import history from "./config/history";
import PrivateRoute from "./components/common/components/PrivateRoute";
import PublicRoute from "./components/common/components/publicRoute";
import LoginForm from "./components/login/index";
import Dashboard from "./components/dashboard/index";
import Consultancy from "./components/settings/consultancy/index";
import Clients from "./components/settings/clients/index";
import AddConsultancy from "./components/settings/consultancy/addConsultancy";
import AddClients from "./components/settings/clients/addClients";
import Regions from "./components/settings/region/index";
import Sites from "./components/settings/sites/index";
import Users from "./components/settings/users/index";
import UserPermission from "./components/settings/userPermission/index";
import addRegion from "./components/settings/region/addRegion";
import addSite from "./components/settings/sites/addSite";
import editConsultancy from "./components/settings/consultancy/editConsultancy";
import editRegion from "./components/settings/region/editRegion";
import editSite from "./components/settings/sites/editSite";
import editClients from "./components/settings/clients/editClients";
import building from "./components/settings/building/index";
import addBuilding from "./components/settings/building/buildingForm";
import editBuilding from "./components/settings/building/buildingForm";
import viewBuilding from "./components/settings/building/viewBuilding";
import viewRegion from "./components/settings/region/viewRegion";
import viewSite from "./components/settings/sites/viewSite";
import viewConsultancy from "./components/settings/consultancy/viewConsultancy";
import viewClient from "./components/settings/clients/viewClient";
import binder from "./components/settings/binder/index";
import addBinder from "./components/settings/binder/addBinder";
import editBinder from "./components/settings/binder/editBinder";
import viewBinder from "./components/settings/binder/viewBinder";
import activity from "./components/settings/activity/index";
import addActivity from "./components/settings/activity/activityForm";
import editActivity from "./components/settings/activity/activityForm";
import viewActivity from "./components/settings/activity/viewActivity";

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
                <PrivateRoute exact path="/buildings" component={building} />
                <PrivateRoute exact path="/editBuilding" component={editBuilding} />
                <PrivateRoute exact path="/binders" component={binder} />
                <PrivateRoute exact path="/addBinder" component={addBinder} />
                <PrivateRoute exact path="/editBinder" component={editBinder} />
                <PrivateRoute exact path="/activities" component={activity} />
                <PrivateRoute exact path="/addActivity" component={addActivity} />
                <PrivateRoute exact path="/editActivity" component={editActivity} />
                <PrivateRoute exact path="/site/:section" component={viewSite} />
                <PrivateRoute exact path="/client/:section" component={viewClient} />
                <PrivateRoute exact path="/consultancy/:section" component={viewConsultancy} />
                <PrivateRoute exact path="/region/:section" component={viewRegion} />
                <PrivateRoute exact path="/binder/:section" component={viewBinder} />
                <PrivateRoute exact path="/building/:section" component={viewBuilding} />
                <PrivateRoute exact path="/activity/:section" component={viewActivity} />
            </Switch>
        </Router>
    );
}

export default App;
