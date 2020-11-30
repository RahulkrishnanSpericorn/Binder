import { combineReducers } from "redux";
import loginReducer from "../components/login/reducers";
import dashboardReducer from "../components/dashboard/reducers";
import consultancyReducer from "../components/settings/consultancy/reducers";
import clientReducer from "../components/settings/clients/reducers";
import regionReducer from "../components/settings/region/reducers";
import siteReducer from "../components/settings/sites/reducers";
import settingsCommonReducer from "../components/settings/reducers";
import buildingReducer from "../components/settings/building/reducers";
import binderReducer from "../components/settings/binder/reducers";


const rootReducer = combineReducers({
    loginReducer,
    dashboardReducer,
    consultancyReducer,
    clientReducer,
    regionReducer,
    siteReducer,
    settingsCommonReducer,
    buildingReducer,
    binderReducer

});

export default rootReducer;
