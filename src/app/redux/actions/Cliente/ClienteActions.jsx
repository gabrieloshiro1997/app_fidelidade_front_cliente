import { 
    CADASTRAR_CLIENTE,
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