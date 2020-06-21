import {
	OBTER_RECOMPENSAS
} from './RecompensaActionTypes';

export const ObterRecompensas = (idEstabelecimento) => {
	return {
		type: OBTER_RECOMPENSAS,
		payload: {
			request: {
				url: `/api/recompensa/estabelecimento/${idEstabelecimento}`,
				method: 'GET'
			}
		}
	}
}