// Creating map object
var myMap = L.map("map", {
  center: [37.7749, -100.4194],
  zoom: 5
});

// Adding tile layer
L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.streets",
  accessToken: API_KEY
}).addTo(myMap);

// Link to GeoJSON
var APILink = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";

var markers = L.markerClusterGroup();

console.log(APILink);



d3.json(APILink, function(response) {
  
  for (var i = 0; i < response.length; i++) {
    if ("latitude" in response[i] && "longitude" in response[i]) {
      // From sample code --- markers.addLayer(L.marker(getRandomLatLng(map)));
      markers.addLayer(L.marker([Number(response[i].latitude), Number(response[i].longitude)]));
    }
  }
  //From sample code - map.addLayer(markers); --- here map is myMap
  myMap.addLayer(markers);
});


// d3.json(APILink, function(data){
//   console.log(data);
// });


