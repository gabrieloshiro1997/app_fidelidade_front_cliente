import { 
	EFETUAR_RESGATE_SUCCESS,
	EXIBIR_MODAL_RESGATE,
	ESCONDER_MODAL_RESGATE 
} from '../actions/Resgate/ResgateActionTypes.jsx';

const initialState = {
	showModalResgate: false
}

export default (state = initialState, action) => {
    switch(action.type){
        case EFETUAR_RESGATE_SUCCESS:
		{
            return {
				...state,
			};
        }

		case EXIBIR_MODAL_RESGATE:
		{
			return {
				...state,
				showModalResgate: true
			}
		}

		case ESCONDER_MODAL_RESGATE: 
		{
			return {
				...state,
				showModalResgate: false
			}
		}
		default:
            return state;       
    }
};