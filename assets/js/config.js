'use strict';

// eslint-disable-next-line no-unused-vars
const config = {
  style: 'mapbox://styles/mapbox/light-v10',
  accessToken:
    'pk.eyJ1IjoiamFjb2JkZWNhc3RybyIsImEiOiJja3dtZGV5aWsyYjJmMndub2R3cTBuazIyIn0.DaRqJP0ez4gMNtcslbVakQ',
  CSV: 'https://docs.google.com/spreadsheets/d/1OHA-wyjgquc7NPCbKnfh4Fcpylz5CATmyk0r-BWqtvo/gviz/tq?tqx=out:csv&sheet=IntersectionInput',
  center: [-73.92068456351701, 40.73758866530919],
  zoom: 12,
  title: 'See where upgrades have been made',
  description:
    'Filter by upgrade type, borough, and Vision Zero priority intersections.',
  sideBarInfo: ['Intersection', 'Borough','Date','Elements'],
  popupInfo: ['PopUp'],
  cooperativeGestures: true,
  filters: [
    {
      type: 'dropdown',
      title: 'Borough: ',
      columnHeader: 'Borough',
      listItems: [
        'Bronx',
        'Brooklyn',
        'Manhattan',
        'Queens',
        'Staten Island',
      ],
    },
    {
      type: 'checkbox',
      title: 'Upgrades made: ',
      columnHeader: 'Elements', // Case sensitive - must match spreadsheet entry
      listItems: ['Leading Pedestrian Interval', 'Raised Crosswalk', 'Traffic Signal', 'Left Turn Calming','Right Turn Calming'], // Case sensitive - must match spreadsheet entry; This will take up to six inputs but is best used with a maximum of three;
    },
    {
      type: 'dropdown',
      title: 'Vision Zero Priority intersections: ',
      columnHeader: 'VZPriority',
      listItems: [
        'yes',
        'no',
      ],
    },
  ],
};
