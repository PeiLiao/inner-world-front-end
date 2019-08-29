import React from 'react';
import ReactCharts from 'echarts-for-react';
import './index.less';

const getOption = (sourcedata, singleMode: boolean, map) => {
	const { title = '', xUnit = '', yUnit = '', data } = sourcedata;
	if (!data.length) {
		return {};
	}
	const dataSeries: Object[] = [];
	const rawSeries = {
		type: 'bar',
		stack: singleMode ? 'overlap' : null,
		barWidth: singleMode ? 24 : 24 / Object.keys(map).length
	};

	Object.keys(data[0]).forEach((key) => {
		if (map && !map[key]) {
			return;
		}
		rawSeries['name'] = map[key];
		rawSeries['data'] = data.map((item) => item[key]);
		dataSeries.push(Object.assign({}, rawSeries));
	});

	return {
		title: [
			{
				text: title,
				textAlign: 'left',
				textStyle: {
					fontFamily: 'SourceHanSansSC-Medium',
					fontSize: 20,
					lineHeight: 29,
					fontWeight: 'normal',
					color: 'rgba(201,209,222,0.90)'
				}
			}
		],
		color: ['#167BEA', '#27C9CF', '#82A3E6'],
		grid: [
			{
				top: '30%',
				right: '15%',
				left: '15%',
				bottom: '20%'
			}
		],
		legend: {
			selectedMode: true,
			bottom: 0,
			itemGap: 20,
			textStyle: {
				fontFamily: 'SourceHanSansSC-Regular',
				fontSize: 12,
				color: 'rgba(201,209,222,0.70)'
			},
			icon: 'rect'
		},
		tooltip: {
			trigger: 'axis',
			position: function(p) {
				//其中p为当前鼠标的位置
				return [p[0], p[1] + 25];
			},
			textStyle: {
				fontFamily: 'SourceHanSansSC-Regular',
				fontSize: 14,
				color: '#C9D1DE',
				lineHeight: 20
			},
			backgroundColor: '#2B364D',
			extraCssText:
				'box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.4);border-radius: 4px;opacity: 0.9;',
			axisPointer: {
				type: 'shadow',
				shodowStyle: {
					color: 'rgba(201,209,222,0.05)'
				}
			}
		},
		xAxis: [
			{
				type: 'category',
				data: data.map((item) => item.type),
				axisTick: {
					alignWithLabel: true
				},
				name: `(${xUnit})`,
				nameTextStyle: {
					fontFamily: ' SourceHanSansSC-Regular',
					fontSize: 12,
					color: 'rgba(201,209,222,0.70)'
				},
				axisLabel: {
					fontFamily: ' SourceHanSansSC-Regular',
					fontSize: 12,
					color: 'rgba(201,209,222,0.70)'
				}
			}
		],
		yAxis: [
			{
				type: 'value',
				name: `(${yUnit})`,
				nameTextStyle: {
					fontFamily: ' SourceHanSansSC-Regular',
					fontSize: 12,
					color: 'rgba(201,209,222,0.70)'
				},
				splitLine: {
					show: true,
					lineStyle: {
						color: 'rgba(201,209,222,0.1)',
						witdh: 1,
						type: 'solid'
					}
				},
				axisLine: {
					show: false
				},
				axisLabel: {
					fontFamily: ' SourceHanSansSC-Regular',
					fontSize: 12,
					color: 'rgba(201,209,222,0.70)',
					padding: [0, 10, 0, 0]
				}
			}
		],
		series: dataSeries
	};
};

export default class BarChart extends React.Component<any, any> {
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
		if (!this.props.data) {
			return <div />;
		}
		return (
			<div className="bar-chart">
				<ReactCharts
					ref={(e) => {
						this.echarts_instance = e;
					}}
					option={getOption(
						this.props.data,
						this.props.singleMode,
						this.props.map
					)}
					className="chart"
					onEvents={{
						legendselectchanged: this.onChartLegendselectchanged
					}}
					style={{
						width: ' 100%',
						height: '100%'
					}}
				/>
			</div>
		);
	}
}
