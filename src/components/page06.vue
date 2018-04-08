<template>
	<div>
        <div id="echartContainer" style="width:800px; height:500px"></div>
    </div>
</template>
<script>
import Echarts from 'echarts'
import Axios from 'axios'


    export default {
        name:"Page06",
        components: {
            
        },
        data:function(){
            return {
               
            }
        },
        mounted: function () {
            //基于准备好的dom, 初始化echarts实例
            let myChart = Echarts.init(document.getElementById('echartContainer'));
            myChart.setOption({
                title: { 
                    show: true, //显示折线图
                    text: '简单折线图', //标题文字
                    link: 'http://echarts.baidu.com/option.html#title.link', //主标题超文本链接,
                    subtext: '熟悉title的配置项', //副标题
                    left: 50, //配置title的位置
                    padding: [5,20,5,10] //title的padding值
                },
                toolbox: {
                    show: true, //是否显示工具栏组件
                    orient: 'vertical', //工具栏icon的布局朝向
                    itemSize: 18, //工具栏icon的大小
                    itemGap: 20, //item之间的间距
                    right: 20, //toolbox的定位位置
                    feature: { 
                        saveAsImage: { show: true }, //导出图片
                        dataView: { show: true }, //数据视图
                        magicType: { //动态类型切换
                            type: [ 'line', 'bar' ]
                        },
                        dataZoom: { show: true }, //数据区域缩放
                        restore: { show: true }, //重置
                    },
                },
                tooltip: {
                    trigger: 'axis' //通过哪种方式触发tip
                },
                xAxis: {
                    data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"],
                    name: '产品'
                },
                yAxis : {},
                 series: [{
                    name: '销量',
                    type: 'line',
                    data: [10, 20, 36, 10, 10, 20],
                    itemStyle: {   
                        normal: {
                        color: 'hotpink'
                        }
                    },
                    markPoint: {
                        data: [
                            { type: 'max', name: '最大值' },
                            { type: 'min', name: '最小值' }
                        ]
                    },
                    markLine: {
                        data: [
                            { type: 'average', name: '平均值' },
                            { type: 'max', name: '最大值' },
                            { type: 'min', name: '最小值' }
                        ]
                    }
                }]
            })
        },
        methods:{
            
        },	
    }
</script>
<style  scoped>

</style>
