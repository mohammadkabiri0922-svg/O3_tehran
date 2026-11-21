var wms_layers = [];

var lyr_osm_0 = new ol.layer.Image({
        opacity: 1,
        
    title: 'osm<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/osm_0.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [5668116.172773, 4223141.035442, 5771153.286902, 4285207.902409]
        })
    });
var lyr__1 = new ol.layer.Image({
        opacity: 1,
        
    title: 'میزان اوزون ثبت شده<br />\
    <img src="styles/legend/_1_0.png" /> 6.9534<br />\
    <img src="styles/legend/_1_1.png" /> 8.6700<br />\
    <img src="styles/legend/_1_2.png" /> 10.3867<br />\
    <img src="styles/legend/_1_3.png" /> 12.1033<br />\
    <img src="styles/legend/_1_4.png" /> 13.8199<br />\
    <img src="styles/legend/_1_5.png" /> 15.5365<br />\
    <img src="styles/legend/_1_6.png" /> 17.2532<br />\
    <img src="styles/legend/_1_7.png" /> 18.8378<br />\
    <img src="styles/legend/_1_8.png" /> 20.1582<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/_1.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [5687179.992953, 4241284.223064, 5744870.992131, 4277162.745166]
        })
    });
var format__2 = new ol.format.GeoJSON();
var features__2 = format__2.readFeatures(json__2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__2.addFeatures(features__2);
var lyr__2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__2, 
                style: style__2,
                popuplayertitle: 'ایستگاه های ثبت آلایندگی هوا',
                interactive: true,
                title: '<img src="styles/legend/_2.png" /> ایستگاه های ثبت آلایندگی هوا'
            });
var format__3 = new ol.format.GeoJSON();
var features__3 = format__3.readFeatures(json__3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__3.addFeatures(features__3);
var lyr__3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__3, 
                style: style__3,
                popuplayertitle: 'مناطق',
                interactive: true,
                title: '<img src="styles/legend/_3.png" /> مناطق'
            });

lyr_osm_0.setVisible(true);lyr__1.setVisible(true);lyr__2.setVisible(true);lyr__3.setVisible(true);
var layersList = [lyr_osm_0,lyr__1,lyr__2,lyr__3];
lyr__2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Name': 'Name', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'date': 'date', 'O3ppb': 'O3ppb', 'o3_ppb': 'o3_ppb', });
lyr__3.set('fieldAliases', {'IDMAN': 'IDMAN', 'NAME': 'NAME', 'area': 'area', });
lyr__2.set('fieldImages', {'OBJECTID': 'TextEdit', 'Name': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'date': 'TextEdit', 'O3ppb': 'TextEdit', 'o3_ppb': 'TextEdit', });
lyr__3.set('fieldImages', {'IDMAN': 'TextEdit', 'NAME': 'TextEdit', 'area': 'TextEdit', });
lyr__2.set('fieldLabels', {'OBJECTID': 'inline label - always visible', 'Name': 'inline label - always visible', 'Latitude': 'inline label - always visible', 'Longitude': 'inline label - always visible', 'date': 'inline label - always visible', 'O3ppb': 'inline label - always visible', 'o3_ppb': 'inline label - always visible', });
lyr__3.set('fieldLabels', {'IDMAN': 'inline label - always visible', 'NAME': 'inline label - always visible', 'area': 'inline label - always visible', });
lyr__3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});