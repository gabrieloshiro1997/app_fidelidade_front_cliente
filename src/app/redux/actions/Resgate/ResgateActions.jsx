import { 
	EFETUAR_RESGATE,
	EXIBIR_MODAL_RESGATE,
	ESCONDER_MODAL_RESGATE
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

export const ExibirModalResgate = () => ({
	type: EXIBIR_MODAL_RESGATE
});

export const EsconderModalResgate = () => ({
	type: ESCONDER_MODAL_RESGATE
})