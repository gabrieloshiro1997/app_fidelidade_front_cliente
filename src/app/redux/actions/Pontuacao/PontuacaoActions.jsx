import { OBTER_PONTUACOES } from './PontuacaoActionTypes';

export const ObterPontuacoes = () => ({
	type: OBTER_PONTUACOES,
	payload: {
		request: {
			url: `/api/pontuacao/usuario`,
			method: 'GET'
		}
	}
})