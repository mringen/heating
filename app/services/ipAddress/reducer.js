import { SERVER_IP } from './actionTypes';
const initialState = {
	serverIp: ''
};

const serverReducer = (state = initialState, action) => {
	switch(action.type) {
		case SERVER_IP:
		return {
			...state,
			serverIp: action.payload
		};
		default:
		return state;
	}
}
export default serverReducer;
