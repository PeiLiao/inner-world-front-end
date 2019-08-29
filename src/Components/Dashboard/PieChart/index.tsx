import React from 'react';
import ReactCharts from 'echarts-for-react';
import merge from '../../../helpers/utils/objectHelper';
import './index.less';
class PieChart extends React.Component<any, any> {
	getOption = (sourcedata, theme) => {
		const { title = '', data } = sourcedata;
		if (!data) {
			return {};
		}

		/* const legend: string[] = [];
		Array.from(data).forEach((item: any) => {
			legend.push(item.name);
		}); */

		const option = {
			title: [
				{
					text: title
				}
			],
			// legend: [
			// 	{
			// 		data: legend
			// 	}
			// ],
			series: [
				{
					data: data
				}
			]
		};
		return merge(option, theme);
	};

	public echarts_instance;
	public onChartLegendselectchanged = (params) => {
		const echarts_instance = this.echarts_instance
			? this.echarts_instance.getEchartsInstance()
			: null;
		let allUnselected = true;
		Object.values(params.selected).forEach((res) => {
			if (res) {
				allUnselected = false;
			}
		});
		if (allUnselected) {
			echarts_instance.dispatchAction({
				type: 'legendSelect',
				// 图例名称
				name: Object.keys(params.selected)[0]
			});
		}
	};

	render() {
		return (
			<div className="pie-chart">
				<ReactCharts
					ref={(e) => {
						this.echarts_instance = e;
					}}
					option={this.getOption(this.props.data, this.props.theme)}
					className="chart"
					style={{ width: '100%', height: '100%' }}
					onEvents={{
						legendselectchanged: this.onChartLegendselectchanged
					}}
				/>
			</div>
		);
	}
}
export default PieChart;
