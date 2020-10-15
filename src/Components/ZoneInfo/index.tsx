import './index.less';
import * as React from 'react';
import { Menu, Icon, Avatar, Descriptions, Select } from 'antd';
import history from '../../routes/history';
import { createAction } from 'redux-actions';
import StoreState from '../../store/store';
import { connect } from 'react-redux';
const { SubMenu } = Menu;
const { Option } = Select;

const changeLanguage = createAction<{ locale: string }>('CHANGELLANGUAGE');
interface Iprops {
	username: string;
	email: string;
	wechat: string;
	signature: string;
	zoneId: number;
	changeLanguage: typeof changeLanguage;
}

export const MenuState = {
	username: 'water',
	email: 'unknown',
	wechat: 'leo-1996',
	signature: 'stay foolish'
};

class ZoneInfo extends React.Component<Iprops, any> {
	constructor(props) {
		super(props);
		this.state = {
			isOwner: true
		};
	}
	render() {
		console.log(this.props);
		return (
			<div className="MenuBar">
				<div className="MenuBar__Intro">
					<Avatar className="MenuBar__Intro__Avatar" size={128} icon="user" />
					<Descriptions className="MenuBar__Intro__Title" title={this.props.username} column={1}>
						<Descriptions.Item className="MenuBar__Intro__Label" label="WeChat">
							{this.props.wechat}
						</Descriptions.Item>
						<Descriptions.Item className="MenuBar__Intro__Label" label="Email">
							{this.props.email}
						</Descriptions.Item>
						<Descriptions.Item className="MenuBar__Intro__Label" label="Signature">
							{this.props.signature}
						</Descriptions.Item>
					</Descriptions>
				</div>
				{this.state.isOwner && (
					<Select className="select-language" value="English" onSelect={this.props.changeLanguage}>
						<Option value="English">English</Option>
						<Option value="Chinese">Chinese</Option>
					</Select>
				)}
			</div>
		);
	}
}

const mapStateToProps = (state: StoreState, ownProps: any) => {
	return {
		...ownProps,
		locale: state.locale
	};
};

export default connect(
	mapStateToProps,
	{ ...changeLanguage }
)(ZoneInfo);
