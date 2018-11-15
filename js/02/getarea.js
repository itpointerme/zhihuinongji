	 var myChart = echarts.init(document.getElementById('getPie'));
     var myRate1 = 1000;
		var option = {
		    tooltip: {
		        show: true,
		    },
		    series: [{
		        type: 'gauge',
		        center: ['50%', '55%'], // 默认全局居中  
		        radius: '50%',
		        splitNumber: 10, //刻度数量
		        min: 0,
		        max: 1000,
		        startAngle: 200,
		        endAngle: -20,
		        clockwise: true,
		        axisLine: {
		            show: true,
		            lineStyle: {
		                width: 0.2,
		                shadowBlur: 0,
		                color: [
		                    [1, '#03B7C9']
		                ]
		            }
		        },
		        axisTick: {
		            show: true,
		            lineStyle: {
		                color: '#03B7C9',
		                width: 1
		            },
		            length: -5,
		            splitNumber: 10
		        },
		        splitLine: {
		            show: true,
		            length: -10,
		            lineStyle: {
		                color: '#03B7C9',
		            }
		        },
		        axisLabel: {
		            distance: -20,
		            textStyle: {
		                color: "#03B7C9",
		                fontSize: "8",
		                fontWeight: "bold"
		            }
		        },
		        pointer: { //仪表盘指针
		            show: 0
		        },
		        detail: {
		            show: false
		        },
		        data: [{
		            name: "",
		            value: myRate1
		        }]
		    }, {
		        startAngle: 200,
		        endAngle: -20,
		        type: 'gauge',
		        center: ['50%', '55%'], // 默认全局居中  
		        radius: '45%',
		        min: 0,
		        max: 1000,
		        splitNumber: 0,
		        axisLine: { // 坐标轴线  
		            lineStyle: {
		                color: [
		                    [0.66, '#dddddd'],
		                    [1, '#dddddd']
		                ], // 属性lineStyle控制线条样式  
		                width: 1
		            }
		        },

		        axisLabel: { // 坐标轴小标记  
		            textStyle: { // 属性lineStyle控制线条样式  
		                fontWeight: 'bolder',
		                fontSize: 16,
		                color: 'rgba(30,144,255,0)',
		            }
		        },
		        splitLine: { // 分隔线  
		            length: 10, // 属性length控制线长  
		            lineStyle: { // 属性lineStyle（详见lineStyle）控制线条样式  
		                width: 0,
		                color: '#444'
		            }
		        },
		        pointer: { // 分隔线 指针  
		            color: '#666666',
		            width: 0,
		            length: 230
		        },
		        detail: {
		            show: false
		        },

		    }, {
		        name: '累计受理',
		        type: 'gauge',
		        startAngle: 200,
		        endAngle: -20,
		        radius: '40%',
		        center: ['50%', '55%'], // 默认全局居中  

		        min: 0,
		        max: 1000,

		        axisLine: {
		            show: false,
		            lineStyle: {
		                width: 3,
		                shadowBlur: 0,
		                color: [
		                    [1, 'yellow']
		                ]
		            }
		        },
		        axisTick: {
		            show: false,

		        },
		        splitLine: {
		            show: false,
		            length: 20,

		        },

		        axisLabel: {
		            show: false
		        },
		        pointer: {
		            show: true,
		             width:1.5,//指针的宽度
		            length:"70%", //指针长度，按照半圆半径的百分比
		            shadowColor : '#ccc', //默认透明
		            shadowBlur: 3
		        },
		        detail: {
		            show: true,
		            offsetCenter: [0, '40%'],
		            textStyle: {
		                fontSize: 12,
		                color:'#03B7C9'
		            }
		        },
		        itemStyle: {
		            normal: {
		                color: "#03B7C9",
		            }
		        },
		        data: [{
		            value: 463,
		        }]
		    }, 












		    {
		        type: 'gauge',
		        center: ['30%', '55%'], // 默认全局居中  
		        radius: '35%',
		        splitNumber: 10, //刻度数量
		        min: 0,
		        max: 1000,
		        endAngle: 45,
		        clockwise: true,
		        axisLine: {
		            show: true,
		            lineStyle: {
		                width: 0.2,
		                shadowBlur: 0,
		                color: [
		                    [1, '#03B7C9']
		                ]
		            }
		        },
		        axisTick: {
		            show: true,
		            lineStyle: {
		                color: '#03B7C9',
		                width: 1
		            },
		            length: -5,
		            splitNumber: 10
		        },
		        splitLine: {
		            show: true,
		            length: -10,
		            lineStyle: {
		                color: '#03B7C9',
		            }
		        },
		        axisLabel: {
		            distance: -20,
		            textStyle: {
		                color: "#03B7C9",
		                fontSize: "8",
		                fontWeight: "bold"
		            }
		        },
		        pointer: { //仪表盘指针
		            show: 0
		        },
		        detail: {
		            show: false
		        },
		        data: [{
		            name: "",
		            value: myRate1
		        }]
		    }, {

		        type: 'gauge',
		        center: ['30%', '55%'], // 默认全局居中  
		        radius: '30%',
		        min: 0,
		        max: 1000,
		        endAngle: 45,
		        splitNumber: 0,
		        axisLine: { // 坐标轴线  
		            lineStyle: {
		                color: [
		                    [0.66, '#dddddd'],
		                    [1, '#dddddd']
		                ], // 属性lineStyle控制线条样式  
		                width: 1
		            }
		        },


		        axisLabel: { // 坐标轴小标记  
		            textStyle: { // 属性lineStyle控制线条样式  
		                fontWeight: 'bolder',
		                fontSize: 16,
		                color: 'rgba(30,144,255,0)',
		            }
		        },
		        splitLine: { // 分隔线  
		            length: 10, // 属性length控制线长  
		            lineStyle: { // 属性lineStyle（详见lineStyle）控制线条样式  
		                width: 0,
		                color: '#444'
		            }
		        },
		        pointer: { // 分隔线 指针  
		            color: '#666666',
		            width: 0,
		            length: 230
		        },
		        detail: {
		            show: false
		        },

		    }, {
		        name: '累计办结',
		        type: 'gauge',
		        endAngle: 45,
		        radius: '25%',
		        center: ['30%', '55%'], // 默认全局居中  

		        min: 0,
		        max: 1000,

		        axisLine: {
		            show: false,
		            lineStyle: {
		                width: 3,
		                shadowBlur: 0,
		                color: [
		                    [1, '#E531A8']
		                ]
		            }
		        },
		        axisTick: {
		            show: false,

		        },
		        splitLine: {
		            show: false,
		            length: 20,

		        },

		        axisLabel: {
		            show: false
		        },
		        pointer: {
		            show: true,
		             width:1.5,//指针的宽度
		            length:"70%", //指针长度，按照半圆半径的百分比
		            shadowColor : '#ccc', //默认透明
		            shadowBlur: 3
		        },
		        detail: {
		            show: true,
		            offsetCenter: [0, '40%'],
		            textStyle: {
		                fontSize: 12,
		                color:'#03B7C9'
		            }
		        },
		        itemStyle: {
		            normal: {
		                color: "#03B7C9",

		            }
		        },
		        data: [{
		            value: 245
		        }]
		    }, 









		    {
		        type: 'gauge',
		        center: ['68%', '55%'], // 默认全局居中  
		        radius: '35%',
		        splitNumber: 10, //刻度数量
		        min: 0,
		        max: 1000,
		        startAngle: 140,
		        endAngle: -45,
		        clockwise: true,
		        axisLine: {
		            show: true,
		            lineStyle: {
		                width: 0.2,
		                shadowBlur: 0,
		                color: [
		                    [1, '#03B7C9']
		                ]
		            }
		        },
		        axisTick: {
		            show: true,
		            lineStyle: {
		                color: '#03B7C9',
		                width: 1
		            },
		            length: -5,
		            splitNumber: 10
		        },
		        splitLine: {
		            show: true,
		            length: -10,
		            lineStyle: {
		                color: '#03B7C9',
		            }
		        },
		        axisLabel: {
		            distance: -20,
		            textStyle: {
		                color: "#03B7C9",
		                fontSize: "8",
		                fontWeight: "bold"
		            }
		        },
		        pointer: { //仪表盘指针
		            show: 0
		        },
		        detail: {
		            show: false
		        },
		        data: [{
		            name: "",
		            value: myRate1
		        }]
		    }, {
		        type: 'gauge',
		        center: ['68%', '55%'], // 默认全局居中  
		        radius: '30%',
		        min: 0,
		        max: 1000,
		        startAngle: 140,
		        endAngle: -45,
		        splitNumber: 0,
		        axisLine: { // 坐标轴线  
		            lineStyle: {
		                color: [
		                    [0.66, '#dddddd'],
		                    [1, '#dddddd']
		                ], // 属性lineStyle控制线条样式  
		                width: 1
		            }
		        },


		        axisLabel: { // 坐标轴小标记  
		            textStyle: { // 属性lineStyle控制线条样式  
		                fontWeight: 'bolder',
		                fontSize: 16,
		                color: 'rgba(30,144,255,0)',
		            }
		        },
		        splitLine: { // 分隔线  
		            length: 10, // 属性length控制线长  
		            lineStyle: { // 属性lineStyle（详见lineStyle）控制线条样式  
		                width: 0,
		                color: '#444'
		            }
		        },
		        pointer: { // 分隔线 指针  
		            color: '#666666',
		            width: 0,
		            length: 230
		        },
		        detail: {
		            show: false
		        },

		    }, {
		        name: '未处理',
		        type: 'gauge',
		        startAngle: 140,
		        endAngle: -45,
		        radius: '25%',
		        center: ['68%', '55%'], // 默认全局居中  

		        min: 0,
		        max: 1000,

		        axisLine: {
		            show: false,
		            lineStyle: {
		                width: 3,
		                shadowBlur: 0,
		                color: [
		                    [1, '#E531A8']
		                ]
		            }
		        },
		        axisTick: {
		            show: false,

		        },
		        splitLine: {
		            show: false,
		            length: 20,

		        },

		        axisLabel: {
		            show: false
		        },
		        pointer: {
		              show: true,
		             width:1.5,//指针的宽度
		            length:"70%", //指针长度，按照半圆半径的百分比
		            shadowColor : '#ccc', //默认透明
		            shadowBlur: 3
		        },
		        detail: {
		            show: true,
		            offsetCenter: [0, '40%'],
		            textStyle: {
		                fontSize: 12,
		                color:'#03B7C9'
		            }
		        },
		        itemStyle: {
		            normal: {
		                color: "#03B7C9",

		            }
		        },
		        data: [{
		            value: 135
		        }]
		    }]
		};
 
        myChart.setOption(option);