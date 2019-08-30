import { UserProps, UserComsumer } from '../../contexts/UserContext';
import React from 'react';
import { Menu, Dropdown, Modal } from 'antd';
import './index.less';
import Login from '../LoginForm';

class Header extends React.Component<UserProps, any> {
	constructor(props) {
		super(props);
		this.state = {
			showModal: false
		};
	}

	componentDidUpdate() {
		this.props.getUser();
	}
	handleLoginClick = () => {
		if (this.props.userInfo.login) {
			return;
		}
		this.setState({
			showModal: true
		});
	};
	render() {
		const { userInfo, handleLogout } = this.props;
		
		console.log('header:', this.props);
		const menu = <Menu>{<Menu.Item>{<h4 onClick={handleLogout}>Logout</h4>}</Menu.Item>}</Menu>;

		return (
			<div className="header">
				<span>{userInfo.zoneId}</span>
				<div className="user-btn">
					<Dropdown disabled={!userInfo.login} overlay={menu}>
						<h2 onClick={this.handleLoginClick}>{userInfo.login ? userInfo.username : 'Login'}</h2>
					</Dropdown>
				</div>
				<Modal visible={this.state.showModal}>
					<Login />
				</Modal>
			</div>
		);
	}
}

const UserHeader = () => <UserComsumer>{(context) => <Header {...context} />}</UserComsumer>;

export default UserHeader;
