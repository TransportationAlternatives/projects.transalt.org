mapboxgl.accessToken = 'pk.eyJ1IjoiamFjb2JkZWNhc3RybyIsImEiOiJjbHc3ejV0dDkyOXk5MnFscjRpZ2t1a213In0.FEJ1W-jzrgCjuwsnDEyboQ';

const bounds = [
        [-74.633, 40.338], // Southwest coordinates
        [-73.27995843660962, 41.150909605174] // Northeast coordinates
];

var map2 = new mapboxgl.Map({
  container: 'overall_map', // container element id
  style: 'mapbox://styles/jacobdecastro/clw8322nr003y01nx9uuy4fqu',
  center: [-74.0059, 40.7128], // initial map center in [lon, lat]
  zoom: 11,
  maxBounds: bounds,
  cooperativeGestures: true
});

const searchJS = document.getElementById('search-js');
    searchJS.onload = function () {
        const searchBox = new MapboxSearchBox();
        searchBox.accessToken = 'pk.eyJ1IjoiamFjb2JkZWNhc3RybyIsImEiOiJjbHc3ejV0dDkyOXk5MnFscjRpZ2t1a213In0.FEJ1W-jzrgCjuwsnDEyboQ';
        searchBox.options = {
            types: 'address,poi',
            proximity: [-73.99209, 40.68933]
        };
        searchBox.marker = true;
        searchBox.mapboxgl = mapboxgl;
        map2.addControl(searchBox);
    };



map2.on('load', () => {

  map2.addSource('stops', {
    type: 'vector',
    url: 'mapbox://jacobdecastro.3satyt2c'
  });

  map2.addLayer({
    'id': 'stops',
    'type': 'circle',
    'source': 'stops',
    'source-layer': 'Urban_Heat_and_Bus_Stops__202-6tjxbr',
    'paint': {
      'circle-color': [
        'interpolate',
        ['linear'],
        ['number', ['get', 'MEAN_rounded']],
        -10,
        '#00429d',
        -5,
        '#4ba1c4',
        0,
        '#96ffea',
        5,
        '#cbffe5',
        10,
        '#ff005e',
        15,
        '#c9004c',
        20,
        '#93003a'
      ],
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

 

map2.on('idle', () => {
// If these two layers were not added to the map, abort
if (!map2.getLayer('Vision Zero Priority Corridors') || !map2.getLayer('Community Board boundaries') || !map2.getLayer('Council District boundaries')) {
return;
}
 
// Enumerate ids of the layers.
const toggleableLayerIds = ['Vision Zero Priority Corridors','Community Board boundaries','Council District boundaries'];
 
// Set up the corresponding toggle button for each layer.
for (const id of toggleableLayerIds) {
// Skip layers that already have a button set up.
if (document.getElementById(id)) {
continue;
}
 
// Create a link.
const link = document.createElement('a');
link.id = id;
link.href = '#';
link.textContent = id;
link.className = 'active';
 
// Show or hide layer when the toggle is clicked.
link.onclick = function (e) {
const clickedLayer = this.textContent;
e.preventDefault();
e.stopPropagation();
 
const visibility = map2.getLayoutProperty(
clickedLayer,
'visibility'
);
 
// Toggle layer visibility by changing the layout object's visibility property.
if (visibility === 'visible') {
map2.setLayoutProperty(clickedLayer, 'visibility', 'none');
this.className = '';
} else {
this.className = 'active';
map2.setLayoutProperty(
clickedLayer,
'visibility',
'visible'
);
}
};
 
const layers = document.getElementById('menu');
layers.appendChild(link);
}
});

/*
document.getElementById('filterMode').addEventListener('change', (event) => {
  const mode = event.target.value;
  // update the map filter
  if (mode === 'all') {
    filterDay = ['!=', ['string', ['get', 'Mode']], 'placeholder'];
  } else if (mode === 'pedestrian') {
    filterDay = ['match', ['get', 'Mode'], ['Pedestrian'], true, false];
  } else if (mode === 'cyclist') {
    filterDay = ['match', ['get', 'Mode'], ['Cyclist'], true, false];
  } else if (mode === 'motorcyclist') {
    filterDay = ['match', ['get', 'Mode'], ['Motorcyclist'], true, false];
  } else if (mode === 'motorist') {
    filterDay = ['match', ['get', 'Mode'], ['Motorist'], true, false];
  } else if (mode === 'other') {
    filterDay = ['match', ['get', 'Mode'], ['Other Motorist'], true, false];
  } else {
    console.log('error');
  }
  map2.setFilter('injuries', ['all', filterDay]);
});
*/

// When a click event occurs on a feature in the places layer, open a popup at the
// location of the feature, with description HTML from its properties.
map2.on('click', 'stops', (e) => {
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
.setHTML('<p class="popDate">' + e.features[0].properties.ntaname + '</p><h1 class="popuph1 border-bottom pb-2">' + e.features[0].properties.stop_name + '</h1><p class="popDate pb-2">' + e.features[0].properties.Sentence +'</p><p class="popDate"><span style="font-weight:700">Routes:</span> ' + e.features[0].properties.route_ids + '</p><p class="popDate"><span style="font-weight:700">Shelter?</span> ' + e.features[0].properties.Shelter + '</p><p class="popDate"><span style="font-weight:700">Countdown clock?</span> ' + e.features[0].properties.Countdown_clock_within_25ft + '</p><p class="popDate"><span style="font-weight:700">Bench within 25 feet?</span> ' + e.features[0].properties.Bench_within_25ft + '</p><p class="popDate"><span style="font-weight:700">Tree within 25 feet?</span> ' + e.features[0].properties.Tree_within_25ft + '</p><p class="popDate"><span style="font-weight:700">Stop ID:</span> ' + e.features[0].properties.stop_id + '</p>')
.addTo(map2);
});
 
// Change the cursor to a pointer when the mouse is over the places layer.
map2.on('mouseenter', 'places', () => {
map2.getCanvas().style.cursor = 'pointer';
});
 
// Change it back to a pointer when it leaves.
map2.on('mouseleave', 'places', () => {
map2.getCanvas().style.cursor = '';
});

map2.on('mousemove', 'cb', function(e) {
        // Change the cursor style as a UI indicator.
        map2.getCanvas().style.cursor = 'pointer';

        // Single out the first found feature.
        var feature = e.features[0];

        // Display a popup with the name of the county
        popup.setLngLat(e.lngLat)
            .setText(feature.properties.COUNTY)
            .addTo(map2);
    });

    map2.on('mouseleave', 'cb', function() {
        map2.getCanvas().style.cursor = '';
        popup.remove();
    });


