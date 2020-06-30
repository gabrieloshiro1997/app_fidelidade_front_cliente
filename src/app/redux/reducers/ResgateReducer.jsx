import { 
	EFETUAR_RESGATE_SUCCESS,
	EXIBIR_MODAL_RESGATE,
	ESCONDER_MODAL_RESGATE,
	OBTER_HISTORICO_RESGATE_CLIENTE_POR_ESTABELECIMENTO_SUCCESS 
} from '../actions/Resgate/ResgateActionTypes.jsx';

const initialState = {
	showModalResgate: false,
	idEstabelecimentoSelecionado: null,
	historicoResgate: []
}

export default (state = initialState, action) => {
    switch(action.type){
        case EFETUAR_RESGATE_SUCCESS:
		{
            return {
				...state,
			};
        }

		case EXIBIR_MODAL_RESGATE:
		{
			return {
				...state,
				showModalResgate: true,
				idEstabelecimentoSelecionado: action.payload.idEstabelecimento
			}
		}

		case ESCONDER_MODAL_RESGATE: 
		{
			return {
				...state,
				showModalResgate: false,
				idEstabelecimentoSelecionado: null
			}
		}

		case OBTER_HISTORICO_RESGATE_CLIENTE_POR_ESTABELECIMENTO_SUCCESS: {
			return {
				...state,
				historicoResgate: action.payload.data
			}
		}
		default:
            return state;       
    }
};