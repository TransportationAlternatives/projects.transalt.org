mapboxgl.accessToken = 'pk.eyJ1IjoiamFjb2JkZWNhc3RybyIsImEiOiJjazI5YzQzdXAwOXFxM25vMXV4OGl5OGQzIn0.xYccv6RPj_aa6zkS5ShsDw';

const bounds = [
        [-74.633, 40.338], // Southwest coordinates
        [-73.27995843660962, 41.150909605174] // Northeast coordinates
];

var map = new mapboxgl.Map({
  container: 'map', // container element id
  style: 'mapbox://styles/mapbox/dark-v11',
  center: [-74.0059, 40.7128], // initial map center in [lon, lat]
  zoom: 11,
  maxBounds: bounds
});

const searchJS = document.getElementById('search-js');
searchJS.onload = function () {
  const searchBox = new MapboxSearchBox();
  searchBox.accessToken = 'pk.eyJ1IjoiamFjb2JkZWNhc3RybyIsImEiOiJjazI5YzQzdXAwOXFxM25vMXV4OGl5OGQzIn0.xYccv6RPj_aa6zkS5ShsDw';
  searchBox.options = {
  types: 'address,poi',
  proximity: [-74.0059, 40.7128]
  };
  searchBox.marker = true;
  searchBox.mapboxgl = mapboxgl;
  map.addControl(searchBox);
  search.popoverOptions = {
    placement: 'top-start',
    flip: true,
    offset: 5
}
  };

var sliderOptions = {
        elm: 'slider-control',
        layer: 'injuries',
        source: 'injuries',
        input: true,
        controlWidth: '300px',
        minProperty: 'Crash_Date',
        maxProperty: 'Crash_Date',
        sliderMin: '2022-01-01',
        sliderMax: '2025-09-30',
        filterMin: '2022-01-01',
        filterMax: '2025-09-30',
        propertyType: 'iso8601',
        rangeDescriptionFormat: 'shortDate',
        descriptionPrefix: 'Date:'
    }

    map.addControl(new RangeSlider(sliderOptions, 'bottom-right'));

map.on('load', () => {

  map.addSource('injuries', {
    // type: 'vector',
    // url: 'mapbox://jacobdecastro.3fuj0i2t'
    type: 'geojson',
    data: 'https://projects.transalt.org/assets/sirta/injuries.geojson'
  });

    map.addSource('cd', {
    // type: 'vector',
    // url: 'mapbox://jacobdecastro.3fuj0i2t'
    type: 'geojson',
    data: 'https://projects.transalt.org/assets/sirta/cd.geojson'
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
        visibility: 'none', // show initially
    },
    'paint': {
        'line-color': 'white',
        'line-width': 1,
        'line-opacity': .5
    }
  });

   map.addLayer({
    'id': 'Council District boundaries',
    'type': 'line',
    'source': 'cd',
    'layout': {
        visibility: 'none', // show initially
    },
    'paint': {
        'line-color': 'yellow',
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
        visibility: 'none', // show initially
    },
    'paint': {
        'line-color': '#f15d22',
        'line-opacity': .5,
        'line-width': 1
    }
  });



  map.addLayer({
    id: 'injuries',
    type: 'circle',
    source: 'injuries',
    // 'source-layer': 'fatalities-20ch32',
    paint: {
      'circle-color': [
        'match',
        ['get', 'Mode'],
        'Pedestrian',
        '#f15d22',
        'Cyclist',
        '#44884e',
        'Other Motorist',
        '#e5a231',
        'Motorist',
        '#3d77a4',
        /* other */ '#ccc'
        ],
      'circle-opacity': 0.9,
      'circle-radius': {
        'base': 1.75,
        'stops': [
          [12, 2],
          [16, 8],
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
if (!map.getLayer('Vision Zero Priority Corridors') || !map.getLayer('Community Board boundaries') || !map.getLayer('Council District boundaries')) {
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
  map.setFilter('injuries', ['all', filterDay]);
});


// When a click event occurs on a feature in the places layer, open a popup at the
// location of the feature, with description HTML from its properties.
map.on('click', 'injuries', (e) => {
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
.setHTML('<p class="popDate">' + e.features[0].properties.Pretty_Date + '</p><h1 class="popuph1 border-bottom pb-2">' + e.features[0].properties.Location_Front + '</h1><p class="popDate">' + e.features[0].properties.PopUp + '</p><p class="popDate"><span style="font-weight:700">Open Data ID:</span> ' + e.features[0].properties.Open_Data_Crash_ID + '</p>')
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
