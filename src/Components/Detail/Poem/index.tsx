import { Card } from 'antd';
import React from 'react';

interface Iprops {
	title: string;
	content: string;
	id: number;
}
class Poem extends React.Component<Iprops, any> {
	render() {
		return (
			<div style={{ background: '#ECECEC', padding: '30px' }}>
				<Card key={this.props.id} title={this.props.title} bordered={false} style={{ width: 300 }}>
					<p>{this.props.content}</p>
				</Card>
			</div>
		);
	}
}

export default Poem;
