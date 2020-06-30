import { 
	OBTER_PONTUACOES_SUCCESS,
	DEFINIR_DADOS_PONTUACAO,
	LIMPAR_DADOS_PONTUACAO,
	OBTER_HISTORICO_PONTUACAO_CLIENTE_POR_ESTABELECIMENTO_SUCCESS,
	OBTER_PONTUACAO_CLIENTE_COMPLETA_SUCCESS
	
} from '../actions/Pontuacao/PontuacaoActionTypes.jsx';

const initialState = {
	pontuacoes: [],
	dadosPontuacao: {},
	historicoPontuacao: [],
	dadosPontuacaoCompleta: []
}

export default (state = initialState, action) => {
    switch(action.type){
        case OBTER_PONTUACOES_SUCCESS:
		{
            return {
				...state,
				pontuacoes: action.payload.data
			};
		}
		
		case DEFINIR_DADOS_PONTUACAO:
			{
				return {
					...state,
					dadosPontuacao: {
						id: action.payload.id,
						nomeFantasia: action.payload.nome_fantasia,
						saldo: action.payload.saldo
					}
				}
			}

		case LIMPAR_DADOS_PONTUACAO: {
			return {
				...state,
				dadosPontuacao: initialState.dadosPontuacao
			}
		}

		case OBTER_HISTORICO_PONTUACAO_CLIENTE_POR_ESTABELECIMENTO_SUCCESS: {
			return {
				...state,
				historicoPontuacao: action.payload.data
			}
		}

		case OBTER_PONTUACAO_CLIENTE_COMPLETA_SUCCESS: {
			return {
				...state,
				dadosPontuacaoCompleta: action.payload.data
			}
		}

        default:
            return state;       
    }
};