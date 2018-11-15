var myChart = echarts.init(document.getElementById('dbtjt'));

var manNum = 500;
var womanNum = 5000;

var rotateAngle = (manNum) / 2 / (manNum + womanNum) * 360 + 150;
option = {
    series: [
    {
        type: 'pie',
        radius : '55%',
        center: ['52%', '50%'],
        radius: ['50%', '70%'],
        startAngle:rotateAngle,
        label: {
            normal: {
                position: 'center'
            }
        },
        data: [{
            value: 1548,
            //name: '用户来源分析',
             itemStyle:{
                        type: 'default',
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(77, 158, 254,1)'
                        }, {
                            offset: 1,
                            color: 'rgba(185, 223, 253,1)'
                        }
                        ], false)
                    },
                    
            label: {
                normal: {
                    formatter: '{d} %',
                    textStyle: {
                        color: '#abcdef',
                        fontSize: 20

                    }
                }
            }
        }, {
            value: 180,
            //name: '占位',
            itemStyle:{
                            type: 'default',
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: 'rgba(81, 254, 298,1)'
                            }, {
                                offset: 1,
                                color: 'rgba(81, 254, 299,0.8)'
                            }], false)
                         },
            label: {
                normal: {
                    textStyle: {
                        color: 'black',
                    },
                    formatter: '\n不达标率'
                }
            }
        }],
        itemStyle:{
            normal:{
                    borderWidth: 10,
                    borderColor: 'white',
                }
        }
    },
   ]
}
myChart.setOption(option);
