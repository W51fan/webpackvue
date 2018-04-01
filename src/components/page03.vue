<template>
	<div id="map"></div>
</template>
<script>
    import ol from '../assets/libs/ol.js';
    import '../assets/styles/ol.css';
    export default{
        mounted: function () {
            let googleMapLayer = new ol.layer.Tile({
                source: new ol.source.XYZ({
                   url:"http://mt0.google.cn/vt/lyrs=m@1&hl=zh-CN&gl=cn&x={x}&y={y}&z={z}&s=Galil"  
                })
            })
			let map = new ol.Map({
				layers: [
					googleMapLayer
				],
				target: 'map',
				view: new ol.View({
					center: [12959773,4853101],
					zoom: 12
				}),
                controls: ol.control.defaults({
								zoom: false,
								attribution: false
				}),
			});
		},	
    }
</script>
