import { Card } from 'antd';
import React from 'react';

interface Iprops {
	title: string;
	content: string;
}
class Poem extends React.Component<Iprops, any> {
	render() {
		return (
			<div style={{ background: '#ECECEC', padding: '30px' }}>
				<Card title={this.props.title} bordered={false} style={{ width: 300 }}>
					<p>{this.props.content}</p>
				</Card>
			</div>
		);
	}
}

export default Poem;
