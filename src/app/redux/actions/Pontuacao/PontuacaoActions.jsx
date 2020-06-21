import { 
	OBTER_PONTUACOES, 
	DEFINIR_DADOS_PONTUACAO,
	LIMPAR_DADOS_PONTUACAO
} from './PontuacaoActionTypes';

export const ObterPontuacoes = () => ({
	type: OBTER_PONTUACOES,
	payload: {
		request: {
			url: `/api/pontuacao/usuario`,
			method: 'GET'
		}
	}
})

export const DefinirDadosPontuacao = (pontuacao) => ({
	type: DEFINIR_DADOS_PONTUACAO,
	payload: pontuacao
});

export const LimparDadosPontuacao = (pontuacao) => ({
	type: LIMPAR_DADOS_PONTUACAO,
	payload: pontuacao
})