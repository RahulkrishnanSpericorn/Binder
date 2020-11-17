import { combineReducers } from "redux";
import loginReducer from "../components/login/reducers";
import dashboardReducer from "../components/dashboard/reducers";
import consultancyReducer from "../components/settings/consultancy/reducers";


const rootReducer = combineReducers({
    loginReducer,
    dashboardReducer,
    consultancyReducer
});

export default rootReducer;
