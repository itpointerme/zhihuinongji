var v1dom = document.getElementById("zdfx");
var v1 = echarts.init(v1dom);
v1.resize();
dataBJ = [
    [134, 96, 165, 41, 55],
];
indicatorData = [{
    name: '数据回传及时',
    max: 300
}, {
    name: '市场保有量',
    max: 300
}, {
    name: '数据回传准确率',
    max: 300
}, {
    name: '故障修复及时',
    max: 35
}];


dataBJ = [
    [154, 96, 165, 41, 55],
];
indicatorData = [{
    name: '数据回传及时',
    max: 300
}, {
    name: '市场保有量',
    max: 300
}, {
    name: '数据回传准确率',
    max: 300
}, {
    name: '故障修复及时',
    max: 35
}];


dataBJ = [
    [154, 96, 165, 41, 55],
];
indicatorData = [{
    name: '数据回传及时',
    max: 300
}, {
    name: '市场保有量',
    max: 300
}, {
    name: '数据回传准确率',
    max: 300
}, {
    name: '故障修复及时',
    max: 35
}];


dataBJ = [
    [154, 96, 165, 41, 55],
];
indicatorData = [{
    name: '数据回传及时',
    max: 300
}, {
    name: '市场保有量',
    max: 300
}, {
    name: '数据回传准确率',
    max: 300
}, {
    name: '故障修复及时',
    max: 35
}];


dataBJ = [
    [154, 96, 165, 41, 55],
];
indicatorData = [{
    name: '数据回传及时',
    max: 300
}, {
    name: '市场保有量',
    max: 300
}, {
    name: '数据回传准确率',
    max: 300
}, {
    name: '故障修复及时',
    max: 35
}];

option = {
   // backgroundColor: '#fff',
    title: [{
           // text: '',
            x: '30',
            y: '50',
            textStyle: {
                color: "rgb(51,51,51)",
                fontSize: 2
            },
        },
        
    ],
    tooltip: {},
    radar: {
        center: ['40%', '50%'],
        indicator: indicatorData,
        radius: '70%',
        splitNumber: 6,
        shape: 'circle',
        name: {
            textStyle: {
                color: '#19A3B0',
                fontSize: 13,
            },
            //padding: [0,0, 0, 0]
        },
        splitLine: {
            lineStyle: {
                color: 'rgb(90,177,239)',
                type: 'dotted',
                width: 1
            }
        },
        splitArea : {
                show : true,
                areaStyle : {
                    color: []
                }
        },
       /* axisLine: {
            show: true,
            lineStyle: {
                color: 'rgb(90,177,239)',
                type: 'dotted'
            }
        },*/
        zlevel: 23
    },
    series: [

        {
            type: 'pie',
            radius: ['58%', '47%'],
			center: ['40%', '50%'],
            label: {
                normal: {
                    position: 'center'
                }
            },
            data: [{
                value: 1000,
                tooltip: {
                    show: false
                },
                itemStyle: {
                    normal: {
                        color: 'rgba(30,177,239)'
                    }
                }
            }]
        },
        
        {
            type: 'pie',
            radius: ['35%', '23.5%'],
			center: ['40%', '50%'],
            label: {
                normal: {
                    position: 'center'
                }
            },
            data: [{
                value: 1000,
                tooltip: {
                    show: false
                },
                itemStyle: {
                    normal: {
                        color: 'rgba(30,177,239)'
                    }
                }
            }]
        },

        

        {
            name: '数据显示',
            type: 'radar',
            lineStyle: {
                normal: {
                    width: 0.1,
                    opacity: 0.1
                }
            },
            data: dataBJ,
            symbolSize: 0,
            itemStyle: {
                normal: {
                    borderColor: 'rgb(90,177,239)',
                    borderWidth: 4,
                }
            },
            areaStyle: {
                normal: {
                    color: 'rgba(240,231,2,0.9)',
                    opacity: 1
                }
            },
            label: {
                normal: {
                    show: true,
                    position: 'top'
                }
            },
            zlevel: 21
        },

    ]
};
v1.setOption(option);