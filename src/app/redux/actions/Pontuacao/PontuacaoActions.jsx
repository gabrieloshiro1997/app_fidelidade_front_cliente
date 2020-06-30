import { 
	OBTER_PONTUACOES, 
	DEFINIR_DADOS_PONTUACAO,
	LIMPAR_DADOS_PONTUACAO,
	OBTER_HISTORICO_PONTUACAO_CLIENTE_POR_ESTABELECIMENTO,
	OBTER_PONTUACAO_CLIENTE_COMPLETA
} from './PontuacaoActionTypes';

export const ObterPontuacoes = () => ({
	type: OBTER_PONTUACOES,
	payload: {
		request: {
			url: `/api/pontuacao/estabelecimentos/cliente`,
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
});

export const ObterHistoricoPontuacaoClientePorEstabelecimento = (idEstabelecimento) => ({
	type: OBTER_HISTORICO_PONTUACAO_CLIENTE_POR_ESTABELECIMENTO,
	payload: {
		request: {
			url: `/api/pontuacao/usuario/estabelecimento/${idEstabelecimento}`,
			method: 'GET'
		}
	}
});

export const ObterPontuacaoClienteCompleta = () => ({
	type: OBTER_PONTUACAO_CLIENTE_COMPLETA,
	payload: {
		request: {
			url: '/api/pontuacao/usuario',
			method: 'GET'
		}
	}
})