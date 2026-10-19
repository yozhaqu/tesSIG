var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Batasdukuh_1 = new ol.format.GeoJSON();
var features_Batasdukuh_1 = format_Batasdukuh_1.readFeatures(json_Batasdukuh_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Batasdukuh_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Batasdukuh_1.addFeatures(features_Batasdukuh_1);
var lyr_Batasdukuh_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Batasdukuh_1, 
                style: style_Batasdukuh_1,
                popuplayertitle: 'Batasdukuh',
                interactive: true,
                title: '<img src="styles/legend/Batasdukuh_1.png" /> Batasdukuh'
            });

lyr_OSMStandard_0.setVisible(true);lyr_Batasdukuh_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Batasdukuh_1];
lyr_Batasdukuh_1.set('fieldAliases', {'LEFT_FID': 'LEFT_FID', 'RIGHT_FID': 'RIGHT_FID', 'KET': 'KET', });
lyr_Batasdukuh_1.set('fieldImages', {'LEFT_FID': 'Range', 'RIGHT_FID': 'Range', 'KET': 'TextEdit', });
lyr_Batasdukuh_1.set('fieldLabels', {'LEFT_FID': 'no label', 'RIGHT_FID': 'no label', 'KET': 'no label', });
lyr_Batasdukuh_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});