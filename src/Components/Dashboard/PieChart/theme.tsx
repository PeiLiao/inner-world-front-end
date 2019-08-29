export const darkTheme = {
	title: [
		{
			textAlign: 'left',
			textStyle: {
				fontFamily: 'SourceHanSansSC-Medium',
				fontSize: 20,
				lineHeight: 29,
				fontWeight: 'normal',
				color: 'rgba(201,209,222,0.90)'
			},
			left: '3%'
		}
	],
	tooltip: {
		trigger: 'item',
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
			const dotHtml = `<span style="display:inline-block;margin-right:10px;margin-left:5px;border-radius:10px;width:10px;height:10px;background-color:${
				data.color
			}"></span>`;
			const hideDotHtml =
				'<span style="display:inline-block;margin-right:10px;margin-left:5px;border-radius:10px;width:10px;height:10px;background-color:#2B364D;opacity: 0.9;"></span>';
			return (
				dotHtml +
				data.name +
				'比例：' +
				data.percent +
				'%<br/>' +
				hideDotHtml +
				data.name +
				'数量：' +
				data.value
			);
		}
	},
	color: ['#167BEA', '#98B9FF', '#27C9CF', '#3B6276', '#915ED4', '#DEA550'],
	legend: [
		{
			selectedMode: true,
			bottom: '5%',
			itemGap: 20,
			textStyle: {
				fontFamily: 'SourceHanSansSC-Regular',
				fontSize: 12,
				color: 'rgba(201,209,222,0.70)'
			},
			icon: 'rect'
		}
	],
	series: [
		{
			type: 'pie',
			radius: ['35%', '50%'],
			avoidLabelOverlap: false,
			hoverAnimation: true,
			center: ['50%', '50%'],
			labelLine: {
				show: true,
				lineStyle: {
					color: 'rgba(201,209,222,0.40)'
				},
				length: 10,
				length2: 20
			},
			itemStyle: {
				normal: {
					label: {
						show: true,
						color: 'rgba(201,209,222,0.40)',
						lineHeight: 17,
						fontSize: 12,
						fontFamily: 'SourceHanSansSC-Medium',
						formatter: ['{b}', '{s|{d}%}'].join('\n'),
						rich: {
							s: {
								color: 'rgba(201,209,222,0.70)'
							}
						}
					}
				}
			}
		}
	]
};

export default darkTheme;
