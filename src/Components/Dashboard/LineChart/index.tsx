import React from 'react';
import ReactCharts from 'echarts-for-react';
import './style.less';

export const CaseTypeMap = {
	total: '病例检测数',
	positive: '阳性病例数',
	negative: '阴性病例数'
};

const getOption = (sourcedata, map) => {
	const { title = '', xUnit = '', yUnit = '', data } = sourcedata;
	console.log(data);
	if (data.length === 0) {
		return {};
	}
	const dataSeries: object[] = [];
	const rawSeries = {
		type: 'line',
		smooth: false,
		symbolSize: 6,
		showSymbol: false,
		lineStyle: {
			width: 3
		},
		areaStyle: {
			normal: {
				color: {
					type: 'linear',
					x: 0,
					y: 0,
					x2: 0,
					y2: 1,
					colorStops: [
						{
							offset: 0,
							color: '#316FBF'
						},
						{
							offset: 1,
							color: 'rgba(52,156,247,0.37)'
						}
					]
				},
				opacity: 0.15
			}
		}
	};

	Object.keys(data[0]).forEach((key) => {
		if (!map[key]) {
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
		color: ['#27C9CF', '#349AF3', '#84A3E6'],
		grid: [
			{
				top: '20%'
			}
		],
		legend: [
			{
				selectedMode: true,
				bottom: '2%',
				itemGap: 20,
				textStyle: {
					fontFamily: 'SourceHanSansSC-Regular',
					fontSize: 12,
					color: 'rgba(201,209,222,0.70)'
				},
				icon: 'rect'
			}
		],
		xAxis: {
			name: `(${xUnit})`,
			nameTextStyle: {
				fontFamily: ' SourceHanSansSC-Regular',
				fontSize: 12,
				color: 'rgba(201,209,222,0.70)'
			},
			type: 'category',
			boundaryGap: false,
			data: data.map((item) => item['date']),
			axisLabel: {
				fontFamily: ' SourceHanSansSC-Regular',
				fontSize: 12,
				color: 'rgba(201,209,222,0.70)'
			}
		},
		yAxis: {
			name: `(${yUnit})`,
			nameTextStyle: {
				fontFamily: ' SourceHanSansSC-Regular',
				fontSize: 12,
				color: 'rgba(201,209,222,0.70)'
			},
			type: 'value',
			splitLine: {
				show: true,
				lineStyle: {
					color: 'rgba(201,209,222,0.1)',
					witdh: 1,
					type: 'solid'
				}
			},
			axisLabel: {
				fontFamily: ' SourceHanSansSC-Regular',
				fontSize: 12,
				color: 'rgba(201,209,222,0.70)',
				padding: [0, 10, 0, 0]
			}
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
			formatter: function(data) {
				if (data.length === 0) {
					return '';
				}
				let str = data[0].axisValue + '<br/>';
				data.forEach((item) => {
					const dotHtml = `<span style="display:inline-block;margin-right:10px;margin-left:5px;border-radius:10px;width:10px;height:10px;background-color:${
						item.color
					}"></span>`;
					str =
						str +
						dotHtml +
						item.seriesName +
						'：' +
						item.value +
						yUnit +
						'<br/>';
				});

				return str;
			}
		},
		series: dataSeries
	};
};

export default class LineChart extends React.Component<any, any> {
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
			return <div className="line-chart" />;
		}
		return (
			<div className="line-chart">
				<ReactCharts
					ref={(e) => {
						this.echarts_instance = e;
					}}
					option={getOption(this.props.data, this.props.map)}
					className="chart"
					onEvents={{
						legendselectchanged: this.onChartLegendselectchanged
					}}
					style={{
						width: '100%',
						height: '100%'
					}}
				/>
			</div>
		);
	}
}
