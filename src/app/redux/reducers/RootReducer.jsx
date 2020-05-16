import { combineReducers } from "redux";

import GlobalReducer from './GlobalReducer';
import LoginReducer from './LoginReducer';
import ClienteReducer from './ClienteReducer';

export default combineReducers({ 
    GlobalReducer,
    LoginReducer,
	ClienteReducer,
});