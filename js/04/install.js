var install = echarts.init(document.getElementById('install'));

/*颜色*/
var color= ['#0c90d3', '#0c90d3','#9dc92c', '#9dc92c','#e71a31','#e71a31'];

/*数量*/
var num = [8468,6468,3468];

let nums = 8468+6468+3468;

/*所占比重*/
var a = new Array()
$.each(num,function(i){
	a[i] = this / nums *100;
})



var dataStyle = {
    normal: {
        label: {
            show: false
        },
        labelLine: {
            show: false
        },
        shadowBlur: 40,
        borderWidth: 10,
        shadowColor: 'rgba(0, 0, 0, 0)' //边框阴影
    }
};
var placeHolderStyle = {
    normal: {
        color: '#393d50',
        label: {
            show: false
        },
        labelLine: {
            show: false
        }
    },
    emphasis: {
        color: '#393d50'
    }
};

let _install = {
    tooltip: {
        trigger: 'item',
        show: true,
        formatter: "{b} : <br/>{d}",
        formatter: function (datas){
		   	console.log(datas);
		   	return datas.data.name+":"+datas.data.value+'台';
		},
        padding: [8, 10], //内边距
        extraCssText: 'box-shadow: 0 0 3px rgba(255, 255, 255, 0.4);', //添加阴影
    },
    legend: {
        orient: 'vertical',
        left: 'center',
        top: 'bottom',
        itemGap:20,
        textStyle: {
            color: '#fft'
        }
    },
    series: [{
            name: 'Line 1',
            type: 'pie',
            clockWise: false,
            radius: [106, 130],
            center:['50%','50%'],
            itemStyle: dataStyle,
            hoverAnimation: false,
            startAngle: 90,
            label:{
                borderRadius:'10',
            },
            data: [{
                    value: num[0],
                    name: '2016',
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color:color[0]
                            }, {
                                offset: 1,
                                color: color[1]
                            }])
                        }
                    }
                },
                {
                    value: nums,
                    name: '',
                    tooltip: {
                        show: false
                    },
                    itemStyle: {
                    	normal: {
					        color: 'rgba(12,143,211,.2)',
					        label: {
					            show: false
					        },
					        labelLine: {
					            show: false
					        }
					    },
					    emphasis: {
					        color: 'rgba(12,143,211,.2)'
					    }
                    }
                },
            ]
        },
        {
            name: 'Line 2',
            type: 'pie',
            clockWise: false,
            radius: [66, 90],
            center:['50%','50%'],
            itemStyle: dataStyle,
            hoverAnimation: false,
            startAngle: 90,
            data: [{
                    value: num[1],
                    name: '2017',
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: color[2]
                            }, {
                                offset: 1,
                                color: color[3]
                            }])
                        }
                    }
                },
                {
                    value: nums,
                    name: '',
                    tooltip: {
                        show: false
                    },
                    itemStyle: {
                    	normal: {
					        color: 'rgba(157,201,44,.2)',
					        label: {
					            show: false
					        },
					        labelLine: {
					            show: false
					        }
					    },
					    emphasis: {
					        color: 'rgba(157,201,44,.2)',
					    }
                    }
                },
            ]
        },
        {
            name: 'Line 3',
            type: 'pie',
            clockWise: false,
            radius: [26, 50],
            center:['50%','50%'],
            itemStyle: dataStyle,
            hoverAnimation: false,
            startAngle: 90,
            data: [{
                    value: num[2],
                    name: '2018',
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: color[4]
                            }, {
                                offset: 1,
                                color: color[5]
                            }]),
                        }
                    }
                },
                {
                    value: nums,
                    name: '',
                    tooltip: {
                        show: false
                    },
                    itemStyle: {
                    	normal: {
					        color: 'rgba(232,26,49,.2)',
					        label: {
					            show: false
					        },
					        labelLine: {
					            show: false
					        }
					    },
					    emphasis: {
					        color: 'rgba(232,26,49,.2)',
					    }
                    }
                },
            ]
        }
    ]
}



install.setOption(_install);