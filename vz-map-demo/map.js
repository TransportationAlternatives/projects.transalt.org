mapboxgl.accessToken = 'pk.eyJ1IjoiamFjb2JkZWNhc3RybyIsImEiOiJjbHJ2Nm9paWkwcGR4MmlzY3ZycGI5NzQ0In0.N-_SdysbafvA0dstl_pBbA';

const map = new mapboxgl.Map({
  container: 'map', // container element id
  style: 'mapbox://styles/mapbox/dark-v11',
  center: [-74.0059, 40.7128], // initial map center in [lon, lat]
  zoom: 11
});

map.on('load', () => {
  map.addLayer({
    id: 'collisions',
    type: 'circle',
    source: {
      type: 'geojson',
      data: 'fatalities.geojson' // replace this with the url of your own geojson
    },
    paint: {
      'circle-color': [
        'match',
        ['get', 'Mode'],
        'Pedestrian',
        '#fbb03b',
        'Cyclist',
        '#223b53',
        'Motorcyclist',
        '#e55e5e',
        'Other Motorist',
        '#3bb2d0',
        'Motorist',
        '#3bb2d0',
        /* other */ '#ccc'
        ],
      'circle-opacity': 0.8,
      'circle-radius': {
        'base': 1.75,
        'stops': [
          [12, 3],
          [22, 180]
        ]
      },
      'circle-stroke-color': 'white',
        'circle-stroke-width': .25
    }
  });
});

document.getElementById('filterMode').addEventListener('change', (event) => {
  const day = event.target.value;
  // update the map filter
  if (day === 'all') {
    filterDay = ['!=', ['string', ['get', 'Mode']], 'placeholder'];
  } else if (day === 'pedestrian') {
    filterDay = ['match', ['get', 'Mode'], ['Pedestrian'], true, false];
  } else if (day === 'cyclist') {
    filterDay = ['match', ['get', 'Mode'], ['Cyclist'], true, false];
  } else if (day === 'motorcyclist') {
    filterDay = ['match', ['get', 'Mode'], ['Motorcyclist'], true, false];
  } else if (day === 'motorist') {
    filterDay = ['match', ['get', 'Mode'], ['Motorist'], true, false];
  } else if (day === 'other') {
    filterDay = ['match', ['get', 'Mode'], ['Other Motorist'], true, false];
  } else {
    console.log('error');
  }
  map.setFilter('collisions', ['all', filterDay]);
});

// When a click event occurs on a feature in the places layer, open a popup at the
// location of the feature, with description HTML from its properties.
map.on('click', 'collisions', (e) => {
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
.setHTML('<p class="popDate">' + e.features[0].properties.Date + '</p><h1 class="popuph1 border-bottom pb-2">' + e.features[0].properties.Cross_Streets + '</h1><p class="popDate"><span style="font-weight:700">Borough:</span> ' + e.features[0].properties.Borough + '</p><p class="popDate"><span style="font-weight:700">Mode:</span> ' + e.features[0].properties.Mode + '</p><p class="popDate"><span style="font-weight:700">Crash ID:</span> ' + e.features[0].properties.Crash_ID + '</p><p class="popDate"><span style="font-weight:700">Person ID:</span> ' + e.features[0].properties.Person_ID + '</p>')
.addTo(map);
});
 
// Change the cursor to a pointer when the mouse is over the places layer.
map.on('mouseenter', 'places', () => {
map.getCanvas().style.cursor = 'pointer';
});
 
// Change it back to a pointer when it leaves.
map.on('mouseleave', 'places', () => {
map.getCanvas().style.cursor = '';
});
