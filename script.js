var map = L.map('map').setView([37.7, -122.4], 10);
  // load a tile layer

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://stadiamaps.com/" target="_blank">Stadia Maps</a> <a href="https://stamen.com/" target="_blank">&copy; Stamen Design</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a>',
}).addTo(map);

var ratIcon = L.icon({
    iconUrl: 'http://maptimeboston.github.io/leaflet-intro/rat.gif',
    iconSize: [50, 40]
});

$.getJSON("https://raw.githubusercontent.com/orhuna/WebGIS_SLU_M1/main/Module%201/Assignment%201/data/sf_crime.geojson",
function(data){
    // add GeoJSON layer to the map once the file is loaded
L.geoJson(data, {pointToLayer: function(feature, latlng){
        return L.marker(latlng, {icon:ratIcon});
    }
  }).addTo(map);
});

