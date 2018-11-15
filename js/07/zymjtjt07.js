 var myChart5 = echarts.init( document.getElementById('zymjtjt07'));
var data = ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'];

myChart5.setOption({

    tooltip : {
        trigger: 'axis'
    },
    legend: {
        // left: '25%',
        // top:'15%',
        textStyle:{
            color:'#FFFFFF'
        },
        data:['有效面积','达标面积']
    },
     grid: {
        top:'20%',
        left: '12%',
        containLabel: true,
        width : '80%',
        height : '80%',
    },
    color:['rgba(19, 173, 255, 1)','rgba(245, 166, 35, 1)'],
    calculable : true,
    xAxis : [
        {
            type : 'category',
            boundaryGap : false,
	         axisLabel: {
	            formatter: '{value}',
	            //  rotate:25,
	            textStyle: {
	                fontSize: 12,
	                color: '#fff'
	            }
	        },
            data : data
        }
    ],
    yAxis : {
            
            type : 'value',
            axisLine: {
                lineStyle: {
                    color: '#ffffff'
                }
            },
        }
    ,
    series : [
        {
            name:'有效面积',
            type:'line',
            areaStyle: {
                
                normal: {type: 'default',
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(19, 173, 255, 1)'
                    }, {
                        offset: 1,
                        color: 'rgba(19, 173, 255, 1)'
                    }], false)
                }
            },
            smooth:true,
            itemStyle: {
                normal: {areaStyle: {type: 'default'}}    
            },
            data:[1324,1498,1468,1424,1224,1524,1924,2124,2024,1924,1824,1624],
        },
        {
            name:'达标面积',
            type:'line',
            areaStyle: {
                normal: {type: 'default',
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(245, 166, 35, 1)'
                    }, {
                        offset: 1,
                        color:'rgba(245, 166, 35, 1)'
                    }], false)
                }
            },
            smooth:true,
            itemStyle: {normal: {areaStyle: {type: 'default'}}},
            data:[1110,1270,1290,1210,950,1210,1610,1810,1710,1610,1510,1210]
        },
    ]
});