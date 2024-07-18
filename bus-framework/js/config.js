var config = {
    style: 'mapbox://styles/jacobdecastro/clw9fa2cc002b01ql5kzjhbvd/draft',
    accessToken: 'pk.eyJ1IjoiamFjb2JkZWNhc3RybyIsImEiOiJjazI5YzQzdXAwOXFxM25vMXV4OGl5OGQzIn0.xYccv6RPj_aa6zkS5ShsDw',
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: false,
    theme: 'light',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    chapters: [
        {
            id: 'allbuses',
            alignment: 'center',
            hidden: false,
            title: 'There are 13,748 bus stops in New York City — and we know how to cool them down.',
            description: 'New York City’s coolest bus stops offer solutions for its hottest ones: bus shelters, shade trees, and efficient service. These solutions offer benefits beyond keeping bus riders safe and cool.',
            location: {
                center: [-73.96416, 40.74147],
                zoom: 10.21,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'all-stops',
                    opacity: .8
                }
            ],
            onChapterExit: [
                {
                    layer: 'all-stops',
                    opacity: 0
                }
            ]
        },
        {
            id: 'shelters',
            alignment: 'left',
            hidden: false,
            title: 'Just 20% of bus stops have shelters.',
            description: 'Shelters protect from rain, snow, sun, and wind, and when installed with countdown clocks, cut perceived wait times <a href="https://transitcenter.org/wp-content/uploads/2018/10/BusReport_Spreads.pdf">in half</a>. They also provide seating for older riders, parents with young children, and people with disabilities in a city where there is only one bench for <a href="https://www1.nyc.gov/html/dot/html/pedestrians/citybench.shtml">every 4,200 New Yorkers</a>.',
            location: {
                center: [-73.96416, 40.74147],
                zoom: 10.21,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'shelter',
                    opacity: .8
                }
            ],
            onChapterExit: [
                {
                    layer: 'shelter',
                    opacity: 0
                },
            ]
        },
        {
            id: 'tree-canopy',
            alignment: 'left',
            hidden: false,
            title: 'Just 32% of stops have tree canopy within 25 feet.',
            description: 'Tree shade reduces surface-level temperatures by <a href="https://www.cabdirect.org/cabdirect/abstract/20133290871">22 degrees</a>, absorbs <a href="https://hgic.clemson.edu/factsheet/trees-for-stormwater-management/">flood</a> <a href="https://www.researchgate.net/publication/23411104_Can_Urban_Tree_Roots_Improve_Infiltration_Through_Compacted_Subsoils_for_Stormwater_Management">waters</a>, and reduces <a href="https://www.milliontreesnyc.org/html/about/forest.shtml#UFORE">local air pollution</a> to such a degree that homes and businesses along a tree-lined street have <a href="https://pubmed.ncbi.nlm.nih.gov/24215538/">50% fewer</a> indoor particulate pollutants.',
            location: {
                center: [-73.96416, 40.74147],
                zoom: 10.21,
                pitch: 0,
                bearing: 0,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'trees',
                    opacity: .8
                }
            ],
            onChapterExit: [
                {
                    layer: 'trees',
                    opacity: 0
                }
            ]
        },
        {
            id: 'benches',
            alignment: 'left',
            hidden: false,
            title: 'Just 1.87% of streets have a bus lane.',
            description: 'More efficient bus service reduces wait time spent in all unsafe weather and has been shown to increase bus ridership and reduce car use.',
            location: {
                center: [-73.96416, 40.74147],
                zoom: 10.21,
                pitch: 0,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'lanes',
                    opacity: .8
                }
            ],
            onChapterExit: [
                {
                    layer: 'lanes',
                    opacity: 0
                }
            ]
        }
    ]
};
