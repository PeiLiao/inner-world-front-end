import { Input, Select, Checkbox, message } from 'antd';
import { Button } from 'antd/lib/radio';
import React from 'react';
import './style.less';
import { getJson } from '../../helpers/utils/HttpService';
const { Option } = Select;

interface Work {
	title: string;
	type: string;
	tags: string[];
	content: string;
}

class Writer extends React.Component<any, any> {
	constructor(props) {
		super(props);
		this.state = {
			types: [],
			tags: [],
			title: '',
			worktype: '',
			worktags: [],
			content: ''
		};
	}

	componentWillMount() {
		this.init();
	}

	init = async () => {
		const res: any = await getJson('getzone', { id: this.props.match.params.id });
		this.setState({
			types: res.types,
			tags: res.tags
		});
	};

	onAddWork = async () => {
		const work: Work = { title: this.state.title, type: this.state.worktype, tags: this.state.worktags, content: this.state.content };
		const res: any = await getJson('addwork', work);
		if (res.code === 200) {
			message.success('完成');
			this.props.onfinish();
		} else {
			message.error('error');
		}
	};

	render() {
		return (
			<div className="Writer">
				<div className="Writer__Title">
					<Input
						placeholder="title"
						style={{ width: 500 }}
						onChange={(value) => {
							this.setState({ title: value });
						}}
					/>
					<Select
						style={{ width: 100 }}
						onSelect={(value) => {
							this.setState({ worktype: value });
						}}
					>
						{this.state.types.map((type) => (
							<Option value={type} />
						))}
					</Select>
				</div>
				<div className="Writer__Tags">
					{this.state.tags.map((tag) => (
						<Checkbox>tag</Checkbox>
					))}
				</div>
				<div className="Writer__Content">
					<Input
						placeholder="content"
						style={{ width: 600, height: 500 }}
						onChange={(value) => {
							this.setState({ content: value });
						}}
					/>
				</div>
				<div className="Writer_Action">
					<Button onClick={this.onAddWork}>完成</Button>
				</div>
			</div>
		);
	}
}

export default Writer;
