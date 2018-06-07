<template>
	<div>
       <div id="gaugeContainer" style="width:1000px; height:800px"></div>
    </div>
</template>
<script>
import Echarts from "echarts";
import Axios from "axios";

export default {
  name: "Page11",
  components: {},
  data: function() {
    return {};
  },
  mounted: function() {
    let host = "http://" + location.host + "/";
    //基于准备好的dom, 初始化echarts实例

    Axios.get(host + "src/jsons/china.json").then(res => {
      Echarts.registerMap("china", res.data);
      let myChart = Echarts.init(document.getElementById("gaugeContainer"));
      var convertData = function(data) {
        var res = [];
        for (var i = 0; i < data.features.length; i++) {
          var geoCoord = data.features[i].properties.name;
          if (geoCoord == "广东") {
            res.push({
              name: data.features[i].properties.name,
              value: geoCoord
            });
          }
        }
        return res;
      };
      myChart.setOption({
        tooltip: {
          trigger: "item",
          formatter: function(params) {
            if (params.name == "广东") {
              var info =
                ' <p style = "font-size:18px" > ' +
                params.name +
                ' </p> <p style = "font-size:14px" > 设备数：' +
                params.value +
                " </p>";
              return info;
            }
          },
          backgroundColor: "#ff7f50", //提示标签背景颜色
          textStyle: {
            color: "#fff"
          } //提示标签字体颜色
        },
        legend: {
          show: true,
          orient: "horizontal",
          left: "left",
          data: ["china"]
        },
        // geo: {
        //   map: "guangdong",
        //   label: {
        //     emphasis: {
        //       show: true
        //     }
        //   },
        //   roam: false,
        //   //selectedMode: 'single',
        //   itemStyle: {
        //     normal: {
        //       borderColor: "#111"
        //     },
        //     // normal: function () {

        //     // },
        //     emphasis: {
        //       areaColor: "gray"
        //     }
        //   },
        //   regions: [
        //     {
        //       name: "广东",
        //       value: "33",
        //       itemStyle: {
        //         normal: {
        //           areaColor: "red",
        //           color: "red"
        //         }
        //       }
        //     }
        //   ]
        // },
        series: [
          {
            name: "china",
            type: "map",
            mapType: "china",
            //data: convertData(data),
            label: {
              normal: {
                show: false
              },
              emphasis: {
                show: true
              }
            },
            itemStyle: {
              normal: {
                color: "red"
              }
            },
            data: [
              {
                name: "广东",
                value: "33",
                selected: true
              }
            ],
            markPoint: {
              //图形
              symbolSize: 130,
              label: {
                normal: {
                  show: true,
                  formatter: "{b}\n{c}",
                  color: "black"
                }
              },
              itemStyle: {
                normal: {
                  areaColor: "#C1FFC1",
                  color: ["rgba(0, 255, 0, 0.5)"]
                },
                emphasis: {
                  color: ["rgb(0, 255, 0, 1)"]
                }
              },
              data: [
                {
                  name: "广东",
                  value: "人口数10022",
                  coord: [113.23, 23.16],
                  symbol: "pin"
                }
              ]
            }
          }
        ]
      });
    });
  },
  methods: {}
};
</script>
<style  scoped>

</style>
