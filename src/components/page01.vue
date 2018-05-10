<template>
	<div>
		<div id="map"></div>
		<minimap></minimap>
		<loadpointButton @loadingPoint="loadpoint"></loadpointButton>
		<removePoint @removePoint="removepoint"></removePoint>
		<loadPolygonButton @loadPolygon="loadpolygon"></loadPolygonButton>
		<removePolygon @removePolygon="removepolygon"></removePolygon>
	</div>
</template>
<script>
import ol from "../assets/libs/ol.js";
import "../assets/styles/ol.css";
import minimap from "./minimap.vue";
import loadpointButton from "./loadpointButton.vue";
import removePoint from "./removePoint.vue";
import loadPolygonButton from "./loadPolygonButton.vue";
import removePolygon from "./removePolygon.vue";
import Axios from "axios";
export default {
  name: "page01",
  components: {
    minimap,
    loadpointButton,
    removePoint,
    loadPolygonButton,
    removePolygon
  },
  data: function() {
    return {
      MapTaget: {}
    };
  },
  mounted: function() {
    let googleMapLayer = new ol.layer.Tile({
      source: new ol.source.XYZ({
        url:
          "http://wprd0{1-4}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&style=7&x={x}&y={y}&z={z}"
      })
    });

    let map = new ol.Map({
      layers: [googleMapLayer],
      target: "map",
      view: new ol.View({
        center: [12959773, 4853101],
        zoom: 12
      }),
      controls: ol.control.defaults({
        zoom: false,
        attribution: false
      })
    });
    console.log(map);
    this.MapTaget = map;
  },
  methods: {
    loadpoint() {
      var pointFeature = new ol.Feature(
        new ol.geom.Point(
          ol.proj.transform([116.31361, 37.928791], "EPSG:4326", "EPSG:3857")
        )
      );
      var vector = new ol.layer.Vector({
        source: new ol.source.Vector({
          features: [pointFeature]
        }),
        style: new ol.style.Style({
          image: new ol.style.Icon({
            opacity: 0.95,
            src: "../src/assets/images/point.png"
          })
        })
      });
      vector.set("name", "point");
      this.MapTaget.addLayer(vector);
    },
    removepoint() {
      var map = this.MapTaget;
      var array = map.getLayers().getArray();
      array.forEach(function(item) {
        if (item.get("name") == "point") {
          map.removeLayer(item);
        }
      });
    },
    loadpolygon() {
      let host = "http://" + location.host + "/";
      Axios.get(host + "src/jsons/geoJson.json")
        .then(res => {
          debugger;
          var features = {
            type: "FeatureCollection",
            crs: {
              type: "name",
              properties: {
                name: "EPSG:4326"
              }
            },
            features: res.data.features
          };
          var format = new ol.format.GeoJSON();
          var featuresArray = format.readFeatures(features, {
            dataProjection: "EPSG:4326",
            featureProjection: "EPSG:3857"
          });
          var polygon = new ol.layer.Vector({
            source: new ol.source.Vector({
              features: featuresArray
            }),
            style: new ol.style.Style({
              stroke: new ol.style.Stroke({
                color: "green",
                lineDash: [4],
                width: 3
              }),
              fill: new ol.style.Fill({
                color: "rgba(0, 0, 255, 0.1)"
              })
            })
          });
          polygon.set("name", "polygon");
          this.MapTaget.addLayer(polygon);
        })
        .catch(error => {
          console.log(error);
        });
    },
    removepolygon() {
      var map = this.MapTaget;
      var array = map.getLayers().getArray();
      array.forEach(function(item) {
        if (item.get("name") == "polygon") {
          map.removeLayer(item);
        }
      });
    }
  }
};
</script>
