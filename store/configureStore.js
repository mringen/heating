import {createStore, combineReducers} from 'redux';
import serverReducer from '../app/services/ipAddress/reducer';

const rootReducer = combineReducers( {
	serverIp: serverReducer
});

const configureStore = () => {
	return createStore(rootReducer);
}

export default configureStore;
