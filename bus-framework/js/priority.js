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
    url: 'mapbox://jacobdecastro.0vdpe0b1'
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
                'line-width': 3
            }
        });

  map3.addLayer({
    'id': 'pstops',
    'type': 'circle',
    'source': 'pstops',
    'source-layer': 'Priority_stops',
    'paint': {
      'circle-color': '#f15d22',
      'circle-opacity': 0.8,
      'circle-radius': {
        'base': 1.75,
        'stops': [
          [12, 2],
          [16, 10],
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
map3.on('click', 'Priority_stops', (e) => {
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
.setHTML('<p class="popDate">' + e.features[0].properties.NTA_Name + '</p><h1 class="popuph1 border-bottom pb-2">' + e.features[0].properties.Stop_Name + '</h1><p class="popDate"><span style="font-weight:700">Routes:</span> ' + e.features[0].properties.route_ids + '</p><p class="popDate "><span style="font-weight:700">Priority stop?</span> ' + e.features[0].properties.Eligible_for_priority_stop + '</p><p class="popDate"><span style="font-weight:700">Difference from mean temperature:</span> ' + e.features[0].properties.MEAN_rounded + '&deg; F </p><p class="popDate"><span style="font-weight:700">Unsheltered?</span> ' + e.features[0].properties.Unsheltered + '</p><p class="popDate"><span style="font-weight:700">Countdown clock?</span> ' + e.features[0].properties.Countdown_clock_within_25ft + '</p><p class="popDate"><span style="font-weight:700">Bench within 25 feet?</span> ' + e.features[0].properties.Bench_within_25ft + '</p><p class="popDate"><span style="font-weight:700">Tree within 25 feet?</span> ' + e.features[0].properties.Tree_within_25ft + '</p><p class="popDate"><span style="font-weight:700">Stop ID:</span> ' + e.features[0].properties.Stop_ID + '</p>')
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