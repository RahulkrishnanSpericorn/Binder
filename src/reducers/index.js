import { combineReducers } from "redux";
import loginReducer from "../components/login/reducers";


const rootReducer = combineReducers({
    loginReducer,
});

export default rootReducer;
