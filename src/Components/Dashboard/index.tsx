import * as React from 'react';
import { Card } from 'antd';
import { IDashboardStore, Type } from '../../store/Dashboard/store';
import { connect } from 'react-redux';
import { redirectToTable } from '../../store/Dashboard/actions';
import history from '../../routes/history';
import './index.less';

class Dashboard extends React.Component<any, any> {
	constructor(props) {
		super(props);
		this.state = {
			datasource: [],
			filter: 'One'
		};
	}

	render() {
		return (
			<div className="Dashboard">
				<div className="Dashboard_Header" />
				<div className="Dashboard_Content">
					<Card className="Dashboard__Card" title="Poem" bordered={true} style={{ width: 300 }}>
						<p
							onClick={(e) => {
								history.push('/content/table/one');
							}}
						>
							One
						</p>
					</Card>
					<Card className="Dashboard__Card" title="Artical" bordered={true} style={{ width: 300 }}>
						<p
							onClick={(e) => {
								history.push('/content/table/two');
							}}
						>
							Two
						</p>
					</Card>
					<Card className="Dashboard__Card" title="Other" bordered={true} style={{ width: 300 }}>
						<p
							onClick={(e) => {
								history.push('/content/table/three');
							}}
						>
							Three
						</p>
					</Card>
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
