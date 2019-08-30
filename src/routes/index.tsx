import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import HomePage from '../Pages/HomePage';
import ContentPage from '../Pages/ContentPage';
import history from './history';
import { UserProvider } from '../contexts/UserContext';

export function getRoutes(store: any) {
	return (
		<UserProvider>
			<Router history={history}>
				<Switch>
					<Route path="/" exact component={HomePage} />
					<Route path="/home" component={HomePage} />
					<Route path="/content/:id" component={ContentPage} />
				</Switch>
			</Router>
		</UserProvider>
	);
}
