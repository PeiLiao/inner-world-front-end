import React from 'react';
import { postJson } from '../helpers/utils/HttpService';
import { LOGIN, GET_USER } from '../constants/url';
import { message } from 'antd';
import { getJson } from '../helpers/utils/HttpService';
import { userInfo } from 'os';

export interface ConfigProviderProps {
	children?: React.ReactNode;
}

export interface UserInfo {
	username: string;
	login: boolean;
	zoneId: number;
}

export interface UserProps {
	userInfo: UserInfo;
	handleLogin(username: string, password: string): any;
	handleLogout(): void;
	getUser(): void;
	setZoneId(id: number): void;
}

export const UserContext = React.createContext<UserProps>({
	userInfo: {
		username: '',
		login: false,
		zoneId: 0
	},
	handleLogin: () => {},
	handleLogout: () => {},
	getUser: () => {},
	setZoneId: () => {}
});
export const UserComsumer = UserContext.Consumer;

export class UserProvider extends React.Component<any, any> {
	constructor(props) {
		super(props);
		this.state = {
			userInfo:{
			username: '',
			login: false,
			zoneId: 0}
		};
	}

	handleLogin = async (username: string, password: string) => {
		if (!username || !password) {
			return;
		}

		const res: any = await postJson(LOGIN, { username, password });
		console.log(res);
		res.token = 123;
		if (res.code === 200) {
			this.setState({
				userInfo: { username, login: true, zoneId: 6666 }
			});

			window.localStorage.setItem('TOKEN', res.token);
			message.success('登录成功');
			return userInfo;
		} else {
			this.setState({
				userName: '',
				login: false,
				zoneId: 0
			});
			return {};
		}
	};

	handleLogout = () => {
		this.setState({
			userName: '',
			login: false,
			zoneId: 0
		});
	};

	getUser = async () => {
		const response: any = await getJson(`${'/rap'}${GET_USER}`);
		if (response.code === 0 && response.success === true) {
			// login success
			const { userName: returnUserName, userId, zoneId } = response.data;
			this.setState({
				userId,
				userName: returnUserName,
				login: true,
				zoneId
			});
		} else {
			this.setState({
				userId: '',
				userName: '',
				login: false,
				zoneId: 0
			});
		}
	};

	setZoneId = (zoneId) => {
		this.setState({ zoneId });
	};

	render() {
		//return <UserComsumer>{this.renderProvider}</UserComsumer>;
		const { userInfo } = this.state;
		const { children } = this.props;
		const userconfig: UserProps = {
			userInfo,
			handleLogin: this.handleLogin,
			handleLogout: this.handleLogout,
			getUser: this.getUser,
			setZoneId: this.setZoneId
		};
		return <UserContext.Provider value={userconfig}>{children}</UserContext.Provider>;
	}
}
export default UserContext;
