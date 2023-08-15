'use strict';

// eslint-disable-next-line no-unused-vars
const config = {
  style: 'mapbox://styles/mapbox/light-v10',
  accessToken:
    'pk.eyJ1IjoiamFjb2JkZWNhc3RybyIsImEiOiJja3dtZGV5aWsyYjJmMndub2R3cTBuazIyIn0.DaRqJP0ez4gMNtcslbVakQ',
  CSV: 'https://docs.google.com/spreadsheets/d/1towJSRCkJn_WQWII-iZ-dHLh8YVk5RVwckoA5PjVb4c/gviz/tq?tqx=out:csv&sheet=All%20Qs%20Cleaned',
  center: [-73.92068456351701, 40.73758866530919],
  zoom: 11,
  title: 'See where serious injuries were reported in New York City',
  description:
    'Filter by upgrade type, borough, and Vision Zero priority intersections.',
  sideBarInfo: ['Location_Front', 'CD','Crash Date'],
  popupInfo: ['PopUp'],
  cooperativeGestures: true,
  filters: [
    {
      type: 'dropdown',
      title: 'Borough: ',
      columnHeader: 'Crash Borough',
      listItems: [
        'Bronx',
        'Brooklyn',
        'Manhattan',
        'Queens',
        'Staten Island',
      ],
    },
    {
      type: "checkbox",
      title: "Serious injury mode: ",
      columnHeader: "Mode", // Case sensitive - must match spreadsheet entry
      listItems: ["Pedestrian", "Cyclist", "Motorist","Other Motorist"] // Case sensitive - must match spreadsheet entry; This will take up to six inputs but is best used with a maximum of three;
    },
    {
      type: 'dropdown',
      title: 'Were there multiple serious injuries?',
      columnHeader: 'Multiple_Injuries',
      listItems: [
        'Yes',
        'No',
      ],
    },
    {
      type: 'dropdown',
      title: 'Quarter:',
      columnHeader: 'Quarter',
      listItems: [
        'Quarter 1 - 2022',
        'Quarter 2 - 2022',
        'Quarter 3 - 2022',
        'Quarter 4 - 2022',
        'Quarter 1 - 2023',
        'Quarter 2 - 2023',
      ],
    },
  ]
};
