import {
    ACCESS_TOKEN_CLIENTE,
	TIPO_ACESSO,
	ID_CLIENTE
} from '../../../config/utils/LocalStorageKeys'
import decode from 'jwt-decode';

import { 
    LOGOUT, 
	LOGIN_SUCCESS
} from '../actions/Login/LoginActionTypes';

const registerJwt = (data) => {
	
	const token = data.token;
	const decoded = decode(token);
    localStorage.setItem(ACCESS_TOKEN_CLIENTE, data.token);           
    localStorage.setItem(TIPO_ACESSO, decoded.tipoUsuario);       
    localStorage.setItem(ID_CLIENTE, decoded.id);       
}

const Logout = () => {
    localStorage.removeItem(ACCESS_TOKEN_CLIENTE);           
    localStorage.removeItem(TIPO_ACESSO);       
    localStorage.removeItem(ID_CLIENTE);          
       
}

const initialState = {
    state: true
}

export default (state = initialState, action) => {
    switch(action.type){
        case LOGIN_SUCCESS:
		{
            registerJwt(action.payload.data);
            return state;
        }

        case LOGOUT: {
            Logout();
            return state;
        }

        default:
            return state;       
    }
};