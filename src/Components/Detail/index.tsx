import * as React from 'react';
import SearchBar from '../SearchBar';
import Artical from './Artical';
import Poem from './Poem';
import { Modal } from 'antd';
import Writer from '../Writer';
import { Button } from 'antd/lib/radio';
interface IProps {
	id: number;
}

class Detail extends React.Component<IProps, any> {
	constructor(props) {
		super(props);
		this.state = {
			type: 'twe',
			date: 20190809,
			data: [{ title: 'new', content: 'that is it' }],
			showModal: false,
			logged: false
		};
	}

	onAdd = () => {
		this.setState({ showModal: !this.state.showModal });
	};

	componentWillMount() {
		// getDetail();
		this.setState({ logged: true });
	}

	render() {
		return (
			<div>
				{this.state.type === 'one' ? (
					<SearchBar>
						<Artical />
					</SearchBar>
				) : (
					this.state.data.map((element) => <Poem id={element.id} title={element.title} content={element.content} />)
				)}
				{this.state.logged && <Button onClick={this.onAdd}>new</Button>}

				<Modal footer={null} visible={this.state.showModal}>
					<Writer
						onfinish={() => {
							this.setState({ showModal: false });
						}}
					/>
				</Modal>
			</div>
		);
	}
}

export default Detail;
