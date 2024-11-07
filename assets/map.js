mapboxgl.accessToken = 'pk.eyJ1IjoiamFjb2JkZWNhc3RybyIsImEiOiJjazI5YzQzdXAwOXFxM25vMXV4OGl5OGQzIn0.xYccv6RPj_aa6zkS5ShsDw';
    const map = new mapboxgl.Map({
        container: 'map', // container ID
        center: [-73.9815822345163,40.70919602755519], // starting position [lng, lat]. Note that lat must be set between -90 and 90
        zoom: 9 // starting zoom
    });

map.on('load', () => {
        map.addSource('earthquakes', {
            type: 'geojson',
            // Use a URL for the value for the `data` property.
            data: 'https://projects.transalt.org/assets/data.geojson'
        });

        map.addLayer({
            'id': 'earthquakes-layer',
            'type': 'circle',
            'source': 'earthquakes',
            'paint': {
                'circle-radius': 4,
                'circle-stroke-width': 2,
                'circle-color': 'red',
                'circle-stroke-color': 'white'
            }
        });
    });

// When a click event occurs on a feature in the places layer, open a popup at the
// location of the feature, with description HTML from its properties.
map.on('click', 'earthquakes-layer', (e) => {
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
.setHTML('<p class="popDate">' + e.features[0].properties.boro_name + '</p><h1 class="popuph1 border-bottom pb-2">' + e.features[0].properties.location + '</h1><p class="popDate"><span style="font-weight:700">Borough:</span> ' + e.features[0].properties.Borough + '</p><p class="popDate"><span style="font-weight:700">Mode:</span> ' + e.features[0].properties.Mode + '</p><p class="popDate"><span style="font-weight:700">Age:</span> ' + e.features[0].properties.Age + '</p><p class="popDate"><span style="font-weight:700">Gender:</span> ' + e.features[0].properties.Gender + '</p><p class="popDate"><span style="font-weight:700">Collision ID:</span> ' + e.features[0].properties.Collision_ID + '</p>')
.addTo(map);
});
