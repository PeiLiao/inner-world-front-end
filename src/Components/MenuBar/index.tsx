import './index.less';
import * as React from 'react';
import { Menu, Icon, Avatar, Descriptions } from 'antd';
import history from '../../routes/history';
//import { createBrowserHistory } from 'history';
const { SubMenu } = Menu;

//const history = createBrowserHistory({ basename: '/content' });

interface Iprops {
	username: string;
	email: string;
	wechat: string;
	signature: string;
}

export const MenuState = {
	username: 'water',
	email: 'unknown',
	wechat: 'leo-1996',
	signature: 'stay foolish'
};
class MenuBar extends React.Component<Iprops, any> {
	render() {
		return (
			<div className="MenuBar">
				<div className="MenuBar__Intro">
					<Avatar className="MenuBar__Intro__Avatar" size={128} icon="user" />
					<Descriptions
						className="MenuBar__Intro__Title"
						title={this.props.username}
						column={1}
					>
						<Descriptions.Item className="MenuBar__Intro__Label" label="WeChat">
							{this.props.wechat}
						</Descriptions.Item>
						<Descriptions.Item className="MenuBar__Intro__Label" label="Email">
							{this.props.email}
						</Descriptions.Item>
						<Descriptions.Item
							className="MenuBar__Intro__Label"
							label="Signature"
						>
							{this.props.signature}
						</Descriptions.Item>
					</Descriptions>
				</div>
				<Menu mode="vertical">
					<SubMenu
						key="index"
						title={
							<span>
								<Icon type="home" />
								Index
							</span>
						}
						onTitleClick={() => {
							history.push('/content/');
						}}
					/>
					<SubMenu
						key="dashboard"
						title={
							<span>
								<Icon type="bar-chart" />
								Dashboard
							</span>
						}
						onTitleClick={() => {
							history.push('/content/dashboard');
						}}
					/>

					<SubMenu
						key="table"
						title={
							<span>
								<Icon type="table" />
								Table
							</span>
						}
						onTitleClick={() => {
							history.push('/content/table');
						}}
					/>
					<SubMenu
						key="detail"
						title={
							<span>
								<Icon type="read" />
								Detail
							</span>
						}
						onTitleClick={() => {
							history.push('/content/detail');
						}}
					/>
				</Menu>
			</div>
		);
	}
}

export default MenuBar;
