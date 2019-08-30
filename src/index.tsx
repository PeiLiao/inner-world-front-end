import React from 'react';
import ReactDOM from 'react-dom';
import { getRoutes } from './routes';
import './index.less';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import rootSaga from './store/saga';
import createSagaMiddleware from '@redux-saga/core';
import { createStore, applyMiddleware } from 'redux';
import appReducer from './store/reducer';

const sagaMiddleware = createSagaMiddleware({
	onError: function(e: any) {
		console.log(e);
	}
});
export const store = createStore(appReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={store}>{getRoutes(store)}</Provider>, document.getElementById('root') as HTMLElement);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
