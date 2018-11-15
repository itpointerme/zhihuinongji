
var myChart2 = echarts.init(document.getElementById('box2'));

myChart2.setOption({
    tooltip: {
        trigger: 'axis',
    },
    xAxis: {
        type: 'category',
        data: ['太原市', '大同市', '朔州市', '忻州市', '阳泉市', '吕梁市', '晋中市', '长治市', '晋城市', '临汾市', '运城市'],
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: [820, 932, 901, 934, 1290, 1330, 1320, 700, 850, 900, 1100],
        type: 'line',
        areaStyle: {
            normal: {
                    color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                        offset: 0,
                        color: '#92DDFC',
                    }, {
                        offset: 1,
                        color: '#FFF',
                    }])
                }
            },
        lineStyle:{
            color: '#5FD0FF',
        }
    }]

});