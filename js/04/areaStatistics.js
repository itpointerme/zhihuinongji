 var myChart5 = echarts.init( document.getElementById('areaStatistics'));
 var xData = function() {
    var data = ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'];
    
    return data;
}();
myChart5.setOption({
     // backgroundColor:'#020306',
    // title : {
    //     text: '受理案件变化趋势',
        
    // },
    tooltip : {
        trigger: 'axis'
    },
    legend: {
    	top : '1%' , 
    	left : '10%' ,
    	show : true  ,
        textStyle:{
            color:'#FFFFFF'
        },
        data:['所有终端故障率','该品牌终端故障率']
    },

    grid: {
       	top : '10%' ,
    	left : '4%' ,
    	width :  '90%' , 
    	height : '70% ' ,
        containLabel: true
    },
    color:['#0c8fd3','#a7cf4b'],
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
	                color: '#1cf6ff'
	            }
	        },
            data : xData
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
            name:'所有终端故障率',
            type:'line',
            areaStyle: {
                
                normal: {type: 'default',
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#0c8fd3'
                    }, {
                        offset: 1,
                        color: '#0c8fd3'
                    }], false)
                }
            },
            smooth:true,
            itemStyle: {
                normal: {areaStyle: {type: 'default'}}    
            },
            data:[45,60,68,67,56,69,89,57,56,73,95,97]
        },
        {
            name:'该品牌终端故障率',
            type:'line',
            areaStyle: {
                normal: {type: 'default',
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#a7cf4b'
                    }, {
                        offset: 1,
                        color:'#a7cf4b'
                    }], false)
                }
            },
            smooth:true,
            itemStyle: {normal: {areaStyle: {type: 'default'}}},
            data:[30,40,48,61,36,52,69,35,40,59,47,58]
        },
    ]
});