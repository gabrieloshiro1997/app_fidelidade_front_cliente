import { 
	CADASTRAR_CLIENTE_SUCCESS,
	EXIBIR_MODAL_EDITAR_CLIENTE,
	ESCONDER_MODAL_EDITAR_CLIENTE,
	OBTER_DADOS_USUARIO_SUCCESS,
	ATUALIZAR_CLIENTE_SUCCESS
} from '../actions/Cliente/ClienteActionTypes';

import { NotificationManager } from 'react-notifications'

const initialState = {
	exibirModalEditarCliente: false,
	usuario: {}
}

export default (state = initialState, action) => {
    switch(action.type){
        case CADASTRAR_CLIENTE_SUCCESS: {
            NotificationManager.success('Cliente cadastrado com sucesso', 'Sucesso');
            return {
                ...state
            }
		}
		
		case EXIBIR_MODAL_EDITAR_CLIENTE: {
			return {
				...state,
				exibirModalEditarCliente: true
			}
		}

		case ESCONDER_MODAL_EDITAR_CLIENTE: {
			return {
				...state,
				exibirModalEditarCliente: false
			}
		}

		case OBTER_DADOS_USUARIO_SUCCESS: {
			return {
				...state,
				usuario: action.payload.data
			}
		}

		case ATUALIZAR_CLIENTE_SUCCESS: {
			NotificationManager.success('Informações atualizadas com sucesso', 'Sucesso');
			return {
				...state
			}
		}
        default:
            return state;       
    }
};