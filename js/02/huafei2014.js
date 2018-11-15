		var dataStyle = { 
		    normal: {
		        label: {show:false},
		        labelLine: {show:false},
		        shadowBlur: 40,
		        shadowColor: 'rgba(40, 40, 40, 0.5)',
		    }
		};
		var placeHolderStyle = {
		    normal : {
		        color: 'rgba(0,0,0,0)',
		        label: {show:false},
		        labelLine: {show:false}
		    },
		    emphasis : {
		        color: 'rgba(0,0,0,0)'
		    }
		};
		var myChart = echarts.init(document.getElementById('shifei_one'));
		var option = {
	    //backgroundColor: '#fff', //图表的配置颜色
	    color: ['blue', 'green','#B0C4DE','#eeeeee'], //每一项对应的颜色
	    tooltip : {  //提示框组件
	        show: true,
	        formatter: "{a} <br/>{b} : {c} ({d}%)"  //正则设置格式
	    },
	    legend: {  //图例组件
	        orient:'vertical', //图例的布局朝向
	        x:70,  //图例的位置--离左边的距离
	        y:50,  //图例的位置--离上边的距离
	        itemGap:10, //图例每项之间的间隔。横向布局时为水平间隔，纵向布局时为纵向间隔。
	        data:['桔柑还田','深施化肥'],
	        itemWidth:5,
	        itemHeight:5,
	        textStyle: {
	            fontSize: 10,
	            color: '#F1F1F3'
	        }
	    },
	    series : [  //系列列表
	        {
	            name:'橘柑还田',  //名字--用于tooltip的显示
	            type:'pie',    //类型--饼状图
	            clockWise:false,   //饼图的扇区是否是顺时针排布。
	            radius : [45,58], //饼图的半径，数组的第一项是内半径，第二项是外半径。 内半径是0就是一个真正的饼
	            center:['40%', '50%'], //饼图片的中心
	            itemStyle : dataStyle, //样式
	            hoverAnimation: false, //是否开启 hover 在扇区上的放大动画效果。
	            zlevel:2,
	            data:[  //系列中的数据内容数组
	                {
	                    value:360,     //数据值总的值
	                    name:'invisible',  //数据项名称。
	                    itemStyle : placeHolderStyle
	                },
	                {
	                    value:160,     //剩下的值
	                    name:'桔柑还田',
	                }

	            ],
	             labelLine:{  
	                normal:{  
	                    length:6
	                }  
	            },  
	            itemStyle: {
	                emphasis: {
	                    shadowBlur: 10,
	                    shadowOffsetX: 0,
	                    shadowColor: 'rgba(0, 0, 0, 0.5)'
	                }
	            }

	        },
	        {
	            name:'深施化肥',
	            type:'pie',
	            clockWise:false,
	            radius : [35,45.5],
	            center:['40%', '50%'], //饼图片的中心
	            itemStyle : dataStyle,
	            hoverAnimation: false,
	            zlevel:100,
	            data:[
	                {
	                    value:360,   //数据值总的值
	                    name:'invisible',
	                    itemStyle : placeHolderStyle
	                },
	                {
	                    value:350,
	                    name:'深施化肥',
	                }
	            ],
	            labelLine:{  
	                normal:{  
	                    length:6
	                }  
	            },  
	            itemStyle: {
	                emphasis: {
	                    shadowBlur: 10,
	                    shadowOffsetX: 0,
	                    shadowColor: 'rgba(0, 0, 0, 0.5)'
	                }
	            }
	        },
	        {
	            name:'总圆',
	            type:'pie',
	            clockWise:false,
	            hoverAnimation: false,
	            radius : [35,45.5],
	            center:['40%', '50%'], //饼图片的中心
	            itemStyle : dataStyle,

	            data:[
	                {
	                    value:100,
	                    name:'总圆'
	                },
	                {
	                    value:0,
	                    name:'invisible',
	                    itemStyle : placeHolderStyle
	                }
	            ],
	        },
	        {
	            name:'大圆',
	            type:'pie',
	            clockWise:false,
	            hoverAnimation: false,
	            radius : [45,57.5],
	            center:['40%', '50%'], //饼图片的中心
	            itemStyle : dataStyle,
	            zlevel:1,
	            data:[
	                {
	                    value:360,
	                    name:'大圆'
	                },
	                {
	                    value:0,
	                    name:'invisible',
	                    itemStyle : placeHolderStyle
	                }
	            ],
	        },
	    ]
	};
	myChart.setOption(option);