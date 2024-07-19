mapboxgl.accessToken = 'pk.eyJ1IjoiamFjb2JkZWNhc3RybyIsImEiOiJjbHc3ejV0dDkyOXk5MnFscjRpZ2t1a213In0.FEJ1W-jzrgCjuwsnDEyboQ';

var map3 = new mapboxgl.Map({
  container: 'priority_map', // container element id
  style: 'mapbox://styles/jacobdecastro/clw8322nr003y01nx9uuy4fqu',
  center: [-74.0059, 40.7128], // initial map center in [lon, lat]
  zoom: 10,
  maxBounds: bounds,
  cooperativeGestures: true
});

map3.on('load', () => {

  map3.addSource('pstops', {
    type: 'vector',
    url: 'mapbox://jacobdecastro.ciksxcqv'
  });

  map3.addSource('proutes', {
    type: 'vector',
    url: 'mapbox://jacobdecastro.df6o5y1j'
  });

  map3.addLayer({
            'id': 'proutes',
            'type': 'line',
            'source': 'proutes',
            'source-layer': 'Priority_routes',
            'layout': {
                'line-join': 'round',
                'line-cap': 'round'
            },
            'paint': {
                'line-color': '#f15d22',
                'line-width': 2
            }
        });

  map3.addLayer({
    'id': 'pstops',
    'type': 'circle',
    'source': 'pstops',
    'source-layer': 'Urban_Heat_and_Bus_Stops__202-abw6ed',
    'paint': {
      'circle-color': '#f15d22',
      'circle-opacity': 0.8,
      'circle-radius': {
        'base': 2,
        'stops': [
          [10,4],
          [12, 8],
          [16, 16],
          [22, 180]
        ]
      },
      'circle-stroke-color': 'white',
        'circle-stroke-width': .25
    }
  });


 });



// When a click event occurs on a feature in the places layer, open a popup at the
// location of the feature, with description HTML from its properties.
map3.on('click', 'pstops', (e) => {
// Copy coordinates array.
const coordinates = e.features[0].geometry.coordinates.slice();
const description = e.features[0].properties.Mode;
const address = e.features[0].properties.CrossStreets;
 
// Ensure that if the map is zoomed out such that multiple
// copies of the feature are visible, the popup appears
// over the copy being pointed to.
while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
}
 
new mapboxgl.Popup()
.setLngLat(coordinates)
.setHTML('<p class="popDate">' + e.features[0].properties.ntaname + '</p><h1 class="popuph1 border-bottom pb-2">' + e.features[0].properties.stop_name + '</h1><p class="popDate"><span style="font-weight:700">Routes:</span> ' + e.features[0].properties.route_ids + '</p><p class="popDate"><span style="font-weight:700">Stop ID:</span> ' + e.features[0].properties.stop_id + '</p>')
.addTo(map3);
});
 
// Change the cursor to a pointer when the mouse is over the places layer.
map3.on('mouseenter', 'places', () => {
map3.getCanvas().style.cursor = 'pointer';
});
 
// Change it back to a pointer when it leaves.
map3.on('mouseleave', 'places', () => {
map3.getCanvas().style.cursor = '';
});

map3.on('mousemove', 'cb', function(e) {
        // Change the cursor style as a UI indicator.
        map3.getCanvas().style.cursor = 'pointer';

        // Single out the first found feature.
        var feature = e.features[0];

        // Display a popup with the name of the county
        popup.setLngLat(e.lngLat)
            .setText(feature.properties.COUNTY)
            .addTo(map3);
    });

    map3.on('mouseleave', 'cb', function() {
        map3.getCanvas().style.cursor = '';
        popup.remove();
    });