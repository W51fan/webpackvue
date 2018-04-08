<template>
	<div>
       <div id="gaugeContainer" style="width:500px; height:500px"></div>
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
            let myChart = Echarts.init(document.getElementById('gaugeContainer'));
            myChart.setOption({
                tooltip: {
                    formatter: "{a} <br/>{b} : {c}%"
                },
                toolbox: {
                    show: true,
                    feature: {
                        mark: {
                            show: true
                        },
                        restore: {
                            show: true
                        },
                        saveAsImage: {
                            show: true
                        }
                    }
                },
                series: [
                    {
                        name: "业务指标",
                        type: "gauge",
                        detail: {
                            formatter: "{value}%"
                        },
                        data: [
                            {
                                value: 50,
                                name: "工作比"
                            }
                        ]
                    }
                ]
            })
        },
        methods:{
            
        },	
    }
</script>
<style  scoped>

</style>
