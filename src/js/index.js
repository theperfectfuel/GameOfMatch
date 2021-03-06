'use strict';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import configureStore from './store/configure-store';
import { renderDevTools } from './utils/dev-tools';

import App from './components/App';
import Home from './components/Home';
import Login from './components/Login';
import NoMatch from './components/NoMatch';
import CreateProfile from './components/CreateProfile';
import Connections from './components/Connections';

// const { initializeIndex } = bindActionCreators(store.dispatch);

// let wrapperGenerator = (Component) => {
// 	return (props) => {
// 		return (
// 			<div>
// 				<Provider store={store}>
// 					<Component {...props} />
// 				</Provider>
// 				{renderDevTools(store)}
// 			</div>
// 		);
// 	};
// };

// let Routes = (
// 	<Router history={browserHistory}>
// 		<Route path="/" component={wrapperGenerator(App)}>
// 			<IndexRoute component={Login}/>
// 			<Route path="*" component={NoMatch}/>
// 		</Route>
// 	</Router>
// );

// store.dispatch(initializeIndex());

// var Wrapper = wrapperGenerator(App);

render (
	<Provider store={ configureStore() }>
		<Router history={ browserHistory }>
			<Route path="/" component={ App }>
				<IndexRoute component={ Home } />
				<Route path="/login" component={ Login } />
				<Route path="/create-profile" component={ CreateProfile } />
				<Route path="/my-connections" component={ Connections }/>
			</Route>
			<Route path="*" component={ NoMatch }/>
		</Router>
	</Provider>,
	document.getElementById('app')
);

// ReactDOM.render(Routes, document.getElementById('app'));
