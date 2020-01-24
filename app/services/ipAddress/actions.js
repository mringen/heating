import { SERVER_IP } from './actionTypes';

export function handleServerIp(serverIp) {
	return {
		type: SERVER_IP,
		payload: serverIp
	}
}
