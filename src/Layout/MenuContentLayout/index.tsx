import * as React from 'react';
import './index.less';
import { Router, Route, Switch } from 'react-router-dom';
import { MenuState } from '../../Components/MenuBar';
import MenuBar from '../../Components/MenuBar';
import Dashboard from '../../Components/Dashboard';
import TableCon from '../../Components/TableCon';
import Detail from '../../Components/Detail';
import Intro from '../../Components/Intro';
import NoAuth from '../../Components/NoAuth';
import UserHeader from '../../Components/UserHeader';
import history from '../../routes/history';
import { UserComsumer } from '../../contexts/UserContext';

class UserMenu extends React.Component<any, any> {
	render() {
		const { login } = this.props;
		console.log('menu', this.props);
		return (
			<div className="MenuContentLayout">
				<div className="MenuContentLayout__left">
					<MenuBar {...MenuState} />
				</div>

				<div className="MenuContentLayout__right">
					<div className="MenuContentLayout__header">{UserHeader}</div>
					{login ? (
						<div className="MenuContentLayout__Content">
							<Router history={history}>
								<Switch>
									<Route exact path="/content/" component={Intro} />
									<Route exact path="/content/dashboard" component={Dashboard} />
									<Route path="/content/table/:type?" component={TableCon} />
									<Route exact path="/content/detail" component={Detail} />
								</Switch>
							</Router>
						</div>
					) : (
						<NoAuth />
					)}
				</div>
			</div>
		);
	}
}

const MenuContentLayout = <UserComsumer>{(context) => <UserMenu {...context} />}</UserComsumer>;

export default MenuContentLayout;
