import { combineReducers } from "redux";

import GlobalReducer from './GlobalReducer';
import LoginReducer from './LoginReducer';
import UsuarioReducer from './UsuarioReducer';

export default combineReducers({ 
    GlobalReducer,
    LoginReducer,
	UsuarioReducer,
});