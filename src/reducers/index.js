import { combineReducers } from "redux";
import loginReducer from "../components/login/reducers";
import dashboardReducer from "../components/dashboard/reducers";


const rootReducer = combineReducers({
    loginReducer,
    dashboardReducer
});

export default rootReducer;
