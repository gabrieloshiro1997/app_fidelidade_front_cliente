import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';
import { NotificationManager } from 'react-notifications';

import { ExibirLoading, EsconderLoading } from '../actions/Global/GlobalActions';
import { ApiUrl } from '../../../config/utils/config';
import { ACCESS_TOKEN_CLIENTE } from '../../../config/utils/LocalStorageKeys'

const httpClient = axios.create({
	baseURL: ApiUrl
});

const onCompleteHandler = (data) => {
	data.dispatch(EsconderLoading());
};

const requestInterceptor = ({ dispatch }, request) => {
	if (request.url === "/api/usuario/RedefinirSenha") {
		request.headers['Authorization'] = `Bearer ${request.data.token}`;
	} else {
		request.headers['Authorization'] = `Bearer ${localStorage.getItem(ACCESS_TOKEN_CLIENTE)}`;
	}
	dispatch(ExibirLoading());
	return request;
};

const responseInterceptor = ({ dispatch }, error) => {
	console.log(error);
	let message = error.response ? error.response.data.message : error.data;

	!message ? NotificationManager.error('Erro ao realizar a requisição', 'Erro') : NotificationManager.error(message, 'Erro');

	return Promise.reject(error);
};

const axiosMidOptions = {
	onComplete: onCompleteHandler,
	interceptors: {
		request: [requestInterceptor],
		response: [{ error: responseInterceptor }]
	}
};

export default axiosMiddleware(httpClient, axiosMidOptions)
