<template>
	<div id="map"></div>
</template>
<script>
    import ol from '../assets/libs/ol.js';
    import '../assets/styles/ol.css';
    export default{
        mounted: function () {
            var projection = ol.proj.get("EPSG:3857");
            var resolutions = [];
            for (var i = 0; i < 19; i++) {
                resolutions[i] = Math.pow(2, 18 - i);
            }
            var tilegrid = new ol.tilegrid.TileGrid({
                origin: [0, 0],
                resolutions: resolutions
            });

            var baidu_source = new ol.source.TileImage({
                projection: projection,
                tileGrid: tilegrid,
                tileUrlFunction: function (tileCoord, pixelRatio, proj) {
                    if (!tileCoord) {
                        return "";
                    }
                    var z = tileCoord[0];
                    var x = tileCoord[1];
                    var y = tileCoord[2];

                    if (x < 0) {
                        x = "M" + (-x);
                    }
                    if (y < 0) {
                        y = "M" + (-y);
                    }

                    return "http://online3.map.bdimg.com/onlinelabel/?qt=tile&x=" + x + "&y=" + y + "&z=" + z + "&styles=pl&udt=20151021&scaler=1&p=1&ak=E4805d16520de693a3fe707cdc962045&customid=midnight";
                }
            });

            var baidu_layer = new ol.layer.Tile({
                source: baidu_source
            });
			
			let map = new ol.Map({
				layers: [
					baidu_layer
				],
				target: 'map',
				view: new ol.View({
					center: [12959773,4853101],
					zoom: 12
				})
			});
		},	
    }
</script>
