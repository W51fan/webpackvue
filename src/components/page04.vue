<template>
	<div id="map"></div>
</template>
<script>
    import ol from '../assets/libs/ol.js';
    import '../assets/styles/ol.css';
    export default{
        mounted: function () {
            let bingMap = new ol.layer.Tile({
                source: new ol.source.BingMaps({
                    key: 'AkjzA7OhS4MIBjutL21bkAop7dc41HSE0CNTR5c6HJy8JKc7U9U9RveWJrylD3XJ',
                    imagerySet: 'Road'
                })
            });
			let map = new ol.Map({
				layers: [
					bingMap
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
