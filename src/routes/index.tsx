import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import LoginPage from '../Pages/LoginPage';
import HomePage from '../Pages/HomePage';
import ContentPage from '../Pages/ContentPage';
import WriterPage from '../Pages/WriterPage';
import history from './history';
import { UserProvider } from '../contexts/UserContext';

export function getRoutes(store: any) {
	return (
		<UserProvider>
			<Router history={history}>
				<Switch>
					<Route path="/" exact component={HomePage} />
					<Route path="/index" component={HomePage} />
					<Route path="/login" component={LoginPage} />
					<Route path="/content" component={ContentPage} />
					<Route path="/writer" component={WriterPage} />
				</Switch>
			</Router>
		</UserProvider>
	);
}
