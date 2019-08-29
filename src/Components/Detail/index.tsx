import * as React from 'react';
import SearchBar from '../SearchBar';
import Artical from './Artical';
import Poem from './Poem';
interface IProps {
	id: number;
}

class Detail extends React.Component<IProps, any> {
	constructor(props) {
		super(props);
		this.state = {
			type: 'twe',
			date: 20190809,
			data: [{ title: 'new', content: 'that is it' }]
		};
	}
	render() {
		return (
			<div>
				{this.state.type === 'one' ? (
					<SearchBar>
						<Artical />
					</SearchBar>
				) : (
					this.state.data.map((element) => <Poem title={element.title} content={element.content} />)
				)}
			</div>
		);
	}
}

export default Detail;
