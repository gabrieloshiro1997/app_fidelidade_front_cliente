import { 
	EFETUAR_RESGATE,
	EXIBIR_MODAL_RESGATE,
	ESCONDER_MODAL_RESGATE,
	OBTER_HISTORICO_RESGATE_CLIENTE_POR_ESTABELECIMENTO
} from './ResgateActionTypes';

export const EfetuarResgate = (recompensaId, usuarioId) => ({
	type: EFETUAR_RESGATE,
	payload: {
		request: {
			url: `/api/retirada`,
			method: 'POST',
			data: {
                recompensaId,
                usuarioId
            }
		}
	}
});

export const ExibirModalResgate = (idEstabelecimento) => ({
	type: EXIBIR_MODAL_RESGATE,
	payload: { idEstabelecimento }
});

export const EsconderModalResgate = () => ({
	type: ESCONDER_MODAL_RESGATE
})

export const ObterHistoricoResgateClientePorEstabelecimento = (idEstabelecimento) => ({
	type: OBTER_HISTORICO_RESGATE_CLIENTE_POR_ESTABELECIMENTO,
	payload: {
		request: {
			url: `/api/retirada/usuario/estabelecimento/${idEstabelecimento}`,
			method: 'GET'
		}
	}
})