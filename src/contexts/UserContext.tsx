import React from 'react';
import { postJson } from '../api/httpService';
import { LOGIN_URL } from '../constants/url';
import { message } from 'antd';

export interface ConfigProviderProps {
	children?: React.ReactNode;
}

export interface UserProps {
	username: string;
	login: boolean;
	handleLogin(username: string, password: string): any;
	handleLogout(): void;
}

export const UserContext = React.createContext<UserProps>({
	username: '',
	login: false,
	handleLogin: () => {},
	handleLogout: () => {}
});
export const UserComsumer = UserContext.Consumer;

export class UserProvider extends React.Component<any, any> {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			login: false
		};
	}

	handleLogin = async (username: string, password: string) => {
		if (!username || !password) {
			return;
		}

		const res: any = await postJson(LOGIN_URL, { username, password });
		console.log(res);
		if (res.status === 200) {
			this.setState({
				username,
				login: true
			});
			message.success('登录成功');
			return true;
		} else {
			this.setState({
				userName: '',
				login: false
			});
			return false;
		}
	};

	handleLogout = () => {
		this.setState({
			userName: '',
			login: false
		});
	};

	// renderProvider = (context: UserProps) => {
	// 	const { children } = this.props;
	// 	const { username, login } = this.state;
	// 	const userconfig: UserProps = {
	// 		...context,
	// 		username,
	// 		login,
	// 		handleLogin: this.handleLogin,
	// 		handleLogout: this.handleLogout
	// 	};
	// 	return (
	// 		<UserContext.Provider value={userconfig}>{children}</UserContext.Provider>
	// 	);
	// };

	render() {
		//return <UserComsumer>{this.renderProvider}</UserComsumer>;
		const { username, login } = this.state;
		const { children } = this.props;
		const userconfig: UserProps = {
			username,
			login,
			handleLogin: this.handleLogin,
			handleLogout: this.handleLogout
		};
		return <UserContext.Provider value={userconfig}>{children}</UserContext.Provider>;
	}
}
export default UserContext;
