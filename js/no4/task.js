let box7 = echarts.init(document.getElementById('task'));
var myColor=['#eb3600','#d0a00e','#d0a00e','#34da62','#34da62','#00e9db','#00e9db','#00c0e9','#00c0e9','#0096f3','#0096f3'];

/*参数数值*/
let num = [96,50,75,70,30,50,40,90,30,60,70];
console.log(num.length);
let big_num = 0;
$.each(num,function(i,v){
	if(big_num < v){
		big_num = v;
	}
})

/*最大数值值*/
let max_num = new Array();
/*内阴影*/
let max_num_f = new Array();
/*零值*/
let zero = new Array();
/*城市*/
let city = ['运城市','晋城市','长治市','临汾市','晋中市','吕梁市','阳泉市','忻州市','朔州市','大同市','太原市'];
/*白条*/
var white = new Array();

$.each(num,function(i,v){
	max_num[i] = 100;
	max_num_f[i] = 99;
	zero[i] = 0; 
	white[i] = 19999;
})

let _box7 = {
//	backgroundColor : '#000',
    grid: {
        left: '11%',
        top:'6%',
        right: '0%',
        bottom: '8%',
        containLabel: true
    },
    tooltip : {
    	formatter : function(datas){
    		return city[datas.dataIndex]+ '<br />完成百分比：' + num[datas.dataIndex] + '%';
    	}
    },
    xAxis: [{
        show: false,
    }],
    yAxis: [{
            axisTick:'none',
            axisLine:'none',
            offset:'27',
            axisLabel: {
                    textStyle: {
                        color: '#404040',
                        fontSize:'16',
                    }
                },
            data: city ,
        }, {
            axisTick:'none',
            axisLine:'none',
            data: max_num_f
        },{
            nameGap:'50',
            nameTextStyle:{
                color:'#ffffff',
                fontSize:'16',
            },
            axisLine:{
              lineStyle:{
                color:'rgba(0,0,0,0)'
              }
            },
            data: [],
    }],
    series: [
    {
        name: '条',
        type: 'bar',
        stack:'圆',
        yAxisIndex: 0,
        data: num,
        barWidth: 4,
        itemStyle: {
            normal: {
                color: function(params) {
                        var num=myColor.length;
                        return myColor[params.dataIndex%num]
                },
            }
        },
        z: 999
    },
    {
        name: '内圆',
        type: 'scatter',
        stack:'圆',
        yAxisIndex: 0,
        data: zero,
        symbolSize: 8,
        itemStyle: {
            normal: {
                color: function(params) {
                        var num=myColor.length;
                        return myColor[params.dataIndex%num]
                },
                opacity: 1,
            }
        },
        z: 2
    }, 
    {
        name: '白框',
        type: 'bar',
        yAxisIndex: 1,
        
        barGap: '6000%',
        data: max_num_f,
        barWidth: 12,
        itemStyle: {
            normal: {
                color: '#fff',
                barBorderRadius: 5
            }
        },
        z: 1
    },
    {
        name: '外框',
        type: 'bar',
        yAxisIndex: 2,
        barGap: '-100%',
        data: max_num,
        barWidth: 20,
        itemStyle: {
            normal: {
                color: function(params) {
                        var num=myColor.length;
                        return myColor[params.dataIndex%num]
                },
//              color : '#00c0e9',
                barBorderRadius: 5,
            }
        },
        z: 0
    }
    ]
}


box7.setOption(_box7);