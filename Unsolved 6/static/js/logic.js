// Creating map object
var myMap = L.map("map", {
  center: [40.7128, -74.0059],
  zoom: 11
});

// Adding tile layer
L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.streets",
  accessToken: API_KEY
}).addTo(myMap);

// Link to GeoJSON
var APILink = "http://data.beta.nyc//dataset/d6ffa9a4-c598-4b18-8caf-14abde6a5755/resource/74cdcc33-512f-439c-" +
"a43e-c09588c4b391/download/60dbe69bcd3640d5bedde86d69ba7666geojsonmedianhouseholdincomecensustract.geojson";

var geojson;

// TODO:
//Obtain sample

// Grab data with d3
//understand syntax from website -https://github.com/timwis/Leaflet-choropleth
// SAMPLE CODE - NEED TO COPY THIS AS MUCH AS POSSIBLE WITH OUR DATA
/*L.choropleth(geojsonData, {
	valueProperty: 'incidents', // which property in the features to use
	scale: ['white', 'red'], // chroma.js scale - include as many as you like
	steps: 5, // number of breaks or steps in range
	mode: 'q', // q for quantile, e for equidistant, k for k-means
	style: {
		color: '#fff', // border color
		weight: 2,
		fillOpacity: 0.8
	},
	onEachFeature: function(feature, layer) {
		layer.bindPopup(feature.properties.value)
	}
}).addTo(map)
*/

  // Create a new choropleth layer for our data
d3.json(APILink, function(geojsonData) {
   L.choropleth(geojsonData, {
    valueProperty: 'MHI', // which property in the features to use
    scale: ['white', 'red'], // chroma.js scale - include as many as you like
    steps: 5, // number of breaks or steps in range
    mode: 'q', // q for quantile, e for equidistant, k for k-means
    style: {
      color: '#fff', // border color
      weight: 2,
      fillOpacity: 0.8
    }
  }).addTo(myMap);

});

