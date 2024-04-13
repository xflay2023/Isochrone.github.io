var wms_layers = [];


        var lyr_CartoLight_0 = new ol.layer.Tile({
            'title': 'Carto Light',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.pn'
            })
        });
var format_30minute_1 = new ol.format.GeoJSON();
var features_30minute_1 = format_30minute_1.readFeatures(json_30minute_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_30minute_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_30minute_1.addFeatures(features_30minute_1);
var lyr_30minute_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_30minute_1, 
                style: style_30minute_1,
                popuplayertitle: "30 minute",
                interactive: true,
                title: '<img src="styles/legend/30minute_1.png" /> 30 minute'
            });
var format_15minute_2 = new ol.format.GeoJSON();
var features_15minute_2 = format_15minute_2.readFeatures(json_15minute_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_15minute_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_15minute_2.addFeatures(features_15minute_2);
var lyr_15minute_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_15minute_2, 
                style: style_15minute_2,
                popuplayertitle: "15 minute",
                interactive: true,
                title: '<img src="styles/legend/15minute_2.png" /> 15 minute'
            });
var format_5minute_3 = new ol.format.GeoJSON();
var features_5minute_3 = format_5minute_3.readFeatures(json_5minute_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_5minute_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_5minute_3.addFeatures(features_5minute_3);
var lyr_5minute_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_5minute_3, 
                style: style_5minute_3,
                popuplayertitle: "5 minute",
                interactive: true,
                title: '<img src="styles/legend/5minute_3.png" /> 5 minute'
            });
var format_Unitidenvmnt_4 = new ol.format.GeoJSON();
var features_Unitidenvmnt_4 = format_Unitidenvmnt_4.readFeatures(json_Unitidenvmnt_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Unitidenvmnt_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Unitidenvmnt_4.addFeatures(features_Unitidenvmnt_4);
var lyr_Unitidenvmnt_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Unitidenvmnt_4, 
                style: style_Unitidenvmnt_4,
                popuplayertitle: "Unități de învățământ",
                interactive: true,
                title: '<img src="styles/legend/Unitidenvmnt_4.png" /> Unități de învățământ'
            });
var format_Limiteadministrative_5 = new ol.format.GeoJSON();
var features_Limiteadministrative_5 = format_Limiteadministrative_5.readFeatures(json_Limiteadministrative_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Limiteadministrative_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Limiteadministrative_5.addFeatures(features_Limiteadministrative_5);
var lyr_Limiteadministrative_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Limiteadministrative_5, 
                style: style_Limiteadministrative_5,
                popuplayertitle: "Limite administrative",
                interactive: false,
                title: '<img src="styles/legend/Limiteadministrative_5.png" /> Limite administrative'
            });
var group_Distanaparcurspnladestinaietimp = new ol.layer.Group({
                                layers: [lyr_30minute_1,lyr_15minute_2,lyr_5minute_3,],
                                fold: "open",
                                title: "Distanța parcursă până la destinație (timp)"});

