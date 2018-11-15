var myChart = echarts.init(document.getElementById('glzynj'));
option = {
    // backgroundColor:'#FAFBFE',
   
    tooltip: {
        trigger: 'axis',
        backgroundColor:'#Fff',
        textStyle:{
            color:'#3B53A2',
            fontSize:12,
        },
        extraCssText: 'box-shadow: 0 0 5px rgba(205,217,240);',
        borderColor:'#DAE1F4',
        borderWidth:1,
        formatter: "{b} <br/>{a0} : {c0}<br/>{a1} : {c1}<br/>{a2} : {c2}"
    },
    legend: {
        data:['2016','2015','2014'],
        textStyle:{
            color:'#3B53A2'
        },
        inactiveColor:'#CDD9F0',
        top:20,
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    // toolbox: {
    //     feature: {
    //         saveAsImage: {}
    //     }
    // },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['大中型农机配套机','大中型农机配套机','大中型农机配套机','大中型农机配套机'],
    
        axisLabel: {
              color: '#3B53A2',
              fontSize: '11',
              interval: 0,
          },
          axisLine: {
            lineStyle: {
              color: '#3B53A2'
            }
          },
          splitLine: {
            show: false,
            lineStyle: {
              color: '#3B53A2'
            }
          }
    },
    yAxis: {
        type: 'value',
       
        axisLabel: {
              color: '#3B53A2',
              fontSize: '11',
              interval: 0,
              formatter: '{value}'
          },
          axisLine: {
            lineStyle: {
              color: '#3B53A2'
            }
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: '#CDD9F0'
            }
          }
    },
    series: [
        {
            name:'2016',
            type:'line',
             lineStyle:{
                color:'#EFFDFFC' //连线颜色
            },
            itemStyle:
            {
                color:'#EFFDFFC' //连线颜色
            },
            smooth: true,
            data:[450, 800, 900,1100]
        },
        {
            name:'2015',
            type:'line',
            lineStyle:{
                color:'#F3994A' //连线颜色
            },
            itemStyle:
            {
                color:'#F3994A' //连线颜色
            },
            smooth: true,
            data:[350, 700, 800,1000]
        },
        {
            name:'2014',
            type:'line',
            lineStyle:{
                color:'#9BDEFF' //连线颜色
            },
            itemStyle:
            {
                color:'#9BDEFF' //连线颜色
            },
            smooth: true,
            data:[150, 400, 700,200]
        },
      
    ]
};
myChart.setOption(option);