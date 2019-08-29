import * as React from 'react';
import { Avatar } from 'antd';
import imgAll from '../../../img/All.png';
import imgPositive from '../../../img/Positive.png';
import './index.less';

enum DataCardIcon {
	All,
	Positive,
	Null
}

interface Iprops {
	icon: DataCardIcon;
	title: string;
	num: number;
	unit: string;
	width: string;
	height: string;
}

export const DataCardState: Iprops = {
	icon: DataCardIcon.All,
	title: '病例检测总数',
	num: 169,
	unit: '份',
	width: '400px',
	height: '166px'
};

class DataCard extends React.Component<Iprops, any> {
	getImgSource = (icon: DataCardIcon) => {
		switch (icon) {
			case DataCardIcon.All:
				return imgAll;
			case DataCardIcon.Positive:
				return imgPositive;
			case DataCardIcon.Null:
				return '';
			default:
				return '';
		}
	};

	render() {
		return (
			<div
				className="DataCard"
				style={{ height: this.props.height, width: this.props.width }}
			>
				<div className="DataCard__Sider">
					<Avatar
						className="DataCard__Logo"
						src={this.getImgSource(this.props.icon)}
					/>
				</div>
				<div className="DataCard__Content">
					<div className="DataCard__Title">{this.props.title}</div>

					<div className="DataCard__Value">
						<p className="DataCard__Num">{this.props.num}</p>
						<p className="DataCard__Unit">{this.props.unit}</p>
					</div>
				</div>
			</div>
		);
	}
}

export default DataCard;
