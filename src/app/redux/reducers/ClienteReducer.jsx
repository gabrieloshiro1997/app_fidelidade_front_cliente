import { 
    CADASTRAR_CLIENTE_SUCCESS
} from '../actions/Cliente/ClienteActionTypes';

import { NotificationManager } from 'react-notifications'

const initialState = {}

export default (state = initialState, action) => {
    switch(action.type){
        case CADASTRAR_CLIENTE_SUCCESS: {
            NotificationManager.success('Cliente cadastrado com sucesso', 'Sucesso');
            return {
                ...state
            }
		}
		
        default:
            return state;       
    }
};