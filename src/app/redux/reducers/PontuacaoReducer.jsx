import { 
	OBTER_PONTUACOES_SUCCESS,
	DEFINIR_DADOS_PONTUACAO,
	LIMPAR_DADOS_PONTUACAO 
} from '../actions/Pontuacao/PontuacaoActionTypes.jsx';

const initialState = {
	pontuacoes: [],
	dadosPontuacao: {}
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
						valor: action.payload.valor
					}
				}
			}

		case LIMPAR_DADOS_PONTUACAO: {
			return {
				...state,
				dadosPontuacao: initialState.dadosPontuacao
			}
		}

        default:
            return state;       
    }
};