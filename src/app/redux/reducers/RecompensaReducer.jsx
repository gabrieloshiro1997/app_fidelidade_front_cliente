import {
	OBTER_RECOMPENSAS_SUCCESS
} from '../actions/Recompensa/RecompensaActionTypes';

const initialState = {
	recompensas: []
}

export default (state = initialState, action) => {
	switch (action.type) {
		case OBTER_RECOMPENSAS_SUCCESS:
			return {
				...state,
				recompensas: action.payload.data
			}
		default:
			return state;
	}
}