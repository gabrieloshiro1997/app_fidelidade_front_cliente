import { 
    CADASTRAR_USUARIO_SUCCESS
} from '../actions/Usuario/UsuarioActionTypes';

import { NotificationManager } from 'react-notifications'

const initialState = {}

export default (state = initialState, action) => {
    switch(action.type){
        case CADASTRAR_USUARIO_SUCCESS: {
            NotificationManager.success('Usuário cadastrado com sucesso', 'Sucesso');
            return {
                ...state
            }
		}
		
        default:
            return state;       
    }
};