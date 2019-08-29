import React from 'react';
import './style.less';
import { Empty } from 'antd';
class NoAuth extends React.Component<any, any> {
	render() {
		return (
			<div className="empty">
				<Empty description={'please login'} />
			</div>
		);
	}
}

export default NoAuth;
