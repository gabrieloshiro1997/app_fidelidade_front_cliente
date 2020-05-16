import { 
    CADASTRAR_USUARIO,
} from './UsuarioActionTypes'

export const CadastrarUsuario = (usuario) => ({
    type: CADASTRAR_USUARIO,
    payload: {
        request: {
            url: `/api/usuario`,
            method: 'POST',
            data: usuario
        }
    }
});