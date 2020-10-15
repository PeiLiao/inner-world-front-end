import * as React from 'react';
import './index.less';
import { Router, Route, Switch } from 'react-router-dom';
import MenuBar from '../../Components/MenuBar';
import Dashboard from '../../Components/Dashboard';
import TableCon from '../../Components/TableCon';
import Detail from '../../Components/Detail';
import Intro from '../../Components/Intro';
import UserHeader from '../../Components/UserHeader';
import history from '../../routes/history';
import { UserComsumer } from '../../contexts/UserContext';
import { getJson } from '../../helpers/utils/HttpService';

class Content extends React.Component<any, any> {
	constructor(props) {
		super(props);
		this.state = {
			ownerInfo: {}
		};
	}

	componentWillMount() {
		const { setZoneId } = this.props;
		setZoneId(this.props.match.params.id);
		this.getOwnerInfo();
	}

	getOwnerInfo = async () => {
		const ownerInfo = await getJson('/rap/app/mock/227833/getZone');
		this.setState({ ownerInfo });
	};

	render() {
		console.log('menu', this.props);
		return (
			<div className="ContentPage">
				<header>
					Logout
				</header>
				<div className="MenuContentLayout__left">
					<MenuBar {...this.state.ownerInfo} />
				</div>
				<div className="MenuContentLayout__right">
					<div className="MenuContentLayout__header">{<UserHeader />}</div>
					<div className="MenuContentLayout__Content">
						<Router history={history}>
							<Switch>
								<Route exact path="/content/:id" component={Intro} />
								<Route path="/content/:id/dashboard" component={Dashboard} />
								<Route path="/content/:id/table/:type?" component={TableCon} />
								<Route path="/content/:id/detail" component={Detail} />
							</Switch>
						</Router>
					</div>
				</div>
			</div>
		);
	}
}

const ContentPage = (props) => {
	return <UserComsumer>{(context) => <Content {...Object.assign(context, props)} />}</UserComsumer>;
};

export default ContentPage;
