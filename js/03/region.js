let region = echarts.init(document.getElementById('region'));

/*城市名称*/
let city = ['吕梁市','阳泉市','忻州市','朔州市','大同市','太原市'];
/*完成值*/
let achieve = [360,570,350,190,430,240,];
/*任务值*/
let task = [540,700,530,330,600,300];
/*蓝条的值*/
let blue = new Array();
$.each(achieve,function(i,v){
	blue[i] = task[i] - achieve[i];
})



_region = {
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
//  backgroundColor: 'rgba(0,0,0,)',
    color: ['#ffbe00', '#22beff'],
    title : {
    	text : '完成值/万亩' ,
    	textStyle : {
    		color : '#fff',
    		fontSize : 20 ,
    		fontWeight : '100'
    	},
    	top : '1%' ,
    	left : '12%'
    },
//  legend: {
//      data: ['蓝','黄'],
//      bottom: '2%',
//      right: '5%',
//      icon: 'circle',
//      itemWidth: 20,
//      itemHeight: 20,
//      textStyle: {
//          color: '#c6e5ff',
//          fontSize: 14
//      }
//  },
    grid: {
        left: '3%',
        right: '5%',
        bottom: '1%',
        top: '16%',
        containLabel: true
    },
    xAxis:  [{
        type: 'value',
        show: false
    },{
        type: 'value',
        show: false
    }],
    yAxis: [{
        type: 'category',
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            color: '#1ef7ff',
            fontSize: 20,
            fontWeight: 400,
            interval: 0
        },
        offset: 4,
        data: city,
    },
    {
        type: 'category',
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            color: '#fff',
            fontSize: 36,
            fontWeight: 300,
            interval: 0
        }
    }],
    series: [
        {
            name: '完成值',
            type: 'bar',
            barWidth: 25,
            stack: '总量',
            itemStyle: {
                normal: {
//                  barBorderRadius: [30, 0, 0,30]
                },
            },
            barWidth : 16 , 
            data: achieve
        },
        {
            name: '剩余任务值',
            type: 'bar',
            barWidth: 25,
            stack: '总量',
            itemStyle: {
                normal: {
//                  barBorderRadius: [0, 30, 30,0]
                },
            },
            data: blue
        }
    ]
};

region.setOption(_region);

