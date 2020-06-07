import { combineReducers } from "redux";

import GlobalReducer from './GlobalReducer';
import LoginReducer from './LoginReducer';
import ClienteReducer from './ClienteReducer';
import PontuacaoReducer from './PontuacaoReducer';

export default combineReducers({ 
    GlobalReducer,
    LoginReducer,
	ClienteReducer,
	PontuacaoReducer
});