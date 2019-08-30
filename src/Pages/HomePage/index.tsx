import React from 'react';
import Svg from './logo.svg';
import { Router, Route, Switch, Link } from 'react-router-dom';
import './index.less';
import Login from '../../Components/LoginForm';
import { InputNumber } from 'antd';
import history from '../../routes/history';
import { UserComsumer } from '../../contexts/UserContext';

class EnterCom extends React.Component<any, any> {
	constructor(props) {
		super(props);
		this.state = {
			id: '',
			login: false
		};
	}

	onChange = (value) => {
		this.setState({
			id: value
		});
	};

	componentWillMount = () => {
		this.setState({ id: this.props.getUser().id });
	};

	render() {
		return (
			<div>
				<InputNumber className="Home-input" onChange={this.onChange} />
				<Link className="Home-link" to={`/content/${this.state.id}`}>
					redirect
				</Link>
				{!this.state.login && (
					<Link className="Home-link" to={'/home/login'}>
						login
					</Link>
				)}
				<Link className="Home-link" to={'/home/register'}>
					register
				</Link>
			</div>
		);
	}
}

const Enter = () => <UserComsumer>{(context) => <EnterCom {...context} />}</UserComsumer>;

class HomePage extends React.Component<any, any> {
	public render() {
		return (
			<div className="Home">
				<header className="Home-header">
					<img src={Svg} className="Home-logo" alt="logo" />
				</header>
				<div className="Home-body">
					<Router history={history}>
						<Switch>
							<Route path="/" exact component={Enter} />
							<Route path="/home/" exact component={Enter} />
							<Route path="/home/login" component={Login} />
							{/* <Route exact path="/register" component={Register} /> */}
						</Switch>
					</Router>
				</div>
			</div>
		);
	}
}

export default HomePage;
