mapboxgl.accessToken = 'pk.eyJ1IjoiamFjb2JkZWNhc3RybyIsImEiOiJjazI5YzQzdXAwOXFxM25vMXV4OGl5OGQzIn0.xYccv6RPj_aa6zkS5ShsDw';

var map = new mapboxgl.Map({
  container: 'map', // container element id
  style: 'mapbox://styles/mapbox/dark-v11',
  center: [-74.0059, 40.7128], // initial map center in [lon, lat]
  zoom: 11
});

var sliderOptions = {
        elm: 'slider-control',
        layer: 'collisions',
        source: 'collisions',
        input: true,
        controlWidth: '300px',
        minProperty: 'Date',
        maxProperty: 'Date',
        sliderMin: '2014-01-01T08:00:00.000Z',
        sliderMax: '2023-12-31T08:00:00.000Z',
        filterMin: '2014-01-01T08:00:00.000Z',
        filterMax: '2023-12-31',
        propertyType: 'iso8601',
        rangeDescriptionFormat: 'shortDate',
        descriptionPrefix: 'Date:'
    }

    map.addControl(new RangeSlider(sliderOptions, 'bottom-right'));

map.on('load', () => {

  map.addSource('collisions', {
    // type: 'vector',
    // url: 'mapbox://jacobdecastro.3fuj0i2t'
    type: 'geojson',
    data: '/assets/vzmap/fatalities.geojson'
  });

  map.addSource('vz_priority', {
    type: 'vector',
    url: 'mapbox://jacobdecastro.dasg8mtl'
  });

  map.addSource('cb', {
    type: 'vector',
    url: 'mapbox://jacobdecastro.6b0vi9rm'
  });

    map.addLayer({
    'id': 'Community Board boundaries',
    'type': 'line',
    'source': 'cb',
    'source-layer': 'cb-bzfyay',
    'layout': {
        visibility: 'visible', // show initially
    },
    'paint': {
        'line-color': 'white',
        'line-width': 1,
        'line-opacity': .5
    }
  });


   map.addLayer({
    'id': 'Vision Zero Priority Corridors',
    'type': 'line',
    'source': 'vz_priority',
    'source-layer': 'VZV_Priority_Corridors-2enp65',
    'layout': {
        visibility: 'visible', // show initially
    },
    'paint': {
        'line-color': '#f15d22',
        'line-opacity': .5,
        'line-width': 1
    }
  });



  map.addLayer({
    id: 'collisions',
    type: 'circle',
    source: 'collisions',
    // 'source-layer': 'fatalities-20ch32',
    paint: {
      'circle-color': [
        'match',
        ['get', 'Mode'],
        'Pedestrian',
        '#fbb03b',
        'Cyclist',
        '#223b53',
        'Other Motorist',
        '#3bb2d0',
        'Motorist',
        '#e55e5e',
        /* other */ '#ccc'
        ],
      'circle-opacity': 0.8,
      'circle-radius': {
        'base': 1.75,
        'stops': [
          [12, 3],
          [16, 6],
          [22, 180]
        ]
      },
      'circle-stroke-color': 'white',
        'circle-stroke-width': .25
    }
  });
});
 

map.on('idle', () => {
// If these two layers were not added to the map, abort
if (!map.getLayer('Vision Zero Priority Corridors') || !map.getLayer('Community Board boundaries')) {
return;
}
 
// Enumerate ids of the layers.
const toggleableLayerIds = ['Vision Zero Priority Corridors','Community Board boundaries'];
 
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
 
const visibility = map.getLayoutProperty(
clickedLayer,
'visibility'
);
 
// Toggle layer visibility by changing the layout object's visibility property.
if (visibility === 'visible') {
map.setLayoutProperty(clickedLayer, 'visibility', 'none');
this.className = '';
} else {
this.className = 'active';
map.setLayoutProperty(
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
.setHTML('<p class="popDate">' + e.features[0].properties.NewDate + '</p><h1 class="popuph1 border-bottom pb-2">' + e.features[0].properties.Cross_Streets + '</h1><p class="popDate"><span style="font-weight:700">Borough:</span> ' + e.features[0].properties.Borough + '</p><p class="popDate"><span style="font-weight:700">Mode:</span> ' + e.features[0].properties.Mode + '</p><p class="popDate"><span style="font-weight:700">Age:</span> ' + e.features[0].properties.Age + '</p><p class="popDate"><span style="font-weight:700">Gender:</span> ' + e.features[0].properties.Gender + '</p><p class="popDate"><span style="font-weight:700">Collision ID:</span> ' + e.features[0].properties.Collision_ID + '</p>')
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

map.on('mousemove', 'cb', function(e) {
        // Change the cursor style as a UI indicator.
        map.getCanvas().style.cursor = 'pointer';

        // Single out the first found feature.
        var feature = e.features[0];

        // Display a popup with the name of the county
        popup.setLngLat(e.lngLat)
            .setText(feature.properties.COUNTY)
            .addTo(map);
    });

    map.on('mouseleave', 'cb', function() {
        map.getCanvas().style.cursor = '';
        popup.remove();
    });
