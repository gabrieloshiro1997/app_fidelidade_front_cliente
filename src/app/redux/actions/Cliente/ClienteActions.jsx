import { 
	CADASTRAR_CLIENTE,
	EXIBIR_MODAL_EDITAR_CLIENTE,
	ESCONDER_MODAL_EDITAR_CLIENTE, 
	OBTER_DADOS_USUARIO,
	ATUALIZAR_CLIENTE
} from './ClienteActionTypes'

export const CadastrarCliente = (cliente) => ({
    type: CADASTRAR_CLIENTE,
    payload: {
        request: {
            url: `/api/cliente`,
            method: 'POST',
            data: cliente
        }
    }
});

export const ExibirModalEditarCliente = () => ({
	type: EXIBIR_MODAL_EDITAR_CLIENTE
});

export const EsconderModalEditarCliente = () => ({
	type: ESCONDER_MODAL_EDITAR_CLIENTE
});

export const ObterDadosUsuario = (id) => ({
	type: OBTER_DADOS_USUARIO,
	payload: {
		request: {
			url: `/api/usuario/${id}`,
			method: 'GET'
		}
	}
});

export const AtualizarCliente = (cliente) => ({
	type: ATUALIZAR_CLIENTE,
	payload: {
		request: {
			url: `/api/usuario`,
			method: 'PUT',
			data: cliente
		}
	}
})