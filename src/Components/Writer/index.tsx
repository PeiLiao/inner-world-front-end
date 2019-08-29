import { Input, Select, Checkbox } from 'antd';
import { Button } from 'antd/lib/radio';
import React from 'react';
import './style.less';
const { Option } = Select;
class Writer extends React.Component<any, any> {
	render() {
		return (
			<div className="Writer">
				<div className="Writer__Title">
					<Input placeholder="title" style={{ width: 500 }} />
					<Select style={{ width: 100 }}>
						<Option value="One" />
					</Select>
				</div>
				<div className="Writer__Tags">
					<Checkbox>tag4</Checkbox>
					<Checkbox>tag3</Checkbox>
					<Checkbox>tag2</Checkbox>
					<Checkbox>tag1</Checkbox>
				</div>
				<div className="Writer__Content">
					<Input placeholder="content" style={{ width: 600, height: 500 }} />
				</div>
				<div className="Writer_Action">
					<Button>完成</Button>
				</div>
			</div>
		);
	}
}

export default Writer;
