import { OBTER_PONTUACOES_SUCCESS } from '../actions/Pontuacao/PontuacaoActionTypes.jsx';

const initialState = {
	pontuacoes: []
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

        default:
            return state;       
    }
};