import { UserProps, UserComsumer } from '../../contexts/UserContext';
import React from 'react';
import { Menu, Dropdown } from 'antd';
import './index.less';

class Header extends React.Component<UserProps, any> {
	render() {
		const { username, login, handleLogin, handleLogout } = this.props;
		console.log('header:', this.props);
		const menu = <Menu>{<Menu.Item>{<h4 onClick={handleLogout}>Logout</h4>}</Menu.Item>}</Menu>;
		const handleLoginClick = () => {
			if (login) {
				return;
			}
			handleLogin('User-pei.liao-', '123');
		};
		return (
			<div className="header">
				<div className="user-btn">
					<Dropdown disabled={!login} overlay={menu}>
						<h2 onClick={handleLoginClick}>{login ? username : 'Login'}</h2>
					</Dropdown>
				</div>
			</div>
		);
	}
}

const UserHeader = <UserComsumer>{(context) => <Header {...context} />}</UserComsumer>;

export default UserHeader;