lyr_CartoLight_0.setVisible(true);lyr_30minute_1.setVisible(true);lyr_15minute_2.setVisible(true);lyr_5minute_3.setVisible(true);lyr_Unitidenvmnt_4.setVisible(true);lyr_Limiteadministrative_5.setVisible(true);
var layersList = [lyr_CartoLight_0,group_Distanaparcurspnladestinaietimp,lyr_Unitidenvmnt_4,lyr_Limiteadministrative_5];
lyr_30minute_1.set('fieldAliases', {'ID': 'ID', 'CENTER_LON': 'CENTER_LON', 'CENTER_LAT': 'CENTER_LAT', 'AA_MINS': 'AA_MINS', 'AA_MODE': 'AA_MODE', 'TOTAL_POP': 'TOTAL_POP', });
lyr_15minute_2.set('fieldAliases', {'ID': 'ID', 'CENTER_LON': 'CENTER_LON', 'CENTER_LAT': 'CENTER_LAT', 'AA_MINS': 'AA_MINS', 'AA_MODE': 'AA_MODE', 'TOTAL_POP': 'TOTAL_POP', });
lyr_5minute_3.set('fieldAliases', {'ID': 'ID', 'CENTER_LON': 'CENTER_LON', 'CENTER_LAT': 'CENTER_LAT', 'AA_MINS': 'AA_MINS', 'AA_MODE': 'AA_MODE', 'TOTAL_POP': 'TOTAL_POP', });
lyr_Unitidenvmnt_4.set('fieldAliases', {'POINT_X': 'POINT_X', 'POINT_Y': 'POINT_Y', 'CF': 'CF', 'SIIIR': 'SIIIR', 'Statutul': 'Statutul', 'Unit_înv': 'Unit_înv', 'Observ': 'Observ', 'Tip_unit': 'Tip_unit', 'Coduri': 'Coduri', 'Creșă': 'Creșă', 'Preșcolar': 'Preșcolar', 'Primar': 'Primar', 'Gimnazial': 'Gimnazial', 'Liceal': 'Liceal', 'Vocaționa': 'Vocaționa', 'Profes': 'Profes', 'Postliceal': 'Postliceal', 'Uni': 'Uni', 'Special': 'Special', 'Club': 'Club', 'Adresă': 'Adresă', 'Cod_poșta': 'Cod_poșta', 'Localitate': 'Localitate', 'Sector': 'Sector', 'E_mail': 'E_mail', 'Website': 'Website', 'Telefon': 'Telefon', 'Tip_propri': 'Tip_propri', 'Nr_elevi': 'Nr_elevi', 'Schimbul_1': 'Schimbul_1', 'Schimbul_2': 'Schimbul_2', 'Schimbul_3': 'Schimbul_3', 'Mod_funcț': 'Mod_funcț', 'Nr_schimb': 'Nr_schimb', 'Săli_clas': 'Săli_clas', 'Laborat': 'Laborat', 'Sală_mese': 'Sală_mese', 'Biblio': 'Biblio', 'Cămin': 'Cămin', 'Sală_spor': 'Sală_spor', 'Teren_ext': 'Teren_ext', 'Bazin_îno': 'Bazin_îno', 'Atelier': 'Atelier', 'Cab_medic': 'Cab_medic', 'Total_săl': 'Total_săl', 'Pers_cali': 'Pers_cali', 'Pers_necal': 'Pers_necal', 'Pers_neces': 'Pers_neces', 'Sursă_inf': 'Sursă_inf', 'Data_recep': 'Data_recep', 'Autor': 'Autor', 'circumsc �': 'circumsc �', });
lyr_Limiteadministrative_5.set('fieldAliases', {'Id': 'Id', 'IFCID': 'IFCID', 'localId': 'localId', 'namespace': 'namespace', 'versionId': 'versionId', 'country': 'country', 'natLevel': 'natLevel', 'natLevName': 'natLevName', 'natCode': 'natCode', 'name': 'name', 'resOfAut': 'resOfAut', 'beginVers': 'beginVers', 'endVersion': 'endVersion', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_30minute_1.set('fieldImages', {'ID': 'TextEdit', 'CENTER_LON': 'TextEdit', 'CENTER_LAT': 'TextEdit', 'AA_MINS': 'TextEdit', 'AA_MODE': 'TextEdit', 'TOTAL_POP': 'TextEdit', });
lyr_15minute_2.set('fieldImages', {'ID': 'TextEdit', 'CENTER_LON': 'TextEdit', 'CENTER_LAT': 'TextEdit', 'AA_MINS': 'TextEdit', 'AA_MODE': 'TextEdit', 'TOTAL_POP': 'TextEdit', });
lyr_5minute_3.set('fieldImages', {'ID': 'TextEdit', 'CENTER_LON': 'TextEdit', 'CENTER_LAT': 'TextEdit', 'AA_MINS': 'TextEdit', 'AA_MODE': 'TextEdit', 'TOTAL_POP': 'TextEdit', });
lyr_Unitidenvmnt_4.set('fieldImages', {'POINT_X': 'TextEdit', 'POINT_Y': 'TextEdit', 'CF': 'TextEdit', 'SIIIR': 'TextEdit', 'Statutul': 'TextEdit', 'Unit_înv': 'TextEdit', 'Observ': 'TextEdit', 'Tip_unit': 'TextEdit', 'Coduri': 'TextEdit', 'Creșă': 'TextEdit', 'Preșcolar': 'TextEdit', 'Primar': 'TextEdit', 'Gimnazial': 'TextEdit', 'Liceal': 'TextEdit', 'Vocaționa': 'TextEdit', 'Profes': 'TextEdit', 'Postliceal': 'TextEdit', 'Uni': 'TextEdit', 'Special': 'TextEdit', 'Club': 'TextEdit', 'Adresă': 'TextEdit', 'Cod_poșta': 'TextEdit', 'Localitate': 'TextEdit', 'Sector': 'TextEdit', 'E_mail': 'TextEdit', 'Website': 'TextEdit', 'Telefon': 'TextEdit', 'Tip_propri': 'TextEdit', 'Nr_elevi': 'TextEdit', 'Schimbul_1': 'TextEdit', 'Schimbul_2': 'TextEdit', 'Schimbul_3': 'TextEdit', 'Mod_funcț': 'TextEdit', 'Nr_schimb': 'TextEdit', 'Săli_clas': 'TextEdit', 'Laborat': 'TextEdit', 'Sală_mese': 'TextEdit', 'Biblio': 'TextEdit', 'Cămin': 'TextEdit', 'Sală_spor': 'TextEdit', 'Teren_ext': 'TextEdit', 'Bazin_îno': 'TextEdit', 'Atelier': 'TextEdit', 'Cab_medic': 'TextEdit', 'Total_săl': 'TextEdit', 'Pers_cali': 'TextEdit', 'Pers_necal': 'TextEdit', 'Pers_neces': 'TextEdit', 'Sursă_inf': 'TextEdit', 'Data_recep': 'TextEdit', 'Autor': 'TextEdit', 'circumsc �': 'TextEdit', });
lyr_Limiteadministrative_5.set('fieldImages', {'Id': 'Range', 'IFCID': 'Range', 'localId': 'TextEdit', 'namespace': 'TextEdit', 'versionId': 'TextEdit', 'country': 'TextEdit', 'natLevel': 'TextEdit', 'natLevName': 'TextEdit', 'natCode': 'TextEdit', 'name': 'TextEdit', 'resOfAut': 'TextEdit', 'beginVers': 'DateTime', 'endVersion': 'DateTime', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_30minute_1.set('fieldLabels', {'ID': 'hidden field', 'CENTER_LON': 'hidden field', 'CENTER_LAT': 'hidden field', 'AA_MINS': 'hidden field', 'AA_MODE': 'hidden field', 'TOTAL_POP': 'hidden field', });
lyr_15minute_2.set('fieldLabels', {'ID': 'hidden field', 'CENTER_LON': 'hidden field', 'CENTER_LAT': 'hidden field', 'AA_MINS': 'hidden field', 'AA_MODE': 'hidden field', 'TOTAL_POP': 'hidden field', });
lyr_5minute_3.set('fieldLabels', {'ID': 'hidden field', 'CENTER_LON': 'hidden field', 'CENTER_LAT': 'hidden field', 'AA_MINS': 'hidden field', 'AA_MODE': 'hidden field', 'TOTAL_POP': 'hidden field', });
lyr_Unitidenvmnt_4.set('fieldLabels', {'POINT_X': 'inline label - always visible', 'POINT_Y': 'inline label - always visible', 'CF': 'inline label - always visible', 'SIIIR': 'inline label - always visible', 'Statutul': 'inline label - always visible', 'Unit_înv': 'inline label - always visible', 'Observ': 'inline label - always visible', 'Tip_unit': 'inline label - always visible', 'Coduri': 'inline label - always visible', 'Creșă': 'inline label - always visible', 'Preșcolar': 'inline label - always visible', 'Primar': 'inline label - always visible', 'Gimnazial': 'inline label - always visible', 'Liceal': 'inline label - always visible', 'Vocaționa': 'inline label - always visible', 'Profes': 'inline label - always visible', 'Postliceal': 'inline label - always visible', 'Uni': 'inline label - always visible', 'Special': 'inline label - always visible', 'Club': 'inline label - always visible', 'Adresă': 'inline label - always visible', 'Cod_poșta': 'inline label - always visible', 'Localitate': 'inline label - always visible', 'Sector': 'inline label - always visible', 'E_mail': 'inline label - always visible', 'Website': 'inline label - always visible', 'Telefon': 'inline label - always visible', 'Tip_propri': 'inline label - always visible', 'Nr_elevi': 'inline label - always visible', 'Schimbul_1': 'inline label - always visible', 'Schimbul_2': 'inline label - always visible', 'Schimbul_3': 'inline label - always visible', 'Mod_funcț': 'inline label - always visible', 'Nr_schimb': 'inline label - always visible', 'Săli_clas': 'inline label - always visible', 'Laborat': 'inline label - always visible', 'Sală_mese': 'inline label - always visible', 'Biblio': 'inline label - always visible', 'Cămin': 'inline label - always visible', 'Sală_spor': 'inline label - always visible', 'Teren_ext': 'inline label - always visible', 'Bazin_îno': 'inline label - always visible', 'Atelier': 'inline label - always visible', 'Cab_medic': 'inline label - always visible', 'Total_săl': 'inline label - always visible', 'Pers_cali': 'inline label - always visible', 'Pers_necal': 'inline label - always visible', 'Pers_neces': 'inline label - always visible', 'Sursă_inf': 'inline label - always visible', 'Data_recep': 'inline label - always visible', 'Autor': 'inline label - always visible', 'circumsc �': 'hidden field', });
lyr_Limiteadministrative_5.set('fieldLabels', {'Id': 'no label', 'IFCID': 'no label', 'localId': 'no label', 'namespace': 'no label', 'versionId': 'no label', 'country': 'no label', 'natLevel': 'no label', 'natLevName': 'no label', 'natCode': 'no label', 'name': 'no label', 'resOfAut': 'no label', 'beginVers': 'no label', 'endVersion': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_Limiteadministrative_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});