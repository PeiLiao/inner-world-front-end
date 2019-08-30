import * as React from 'react';
import { Card, Icon, Modal, Input, Button, message } from 'antd';
import { IDashboardStore, Type } from '../../store/Dashboard/store';
import { connect } from 'react-redux';
import { redirectToTable } from '../../store/Dashboard/actions';
import history from '../../routes/history';
import './index.less';
import { getJson } from '../../helpers/utils/HttpService';

class Dashboard extends React.Component<any, any> {
	constructor(props) {
		super(props);
		this.state = {
			showAddModal: false,
			logged: false,
			title: '',
			description: ''
		};
	}

	setShowAddModal = () => {
		this.setState({ showAddModal: !this.state.showAddModal });
	};

	onAddType = async () => {
		const res: any = await getJson('addtype', { title: this.state.title, description: this.state.description });
		if (res.code === 200) {
			message.success('完成');
			this.props.onfinish();
		} else {
			message.error('error');
		}
	};

	handleClick = (e) => {
		console.log(e);
		history.push(`/content/${this.props.match.params.id}/table/${e.title}`);
	};

	render() {
		return (
			<div className="Dashboard">
				<div className="Dashboard_Header" />
				<div className="Dashboard_Content">
					<Card className="Dashboard__Card" title="Poem" bordered={true} style={{ width: 300 }} onClick={this.handleClick}>
						<p>One</p>
					</Card>
					<Card className="Dashboard__Card" title="Artical" bordered={true} style={{ width: 300 }} onClick={this.handleClick}>
						<p>Two</p>
					</Card>
					<Card className="Dashboard__Card" title="Other" bordered={true} style={{ width: 300 }} onClick={this.handleClick}>
						<p>Three</p>
					</Card>
					{this.state.logged && (
						<Card className="Dashboard__Card" onClick={this.setShowAddModal}>
							<Icon type="new" />
						</Card>
					)}

					<Modal visible={this.state.showAddModal} footer={null}>
						<Input
							placeholder="title"
							style={{ width: 500 }}
							onChange={(value) => {
								this.setState({ title: value });
							}}
						/>
						<Input
							placeholder="description"
							style={{ width: 500 }}
							onChange={(value) => {
								this.setState({ description: value });
							}}
						/>
						<Button onClick={this.onAddType}>完成</Button>
					</Modal>
				</div>
			</div>
		);
	}
}

export function mapStateToProps(state: IDashboardStore) {
	return {
		...state
	};
}

export function mapDispatchToProps(dispatch: any) {
	return {
		redirectToTable: (type: Type) => {
			dispatch(redirectToTable(type));
		}
	};
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Dashboard);
