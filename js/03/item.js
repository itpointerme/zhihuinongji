	var item = echarts.init(document.getElementById('item'));
	/*-- 月份 --*/
	let _month = ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'];
	/*-- 数据 --*/
	let data = [57,45,60,56,80,58,80,89,46,85,99,58] ;
	//let data1 = [57,45,60,56,80,58,80,89,46,85,99,58] ;
	//底部圆点
	let _bottom = new Array();
	//外部边框
	let  _border = new Array();
	//顶部圆点
	let _top = new Array();

	$.each(data,function(i,v){
		_bottom[i] = 1;
		_border[i] = v + 10;
		_top[i] = 0;
	})
	let _item = {
		title : {
			text : '比率 /%',
			textStyle : {
				color : '#fff' ,
				fontSize : 12 , 
			},
			right : '9%',
			top : '10%'
		},
	    tooltip: {
	        show: "true",
	        trigger: 'axis',
	        axisPointer: { // 坐标轴指示器，坐标轴触发有效
	            type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
	            shadowStyle: {
	                color: 'rgba(112,112,112,0)',
	            },
	        },
	        formatter: '{b}{a0}: {c0}%',
	        //backgroundColor: 'rgba(0,0,0,0.7)', // 背景
	        padding: [8, 10], //内边距
	        extraCssText: 'box-shadow: 0 0 3 rgba(255, 255, 255, 0.4);', //添加阴影
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
	                fontSize: '10',
	            },
	            margin : 12
	        },
	        data: _month,
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
	            show: false,
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
	            name: '项目进度',
	            type: 'bar',
	            stack: '1',
	            xAxisIndex: 0,
	            data: data,
	            label: {
	                normal: {
	                    show: true,
	                    position: 'top',
	                    distance: 10,
	                    formatter: function(param) {
	                        return param.value;
	                    },
	                    textStyle: {
	                        color: '#92fff',
	                        fontSize: '12',
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
	        /*顶部圆点*/
	        {
	            name: '项目进度',
	            type: 'scatter',
	            stack: '1',
	            xAxisIndex: 1,
	            symbolOffset: [0, 0], //相对于原本位置的偏移量
	            data: _top,
	            label: {
	                normal: {
	                    show: false,
	                }
	            },
	            symbolSize: 8,
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
	        /*中间柱子*/
	        {
	            name: '项目进度',
	            type: 'bar',
	            xAxisIndex: 1,
	            barGap: '100%',
	            data: data,
	            barWidth:16,
	            itemStyle: {
	                normal: {
	                    color: '#0e2147',
	                    barBorderRadius: 5,
	                }
	            },
	            z: 1
	        },
	        /*外边框*/
	        {
	            name: '项目进度',
	            type: 'bar',
	            xAxisIndex: 2,
	            data : [57,45,60,56,80,58,80,89,46,85,99,58],
	            barWidth: 22,
	            itemStyle: {
	                normal: {
	                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
	                        offset: 0,
	                        color: '#008fff'
	                    }, {
	                        offset: 1,
	                        color: '#54b3fe'
	                    }]),
	                    barBorderRadius:20,
	                }
	            },
	            z: 0
	        },
	        /*底部圆点*/
	        {
	            name: '项目进度',
	            type: 'scatter',
	            hoverAnimation: false,
	            data: _bottom,
	            xAxisIndex: 2,
	            symbolOffset: [0, 0], //相对于原本位置的偏移量
	            symbolSize: 12,
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
	        }
	    ]
	}
	item.setOption(_item);