let months = echarts.init(document.getElementById('months'));

/*月份*/
var category = ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'];

/*数量*/
var barData = [8405,7380,8320,9001,9350,4620,4980,6201,7896,7621,7498,5001];

let _months = {
//	backgroundColor: '#0f375f',
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        },
        formatter : function (datas){
        	return datas[0].axisValue + '：'+datas[0].value+'台';
        }
    },
    legend : {
    	top : 0 , 
    	left : 0 ,
    	width : '100%' ,
    	height : '100%' ,
    	show : true  ,
    } ,
    grid : {
    	top : '10%' ,
    	left : '10%' ,
    	width :  '90%' , 
    	height : '80% '
    },
    xAxis: {
        data: category,
        axisLine: {
            lineStyle: {
                color: '#ccc'
            }
        } ,
        axisTick : {show : false }
    },
    yAxis: {
        splitLine: {show: false},
        axisLine: {
            lineStyle: {
                color: '#ccc'
            }
        },
        axisTick : {show : false}
    },
    series: [
    {
        type: 'line',
        smooth: true,
        showAllSymbol: true,
        symbol: 'emptyCircle',
        symbolSize: 10,
        data: barData ,
        lineStyle : {
        	color : '#1dfcff',
        },
        smooth : false

    }, 
    {
        type: 'bar',
        barWidth: 10,
        itemStyle: {
            normal: {
                barBorderRadius: 5,
                color: new echarts.graphic.LinearGradient(
                    0, 0, 0, 1,
                    [
                        {offset: 0, color: 'rgba(31,253,255,.6)'},
                        {offset: 1, color: '#1ffdff'}
                    ]
                )
            }
        },
        data: barData
    }, {
        type: 'pictorialBar',
        symbol: 'rect',
        itemStyle: {
            normal: {
                color: '#0f375f'
            }
        },
        symbolRepeat: true,
        symbolSize: [12, 4],
        symbolMargin: 1,
        z: -10,
        data: barData
    }]
}


months.setOption(_months);
