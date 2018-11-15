var analyze = echarts.init(document.getElementById('analyze'));
	
var analyzes = {
	radar: [{
        indicator: [{
                text: '市场保有量',
                max: 150
            },
            {
                text: '数据回传准确率',
                max: 150
            },
            {
                text: '故障及时修复率',
                max: 150
            },
            {
                text: '数据回传及时',
                max: 120
            }

        ],
        splitArea: {
            areaStyle: {
                color: ['rgba(95, 151, 255, 0)',
                    'rgba(95, 151, 255, 0.2)', 'rgba(95, 151, 255, 0)',
                    'rgba(95, 151, 255, 0.2)', 'rgba(95, 151, 255,0)'
                ],
            }
        },
        radius: 120 ,
        name: {
            textStyle: {
                color: '#000'
            }
        },  
    }],
    series: [{
        name: '',
        type: 'radar',
        radarIndex: 0,
        data: [{
            value: [30, 40, 60,80],
            areaStyle: {
                normal: {
                    opacity: 1,
                    color: new echarts.graphic.RadialGradient(0.5, 0.5, 1, [{
                            color: 'rgba(39,114,253,.8)',
                            offset: 0
                        },
                        {
                            color: 'rgba(39,114,253,.4)',
                            offset: 1
                        }
                    ]),
                }
            }
        }],
		itemStyle: {
            normal: {
                opacity: 0,
                    color: 'rgba(39,114,253,0)'
            }
        },
    }]
}

analyze.setOption(analyzes);