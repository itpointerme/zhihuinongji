var myChart = echarts.init(document.getElementById('zymjzxtjt'));
option = {
/*    title : {
       text: '抽检异议情况分析',
        subtext: '单位异议趋势分析'
    },*/
    tooltip : {
        trigger: 'axis'
    },
     grid: {
        left: '4%',
        top:'1%',
        containLabel: true
    },
   legend: {
       // data:['异议提出数','异议通过数']
    },
    calculable : true,
    xAxis : [
        {
            type : 'category',
            boundaryGap : false,
            data : ['太原市','大同市','朔州市','忻州市','阳泉市','吕梁市','晋中市','长治市','晋城市','临汾市','运城市']
        }
    ],
    yAxis : {
            type : 'value',
            min:0,
            max:100
        }
    ,
    series : [
        {
           // name:'异议提出数',
            type:'line',
            areaStyle: {
                normal: {type: 'default',
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(185, 223, 253,0.2)'
                    }, {
                        offset: 1,
                        color: 'rgba(20, 155, 245,0.5)'
                    }], false)
                }
            },
            lineStyle:{
                 color: 'rgba(20, 155, 245,0.5)'
            },
            smooth:true,
            itemStyle: {
                normal: {
                    areaStyle: {
                        type: 'default'
                        
                    }}    
            },
            data:[34,50,26,44,43,56,79,42,56,71,45,32]
        },
         {
           // name:'异议通过数',
            type:'line',
            areaStyle: {
                normal: {type: 'default',
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(185, 223, 253,0.2'
                    }, {
                        offset: 1,
                        color: 'rgba(20, 155, 245,1)'
                    }], false)
                }
            },
             lineStyle:{
                 color:'rgba(20, 155, 245,1)'
            },
            smooth:true,
            itemStyle: {normal: {areaStyle: {type: 'default'}}},
            data:[27,54,58,36,15,38,37,25,69,31,51,26]
        }
    ]
};
myChart.setOption(option);