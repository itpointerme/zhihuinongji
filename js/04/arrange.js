let arrange = echarts.init(document.getElementById('arrange'));

/*数据*/
let _name = [
                {value: 80, name: 'NO.5 天辰北斗'},
                {value: 100, name: 'NO.4 黑龙江北斗'},
                {value: 120, name: 'NO.3 世纪赢联'},
                {value: 140, name: 'NO.2 江苏北斗'},
                {value: 160, name: 'NO.1 河北信翔'}
            ];
            
let _arrange = {
	color : 'rgba(0,162,255,.72)',
	tooltip : {
		show : false ,
		areaStyle: {
            normal: {
                color: 'red',
                opacity: 1
            }
        },
	},

    series: 
        {
            name:'漏斗图',
            type:'funnel',
            left: 0,
            top: 0,
            bottom: 0,
            width: '96%',
            height:'80%',
            min: 60,
            max: 200,
            minSize: '30%',
            maxSize: '100%',
            sort: 'descending',
            gap: 2,
            legendHoverLink : false ,
            label: {
                normal: {
                    show: true,
                    position: 'inside',
                    textStyle : {
            			fontSize : 12
            		}
                },
                emphasis: {
                    textStyle: {
                        fontSize: 20 ,
                        color : '#18294e' ,
                    }
                }
            },
            labelLine: {
                normal: {
                    length: 10,
                    lineStyle: {
                        width: 1,
                        type: 'solid' ,
                        fontSize: 12
                    }
                }
            },
            
            itemStyle: {
                normal: {
                    borderColor: '#fff',
                    borderWidth: 0 ,
                	areaColor: 'red',
                	laber : {
                		show : false ,
                	}
                },
                emphasis : {
                	areaColor: 'red',
                	backgroundColor : '#red' ,
                	laber : {
                		show : false ,
                	}
                }
            },
            data: _name
        }
}

arrange.setOption(_arrange);