
var myChart3 = echarts.init(document.getElementById('box3'));

myChart3.setOption({
	tooltip: {
        trigger: 'axis',
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: [820, 932, 901, 934, 1290, 1330, 1320, 700, 850, 900, 1100, 500],
        type: 'line',
        smooth: true,
        lineStyle:{
        	color: '#64CAFA',
        },
        
    }]

});