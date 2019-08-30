import * as React from 'react';
import { Table, PageHeader, Tag, Divider } from 'antd';

interface IState {
	type: string;
}

class TableCon extends React.Component<any, IState> {
	public componentWillMount() {
		console.log(this.props.match.params.type);
		this.setState({ type: this.props.match.params.type });
	}

	mockData = (type: string) => {
		switch (type) {
			case 'one':
				return [
					{
						date: 20190809,
						items: 6,
						tags: ['A', 'B'],
						latest: "you're my little sunshine"
					},
					{
						date: 20190706,
						items: 7,
						tags: ['A', 'C'],
						latest: 'go die'
					}
				];
			case 'two':
				return [
					{
						date: 20190809,
						items: 1,
						tags: ['B', 'C'],
						latest: '风中有朵雨做的云'
					}
				];
		}
	};

	columns = [
		{
			title: '日期',
			dataIndex: 'date',
			key: 'date'
		},
		{
			title: '作品数',
			dataIndex: 'items',
			key: 'items'
		},
		{
			title: '最近更新',
			dataIndex: 'latest',
			key: 'latest'
		},
		{
			title: '标签',
			dataIndex: 'tags',
			key: 'tags',
			render: (tags) =>
				tags.map((tag) => (
					<Tag color="blue" key={tag}>
						{tag}
					</Tag>
				))
		},
		{
			title: '操作',
			dataIndex: 'action',
			key: 'action',
			render: (record) => (
				<span>
					<span>detail</span>
					<Divider type="vertical" />
					<span>Delete</span>
				</span>
			)
		}
	];

	render() {
		const { type } = this.state;
		console.log(type);
		// data = getTableData()
		return (
			<div>
				<PageHeader title={`Welcome to this ${type ? type : 'whole'} page`} subTitle="See me!" />
				<Table dataSource={this.mockData(type)} columns={this.columns} />
			</div>
		);
	}
}

export default TableCon;
