import {createStore, applyMiddleware, combineReducers, compose} from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import {devTools, persistState} from 'redux-devtools';
import rootReducer from '../reducers/index';

let createStoreWithMiddleware;

// Configure the dev tools when in DEV mode
if (__DEV__) {
	createStoreWithMiddleware = compose(
		applyMiddleware(thunkMiddleware),
		createLogger(),
    	devTools()
	)(createStore);
}else {
 	createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);
}

export default function configureStore(initialState) {
	return createStoreWithMiddleware(rootReducer, initialState);
}
