	var data = [57, 57, 57];
	var data1 = [45, 45, 45];
	var data2 = [60, 60, 60];
	var _data = echarts.init(document.getElementById('data'));
	let data_option = {
		// backgroundColor: '#0e2147',
	    tooltip: {
	        show: "true",
	        trigger: 'axis',
	        axisPointer: { // 坐标轴指示器，坐标轴触发有效
	            type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
	            shadowStyle: {
	                color: 'rgba(112,112,112,0)',
	            },
	        },
	        formatter: '{b}<br />{a0}: {c0}万<br />{a1}: {c1}万<br />{a2}: {c2}万',
	        //backgroundColor: 'rgba(0,0,0,0.7)', // 背景
	        padding: [8, 10], //内边距
	        extraCssText: 'box-shadow: 0 0 3 rgba(255, 255, 255, 0.4);', //添加阴影
	    },
	    legend: {
	        top: 14,
	        right: 60,
	        textStyle: {
	            color: '#fff',
	        },
	        data: ['2016', '2015', '2014']
	    },
	    xAxis: [{
	        type: 'category',
	        axisTick: {
	            show: false
	        },
	        axisLine: {
	            show: true,
	            lineStyle: {
	                color: '#363e83',
	            }
	        },
	        axisLabel: {
	            inside: false,
	            textStyle: {
	                color: '#fff',
	                fontWeight: 'normal',
	                fontSize: '14',
	            },
	            margin : 14
	        },
	        data: ['农机总原值', '动力原值', '组织/个人数']
	    }, {
	        type: 'category',
	        axisLine: {
	            show: false
	        },
	        axisTick: {
	            show: false
	        },
	        axisLabel: {
	            show: false
	        },
	        splitArea: {
	            show: false
	        },
	        splitLine: {
	            show: false
	        },
	        data: ['农机总原值', '动力原值', '组织/个人数']
	    }, {
	        type: 'category',
	        axisLine: {
	            show: false
	        },
	        axisTick: {
	            show: false
	        },
	        axisLabel: {
	            show: false
	        },
	        splitArea: {
	            show: false
	        },
	        splitLine: {
	            show: false
	        },
	        data: ['农机总原值', '动力原值', '组织/个人数'] ,

	    }],
	    yAxis: {
	        type: 'value',
	        axisTick: {
	            show: false
	        },
	        axisLine: {
	            show: true,
	            lineStyle: {
	                color: '#32346c',
	            }
	        },
	        splitLine: {
	            show: true,
	            lineStyle: {
	                color: '#32346c ',
	            }
	        },
	        axisLabel: {
	            textStyle: {
	                color: '#fff',
	                fontWeight: 'normal',
	                fontSize: '12',
	            },
	        },

	    },
	    series: [{
	            name: '2016',
	            type: 'bar',
	            stack: '1',
	            xAxisIndex: 0,
	            data: data,
	            label: {
	                normal: {
	                    show: false,
	                    position: 'right',
	                    distance: 10,
	                    formatter: function(param) {
	                        return param.value + '%';
	                    },
	                    textStyle: {
	                        color: '#ffffff',
	                        fontSize: '16',
	                    }
	                }
	            },
	            barWidth: 8,
	            itemStyle: {
	                normal: {
	                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
	                        offset: 0,
	                        color: '#008fff'
	                    }, {
	                        offset: 1,
	                        color: '#54b3fe'
	                    }]),
	                }
	            },
	            z: 2
	        },
	        {
	            name: '2016',
	            type: 'scatter',
	            stack: '1',
	            xAxisIndex: 1,
	            symbolOffset: [-48, 0], //相对于原本位置的偏移量
	            data: [0, 0, 0],
	            label: {
	                normal: {
	                    show: false,
	                }
	            },
	            symbolSize: 10,
	            itemStyle: {
	                normal: {
	                    borderColor: '#fff',
	                    borderWidth: 2,
	                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
	                        offset: 0,
	                        color: '#008fff'
	                    }, {
	                        offset: 1,
	                        color: '#54b3fe'
	                    }]),
	                    opacity: 1,
	                }
	            },
	            z: 2
	        },
	        {
	            name: '2016',
	            type: 'bar',
	            xAxisIndex: 1,
	            barGap: '100%',
	            data: [data[0] + 5, data[1] + 5, data[2] + 5, data[3] + 5, ],
	            barWidth: 20,
	            itemStyle: {
	                normal: {
	                    color: '#0e2147',
	                    barBorderRadius: 5,
	                }
	            },
	            z: 1
	        },
	        {
	            name: '2016',
	            type: 'bar',
	            xAxisIndex: 2,
	            data: [data[0] + 5.5, data[1] + 5.5, data[2] + 5.5,],
	            barWidth: 24,
	            itemStyle: {
	                normal: {
	                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
	                        offset: 0,
	                        color: '#008fff'
	                    }, {
	                        offset: 1,
	                        color: '#54b3fe'
	                    }]),
	                    barBorderRadius: 5,
	                }
	            },
	            z: 0
	        },
	        {
	            name: '2016',
	            type: 'scatter',
	            hoverAnimation: false,
	            data: [1.2, 1.2, 1.2],
	            xAxisIndex: 2,
	            symbolOffset: [-48, 0], //相对于原本位置的偏移量
	            symbolSize: 18,
	            itemStyle: {
	                normal: {
	                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
	                        offset: 0,
	                        color: '#008fff'
	                    }, {
	                        offset: 1,
	                        color: '#54b3fe'
	                    }]),
	                    opacity: 1,
	                }
	            },
	            z: 2
	        },
	        {
	            name: '2015',
	            type: 'bar',
	            stack: '2',
	            xAxisIndex: 0,
	            data: data1,
	            label: {
	                normal: {
	                    show: false,
	                    position: 'right',
	                    distance: 10,
	                    formatter: function(param) {
	                        return param.value + '%';
	                    },
	                    textStyle: {
	                        color: '#ffffff',
	                        fontSize: '16',
	                    }
	                }
	            },
	            // barGap: 8.5,
	            barWidth: 8,
	            itemStyle: {
	                normal: {
	                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
	                        offset: 0,
	                        color: '#00fcf6'
	                    }, {
	                        offset: 1,
	                        color: '#97f5fb'
	                    }]),
	                }
	            },
	            z: 2
	        },
	        {
	            name: '2015',
	            type: 'scatter',
	            stack: '2',
	            // xAxisIndex: 0,
	            symbolOffset: [0, 0], //相对于原本位置的偏移量
	            data: [0, 0, 0, 0],
	            label: {
	                normal: {
	                    show: false,
	                    // position:'right',
	                    // formatter:function(param){
	                    //   return param.value + '%';
	                    // },

	                    // textStyle:{
	                    //   color: '#ffffff',
	                    //   fontSize:'16',
	                    // }
	                }
	            },
	            xAxisIndex: 2,
	            symbolSize: 10,
	            itemStyle: {
	                normal: {
	                    borderColor: '#fff',
	                    borderWidth: 2,
	                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
	                        offset: 0,
	                        color: '#00fcf6'
	                    }, {
	                        offset: 1,
	                        color: '#97f5fb'
	                    }]),
	                    opacity: 1,
	                }
	            },
	            z: 2
	        },
	        {
	            name: '2015',
	            type: 'bar',
	            xAxisIndex: 1,
	            barGap: '140%',
	            data: [data1[0] + 5, data1[1] + 5, data1[2] + 5, data1[3] + 5, ],
	            barWidth: 20,
	            itemStyle: {
	                normal: {
	                    color: '#0e2147',
	                    barBorderRadius: 5,
	                }
	            },
	            z: 1
	        },
	        {
	            name: '2015',
	            type: 'bar',
	            xAxisIndex: 2,
	            barGap: 1,
	            data: [data1[0] + 5.5, data1[1] + 5.5, data1[2] + 5.5, data1[3] + 5.5, ],
	            barWidth: 24,
	            itemStyle: {
	                normal: {
	                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
	                        offset: 0,
	                        color: '#00fcf6'
	                    }, {
	                        offset: 1,
	                        color: '#97f5fb'
	                    }]),
	                    barBorderRadius: 5,
	                }
	            },
	            z: 0
	        },
	        {
	            name: '2015',
	            type: 'scatter',
	            hoverAnimation: false,
	            data: [1.2, 1.2, 1.2, 1.2],
	            xAxisIndex: 2,
	            symbolOffset: [0, 0], //相对于原本位置的偏移量
	            symbolSize: 18,
	            itemStyle: {
	                normal: {
	                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
	                        offset: 0,
	                        color: '#00fcf6'
	                    }, {
	                        offset: 1,
	                        color: '#97f5fb'
	                    }]),
	                    opacity: 1,
	                }
	            },
	            z: 2
	        },

	        {
	            name: '2014',
	            type: 'bar',
	            stack: '3',
	            xAxisIndex: 0,
	            data: data2,
	            label: {
	                normal: {
	                    show: false,
	                    position: 'right',
	                    distance: 10,
	                    formatter: function(param) {
	                    	console.log(param);
	                        return param.value + '%';
	                    },
	                    textStyle: {
	                        color: '#ffffff',
	                        fontSize: '16',
	                    }
	                }
	            },
	            barGap: 5,
	            barWidth: 8,
	            itemStyle: {
	                normal: {
	                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
	                        offset: 0,
							color: '#ffea00'
	                    }, {
	                        offset: 1,
	                        color: '#fdf060'

	                    }]),
	                }
	            },
	            z: 2
	        },
	        {
	            name: '2014',
	            type: 'scatter',
	            stack: '3',
	            symbolOffset: [48, 0], //相对于原本位置的偏移量
	            data: [0, 0, 0],
	            label: {
	                normal: {
	                    show: false,
	                }
	            },
	            xAxisIndex: 2,
	            symbolSize: 10,
	            itemStyle: {
	                normal: {
	                    borderColor: '#fff',
	                    borderWidth: 3,
	                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
	                        offset: 0,
	                        color: '#ffea00'
	                    }, {
	                        offset: 1,
	                        color: '#7049f0'
	                    }]),
	                    opacity: 1,
	                }
	            },
	            z: 2
	        },
	        {
	            name: '2014',
	            type: 'bar',
	            xAxisIndex: 1,
	            barGap: '140%',
	            data: [data2[0] + 5, data2[1] + 5, data2[2] + 5],
	            barWidth: 20,
	            itemStyle: {
	                normal: {
	                    color: '#0e2147',
	                    barBorderRadius: 5,
	                }
	            },
	            z: 1
	        },
	        {
	            name: '2014',
	            type: 'bar',
	            xAxisIndex: 2,
	            barGap: 1,
	            data: [data2[0] + 5.5, data2[1] + 5.5, data2[2] + 5.5],
	            barWidth: 24,
	            itemStyle: {
	                normal: {
	                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
	                        offset: 0,
							color: '#ffea00'
	                    }, {
	                        offset: 1,
	                        color: '#fdf060'

	                    }]),
	                    barBorderRadius: 5,
	                }
	            },
	            z: 0
	        },
	        {
	            name: '2014',
	            type: 'scatter',
	            hoverAnimation: false,
	            data: [1.2, 1.2, 1.2],
	            xAxisIndex: 2,
	            symbolOffset: [48, 0], //相对于原本位置的偏移量
	            symbolSize: 18,
	            itemStyle: {
	                normal: {
	                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
	                        offset: 0,
							color: '#ffea00'
	                    }, {
	                        offset: 1,
	                        color: '#fdf060'

	                    }]),
	                    opacity: 1,
	                }
	            },
	            z: 2
	        },
	    ]
	}
	_data.setOption(data_option);