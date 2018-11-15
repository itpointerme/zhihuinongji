var myChart = echarts.init(document.getElementById('yxmjtjt'));
var manNum = 500;
var womanNum = 5000;

var rotateAngle = (manNum) / 2 / (manNum + womanNum) * 360 + 10;
option = {
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    series : [
        {
            name: '访问来源',
            type: 'pie',
            radius : '68%',
            center: ['50%', '50%'],
            startAngle:rotateAngle,
            data:[
                {
                    value:150, 
                    name:'漏耕面积：96 (3.28%)',
                    itemStyle:{
                            type: 'default',
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: 'rgba(81, 254, 298,0.2)'
                            }, {
                                offset: 1,
                                color: 'rgba(255, 210, 0,0.5)'
                            }], false)
                         },
                         label: {
                        normal: {
                            textStyle: {
                                color: '#000',
                                fontSize: 14,
                            },
                        position:'inside',
                        },
                        
                    },
                },
                {
                    value:1508, 
                    name:'有效面积：13645.36 (96.84%)',
                    itemStyle:{
                        type: 'default',
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(77, 158, 254,1)'
                        }, {
                            offset: 1,
                            color: 'rgba(185, 223, 253,1)'
                        },{
                            offset: 0,
                            color: 'rgba(77, 158, 254,1)'
                        }
                        ], false)
                    },
                    label: {
                        normal: {
                            textStyle: {
                                color: '#000',
                                fontSize: 14,
                            },
                        position:'inside',
                        },
                        
                    },
                },
                {
                    value:300, 
                    name:'重叠面积：136 (6.32%)',
                    itemStyle:{
                        type: 'default',
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(81, 254, 298,0.2)'
                        }, {
                            offset: 1,
                            color: 'rgba(20, 155, 245,0.5)'
                        }
                        ], false)
                    },
                    label: {
                        normal: {
                            textStyle: {
                                color: '#000',
                                fontSize: 14,
                            },
                        position:'inside',
                        },
                        
                    },
                }
            ],
            
        }
    ]
};
myChart.setOption(option);
