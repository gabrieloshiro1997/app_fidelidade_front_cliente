
import { 
	LOGIN,
	LOGOUT,
	SOLICITAR_REDEFINICAO_SENHA,
	RESETAR_SENHA
} from './LoginActionTypes'

export const LoginUsuario = (email, senha) => ({
    type: LOGIN,
    payload: {
        request: {
            url: `/api/autenticacao/`,
            method: 'POST',
            data: {
                email,
                senha
            }
        }
    }
});

export const SolocitarRedefinicaoSenha = (email) => ({
    type: SOLICITAR_REDEFINICAO_SENHA,
    payload: {
        request: {
            url: `/api/usuario/EsqueciMinhaSenha`,
            method: 'POST',
            data: {
                email
            }
        }
    }
});

export const ResetarSenha = (email, senha, token) => ({
    type: RESETAR_SENHA,
    payload: {
        request: {
            url: `/api/usuario/RedefinirSenha`,
            method: 'POST',
            data: {
				email,
				senha, 
				token
            }
        }
    }
});

export const Logout = () => ({
    type: LOGOUT
});
