var myChart = echarts.init(document.getElementById('shmjt'));
option = {
    //backgroundColor: "#062a44",
    grid: {
     left: '3%',
     right: '40%',
             top:'300%',
            bottom: '20%',
            containLabel: true
        },
    series: [
        {
            name: '刻度',
            type: 'gauge',
            radius: '93%',
            center:['50%', '82%'],
            splitNumber: 8, //刻度数量
            min: 0,
            max: 100,
            startAngle: 180,
            endAngle: 0,
            axisLine: {
                show: true,
                lineStyle: {
                    width: 0,
                    shadowBlur: 0,
                    color: [
                        [1, '#ffffff']
                    ]
                }
            },
            axisLabel: {show: true},
            axisTick: {
                show: true,
                lineStyle: {
                    color: '#ffffff',
                    width: 1
                },
                length: 10,
            },
            splitLine: {
                show: true,
                length: 5,
                lineStyle: {
                    color: '#ffffff',
                }
            },
            detail: {show: false},
            pointer: {show: false}
        },
        {
            name: '施工背景',
            type: 'gauge',
            radius: '95%',
            startAngle: 180,
            center:['50%', '80%'],
            endAngle: 0,
            splitNumber: 0, //刻度数量
            axisLine: {
                lineStyle: {
                    shadowColor: 'rgba(93,183,255,0.50)',
                    shadowBlur: 8,
                    color: [
                        [1, '#00FCF6']
                    ],
                    width:5,
                }
            },
            axisLabel: {show: false},
            splitLine: {
                show: false,
            },
            //axisTick: {show: false},
            detail: {show: false},
            pointer: {show: false},
        },
        {
            name: '施工',
            type: 'gauge',
            radius: '95%',
            center:['50%', '80%'],
            splitNumber: 0, //刻度数量
            startAngle: 180,
            endAngle: (180-(180/100*50)),
            axisLine: {
                lineStyle: {
                    width:5,
                    shadowBlur: 0,
                    color: [
                       [1, '#0083FF']
                    ]
                }
            },
            axisLabel: {show: false},
            splitLine: {
                show: false,
            },
           // axisTick: {show: false},
            detail: {show: false},
            pointer: {show: false}
        },
        {
            name: '土建背景',
            type: 'gauge',
            radius: '120%',
            startAngle: 180,
            endAngle: 0,
            center:['50%', '80%'],
            splitNumber: 0, //刻度数量
            axisLine: {
                lineStyle: {
                    shadowColor: 'rgba(93,183,255,0.50)',
                    shadowBlur: 10,
                    color: [
                        [1, '#00FCF6']
                    ],
                    width:5,
                }
            },
            splitLine: {
                show: false,
            },
            axisLabel: {show: false},
            axisTick: {show: false},
            detail: {show: false},
            pointer: {show: false},
        },
        {
            name: '土建',
            title : {
                color: "#c3e6fa",
                //fontWeight: 'bolder',
                fontSize: 15,
                padding:[150,100,100,100]
            },
            center:['50%', '80%'],
            type: 'gauge',
            radius: '120%',
            splitNumber: 0, //刻度数量
            startAngle: 180,
            endAngle: (180-(180/100*70)),
            axisLine: {
                lineStyle: {
                    shadowColor: 'rgba(0, 0, 0, 0.1)',
                    shadowBlur: 10,
                    width:5,
                    color: [
                       [1, '#0083FF']
                    ]
                }
            },
            splitLine: {
                show: false,
            },
            axisLabel: {show: false},
            axisTick: {show: false},
            detail: {show: false},
            pointer: {show: false},
            data:[
                {name:"2016"}
            ]
        }
    ]
};


        myChart.setOption(option);