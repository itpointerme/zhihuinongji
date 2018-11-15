var myChart = echarts.init(document.getElementById('bdgmzj_btbpbzt'));
option = {
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    series : [
        {
            name: '访问来源',
            type: 'pie',
            radius : '55%',
            center: ['50%', '60%'],
            data:[
                {
                    value:335, 
                    name:'补贴',
                    itemStyle:{
                            type: 'default',
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: 'rgba(81, 254, 298,0.2)'
                            }, {
                                offset: 1,
                                color: 'rgba(20, 155, 245,0.5)'
                            }], false)
                         }
                },
                {
                    value:1548, 
                    name:'总价',
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
                }
            ],
            
        }
    ]
};
myChart.setOption(option);
