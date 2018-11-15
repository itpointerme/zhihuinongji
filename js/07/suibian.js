
function createObj(str) {
	

	return echarts.init(document.getElementById(str));
}
/*各类主要农机数量/增长率三年变化图*/
var obj01 = createObj('glzynjsl');

/*终端安排排行榜*/
// var obj02 = createObj('zdap_phb');


/*各类主要农机数量/增长率三年变化图*/

// obj01.setOption();
obj01.setOption({
    xAxis: {
        type: 'category',
        data: ['2014年', '2015年', '2016年'],
        axisLine:{
        	show:true,
        	lineStyle:{
        		color:'#fff',
        	}
        },
        axisTick:{show:false},
        axisLabel: {
        	show:true,
        	color: '#099EB6',
        }
    },
    yAxis: {
        type: 'value',
        axisLine:{
        	show:true,
        	lineStyle:{
        		color:'#fff',
        	}
        },
        axisTick:{show:false},
        axisLabel: {
        	show:true,
        	color: '#099EB6',
        }
    },
    series: [{
        data: [100, 300, 600],
        type: 'line',
		lineStyle:{
			color:'#1efcfd',
			width:2
		},
        label : {
            show : true ,
            color : '#fff'
        },
        itemStyle : {
            color : '#4877fb'
        },
        tooltip : {
            show : true ,
        }
        
    }]
});

/*终端安排排行榜*/

// obj02.setOption({

//     series: [
//         {
//             name:'漏斗图',
//             type:'funnel',
//             left: '10%',
//             top: '10%',
//             //x2: 80,
//             // bottom: 60,
//             width: '80%',
//             height:'80%',
//             // height: {totalHeight} - y - y2,
//             min: 0,
//             max: 100,
//             minSize: '30%',
//             maxSize: '100%',
//             sort: 'descending',
//             gap: 2,
//             label: {
//                 normal: {
//                     show: true,
//                     position: 'inside'
//                 },
//                 emphasis: {
//                     textStyle: {
//                         fontSize: 15,
// 						color:'#000',
//                     }
//                 }
//             },
//             labelLine: {
//                 normal: {
//                     length: 10,
//                     lineStyle: {
//                         width: 1,
//                         type: 'solid'
//                     }
//                 }
//             },
//             itemStyle: {
//                 normal: {
//                     borderColor: '#fff',
//                     borderWidth: 1,
// 					emphasis:{
// 						color:'#ffff00'
// 					},
//                 },
//             },
//             data: [ 
//                 {value: 60, name: 'No.3   世  纪  赢  联'},
//                 {value: 40, name: 'No.4 黑龙江北斗'},
//                 {value: 20, name: 'No.5 天辰北斗'},
//                 {value: 80, name: 'No.2     江    苏    北    斗'},
//                 {value: 100, name: 'No.1      河      北      信      用'}
//             ],
// 			color:['rgba(5,207,209,.7)'],
			
//         }
//     ]
// });