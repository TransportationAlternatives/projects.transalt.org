// LPI vs Pedestrian Fatalities

var chartDom = document.getElementById('LPI');
var myChart = echarts.init(chartDom);
var option;

const colors = ['#355e1c', '#f15d22'];
option = {
  color: colors,
  fontSize: 14,
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      label: {
        precision: '0'
      }
    }
  },
  legend: {
    data: ['Pedestrian Fatalities', 'LPI Installations'],
    textStyle: {
      fontSize: 14,
      fontFamily: '"Inter",sans-serif'
    }
  },
    grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: [
    {
      type: 'category',
      axisTick: {
        alignWithLabel: true
      },
      axisLabel: {
        fontSize: 14,
        fontFamily: '"Inter", sans-serif'
      },
      // prettier-ignore
      data: ['2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023']
    }
  ],
  yAxis: [
    {
      type: 'value',
      name: 'Installations',
      position: 'right',
      minInterval: 1,
      alignTicks: true,
      axisLine: {
        show: true
      },
      axisLabel: {
        fontSize: 14,
        fontFamily: '"Inter", sans-serif'
      }
    },
    {
      type: 'value',
      name: 'Fatalities',
      position: 'left',   
      alignTicks: true,
      axisLine: {
        show: true
      },
      nameSize: 14,
      axisLabel: {
        fontSize: 14,
        fontFamily: '"Inter", sans-serif'
      }
    }
  ],
  series: [
    {
      name: 'LPI Installations',
      type: 'line',
      showSymbol: false,
      lineStyle: {
        normal: {
          width: 5
        }
      },
      /* markLine: {
        data: [
          // 1st line we want to draw
          [
            // start point of the line
            // we have to defined line attributes only here (not in the end point)
            {
              xAxis: 0,
              yAxis: 0,
              symbol: 'none',
              lineStyle: {
                normal: {
                  color: "#f15d22"
                }
              },
               label: {
                normal: {
                  show: true,
                  position: 'insideEnd',
                  formatter: 'Speed safety camera program begins',
                  offset: [-10, -10],
                  fontFamily: '"Inter",sans-serif',
                  fontSize: 14
                }
              }
            }, 
            // end point of the line
            {
              xAxis: 0,
              yAxis: 7000,
              symbol: 'none'
            }
          ]
        ]
    }, */

      data: [
        282, 699, 1475, 2307, 3180, 4155, 4845, 5327, 5944, 6173
      ],
    },
    {
      name: 'Pedestrian Fatalities',
      type: 'line',
      showSymbol: false,
      lineStyle: {
        normal: {
          width: 5
        }
      },
      yAxisIndex: 1,
      data: [
        140, 139, 149, 108, 116, 124, 97, 126, 121, 99
      ],
      /* markLine: {
        data: [
          // 1st line we want to draw
          [
            // start point of the line
            // we have to defined line attributes only here (not in the end point)
            {
              xAxis: 8,
              yAxis: 0,
              symbol: 'none',
              lineStyle: {
                normal: {
                  color: "#f15d22"
                }
              },
              label: {
                normal: {
                  show: true,
                  position: 'insideEnd',
                  formatter: 'Speed safety cameras allowed to operate 24/7',
                  offset: [-10, -10],
                  fontFamily: '"Inter",sans-serif',
                  fontSize: 14
                }
              }
            },
            // end point of the line
            {
              xAxis: 8,
              yAxis: 210,
              symbol: 'none'
            }
          ]
        ]
    }, */
    },

  ]
};

option && myChart.setOption(option);

// Tickets to New Yorkers of Color

var chartDom = document.getElementById('policing');
var myChart = echarts.init(chartDom);
var option;

option = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      // Use axis to trigger tooltip
      type: 'shadow' // 'shadow' as default; can also be 'line' or 'shadow'
    }
  },
  legend: {
    textStyle: {
      fontSize: 14,
      fontFamily: '"Inter",sans-serif'
    }
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: {
    type: 'value',
    axisLabel: {
      formatter: '{value}%',
        fontSize: 14,
        fontFamily: '"Inter", sans-serif'
      }
  },
  yAxis: {
    type: 'category',
    axisLabel: {
        fontSize: 14,
        fontFamily: '"Inter", sans-serif'
      },
    data: ['Jaywalking', 'Biking on Sidewalk','Use of Force Against Drivers']
  },
  series: [
    
    {
      name: 'Black or Hispanic',
      type: 'bar',
      stack: 'total',
      label: {
        show: true,
        formatter: '{c}%'
      },
      emphasis: {
        focus: 'series'
      },
      itemStyle: {
            color: '#f15d22' },
      data: [92,84,89,96]
    },
    {
      name: 'White, Non-Hispanic',
      type: 'bar',

      stack: 'total',
      label: {
        show: true,
        formatter: '{c}%'
      },
      emphasis: {
        focus: 'series'
      },
      itemStyle: {
            color: '#FBD6C8' },
      data: [5,8,6,2]
    },
    {
      name: 'Other',
      type: 'bar',
      stack: 'total',
      label: {
        show: true,
        formatter: '{c}%'
      },
      emphasis: {
        focus: 'series'
      },
      itemStyle: {
            color: '#ACCCD4' },
      data: [3,8,5,2]
    }
  ]
};

option && myChart.setOption(option);

// Fatalities By Mode

var chartDom = document.getElementById('allfatals');
var myChart = echarts.init(chartDom);
var option;

option = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      // Use axis to trigger tooltip
      type: 'shadow' // 'shadow' as default; can also be 'line' or 'shadow'
    }
  },
  legend: {
    textStyle: {
      fontSize: 14,
      fontFamily: '"Inter",sans-serif'
    }
  },
  grid: {
    left: '0%',
    right: '0%',
    bottom: '0%',
    containLabel: true
  },

  yAxis: {
    type: 'value',
    axisLabel: {
        fontSize: 14,
        fontFamily: '"Inter", sans-serif'
      },
  },
  xAxis: {
    type: 'category',
    axisLabel: {
        fontSize: 14,
        fontFamily: '"Inter", sans-serif'
      },
    data: [
      '2014',
      '2015',
      '2016',
      '2017',
      '2018',
      '2019',
      '2020',
      '2021',
      '2022',
      '2023'
    ]
  },
  series: [

    {
      name: 'Pedestrian',
      type: 'bar',
      stack: 'total',
      label: {
        show: true
      },
      emphasis: {
        focus: 'series'
      },
      markLine: {
        data: [
          // 1st line we want to draw
          [
            // start point of the line
            // we have to defined line attributes only here (not in the end point)
            {
              xAxis: 0,
              yAxis: 287,
              symbol: 'none',
              lineStyle: {
                normal: {
                  color: "#f15d22"
                }
              },
              label: {
                normal: {
                  show: true,
                  position: 'insideStart',
                  formatter: 'Pre-Vision Zero 10-year average, 287 fatalities',
                  offset: [-5, -10],
                  fontFamily: '"Inter",sans-serif',
                  fontSize: 14
                }
              }
            },
            // end point of the line
            {
              xAxis: 9,
              yAxis: 287,
              symbol: 'none'
            }
          ]
        ]
    },
      itemStyle: {
            color: '#f15d22' },
      data: [140, 139, 149, 108, 117, 124, 94, 127, 122, 100]
    },
    {
      name: 'Cyclist',
      type: 'bar',
      stack: 'total',
      label: {
        show: true
      },
      emphasis: {
        focus: 'series'
      },
      itemStyle: {
            color: '#F58559' },
      data: [20, 14, 18, 24, 10, 28, 26, 19, 19, 29]
    },

    {
      name: 'Motorist',
      type: 'bar',
      stack: 'total',
      label: {
        show: true
      },
      emphasis: {
        focus: 'series'
      },
      itemStyle: {
            color: '#F8AE90' },
      data: [99, 81, 65, 92, 79, 68, 122, 114, 99, 110]
    },
    {
      name: 'Other Motorist*',
      type: 'bar',
      stack: 'total',
      label: {
        show: true
      },
      emphasis: {
        focus: 'series'
      },
      itemStyle: {
            color: '#FBD6C8' },
      data: [, , , , , , , 15, 21, 20]
    }
  ],

};

option && myChart.setOption(option);


// Fatalities per 100,000

var chartDom = document.getElementById('fatals100');
var myChart = echarts.init(chartDom);
var option;

const colors100 = ['#393D00', '#f15d22','#FBD6C8'];

option = {
    color: colors100,
  tooltip: {
    trigger: 'axis'
  },
  legend: {
    data: ['Black', 'Hispanic or Latino', 'White, Non-Hispanic',],
    textStyle: {
      fontSize: 14,
      fontFamily: '"Inter",sans-serif'
    }
  },
  grid: {
    left: '6%',
    right: '6%',
    bottom: '2%',
    containLabel: true,

  },
  xAxis: {
    type: 'category',
    boundaryGap: true,
    axisLabel: {
        fontSize: 14,
        fontFamily: '"Inter", sans-serif'
      },
    data: ['2014', '2015', '2016', '2017', '2018', '2019', '2020']
  },
  yAxis: {
    type: 'value',
    axisLabel: {
        fontSize: 14,
        fontFamily: '"Inter", sans-serif',
      },
    containLabel: true,
    name: 'Fatalities per 100,000',
    nameLocation: 'middle',
        nameGap: 30,
  },
  series: [
    {
      name: 'Black',
      type: 'line',
      showSymbol: false,
      data: [3.5, 3.7, 2.9, 2.7, 2.1, 2.6, 4.3],
      visualMap: {
        color: '#393D00'
      },
      lineStyle: {
        color: '#393D00',
        width: 5
      },
      tooltip: {
        valueFormatter: value => value + ' fatalities per 100,000'
      }
    },
    {
      name: 'Hispanic or Latino',
      type: 'line',
      showSymbol: false,
      data: [4.2, 2.8, 4.1, 3.3, 3.5, 3.8, 4.5],
      lineStyle: {
        color: '#f15d22',
        width: 5
      },
      tooltip: {
        valueFormatter: value => value + ' fatalities per 100,000'
      }
    },
    {
      name: 'White, Non-Hispanic',
      type: 'line',
      showSymbol: false,
      data: [3, 2.7, 1.9, 2.2, 2, 2.6, 2.4],
      lineStyle: {
        color: '#FBD6C8',
        width: 5
      },
      tooltip: {
        valueFormatter: value => value + ' fatalities per 100,000'
      }
    }
  ]
};

option && myChart.setOption(option);

// VMT 

var chartDom = document.getElementById('vmt');
var myChart = echarts.init(chartDom);
var option;
const colors200 = ['#f15d22'];

option = {
  color: colors200,
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      label: {
        precision: '0'
      }
    }
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    containLabel: true,
    axisLabel: {
        fontSize: 14,
        fontFamily: '"Inter", sans-serif'
      }

  },
  yAxis: {
    type: 'value',
    min: 15000000000,
    axisLabel: {
        fontSize: 14,
        fontFamily: '"Inter", sans-serif'
      },
      name: 'Miles'
  },
    grid: {
    left: '2%',
    right: '5%',
    bottom: '2%',
    containLabel: true
  },
  series: [
    {
      type: 'line',
      symbol: 'none',
      lineStyle: {
        color: '#f15d22',
        width: 5
      },
      tooltip: {
        valueFormatter: value => value + ' miles'
      },
      markArea: {
        itemStyle: {
          color: 'rgba(200, 200, 200, 0.4)'
        },
        data: [
          [
            {
              name: 'Estimate',
              xAxis: '2022'
            },
            {
              xAxis: '2023'
            }
          ]
        ]
      },
      areaStyle: {},
      data: [
        ['2005', 19318051045.87],
        ['2006', 19406873055.38],
        ['2007', 19482932750.71],
        ['2008', 18876897077.03],
        ['2009', 18691006528.77],
        ['2010', 19657033168.52],
        ['2011', 19149389857.87],
        ['2012', 18929782073.09],
        ['2013', 19007342559.31],
        ['2014', 19012654923.01],
        ['2015', 19662888321.73],
        ['2016', 20244327807.29],
        ['2017', 20439338696.31],
        ['2018', 21080754311.88],
        ['2019', 21523925338.49],
        ['2020', 16593133288.16],
        ['2021', 20188205866.91],
        ['2022', 21323591646.66],
        ['2023', 22069917354]
      ]
    }
  ]
};

option && myChart.setOption(option);

// Bike PBL

var chartDom = document.getElementById('pbl');
var myChart = echarts.init(chartDom);
var option;

const colors2 = ['#f15d22', '#355E1C'];
option = {
  color: colors2,
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      label: {
        precision: '0'
      }
    }
  },
  grid: {
    left: '0%',
    right: '2%',
    bottom: '0%',
    containLabel: true},
  legend: {
    data: ['Annual cycling trips', 'Streets with a protected bike lane (PBL)'],
    textStyle: {
      fontSize: 14,
      fontFamily: '"Inter",sans-serif'
    }
  },
  xAxis: [
    {
      type: 'category',
      axisTick: {
        alignWithLabel: true
      },
      // prettier-ignore
      data: ['1980', '1990', '2000', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022'],
      axisLabel: {
        fontSize: 14,
        fontFamily: '"Inter", sans-serif'
      }
    }
  ],
  yAxis: [
    {
      type: 'value',
      name: 'Streets with PBL',
      position: 'right',
      minInterval: 1,
      max:100,
      alignTicks: true,
       axisLabel: {
        formatter: '{value}%',
        fontSize: 14,
        fontFamily: '"Inter",sans-serif'
      },
      axisLine: {
        show: true
      }
    },
    {
      type: 'value',
      name: 'Annual cycling trips',
      position: 'left',   
      alignTicks: true,
      axisLine: {
        show: true
      },
      axisLabel: {
        fontSize: 14,
        fontFamily: '"Inter", sans-serif'
      }
    }
  ],
  series: [
    {
      name: 'Streets with a protected bike lane (PBL)',
      type: 'line',
      showSymbol: false,
      lineStyle: {
        normal: {
          width: 5
        }
      },
tooltip: {
        valueFormatter: value => value + '%'
      },
      data: ['0.00', '0', '0', '0', '0', '0', '0.05', '0.1', '0.11', '0.13', '0.18', '0.26', '0.35', '0.55', '0.72', '0.86', '1.15', '1.25', '1.3', '1.45', '1.65']
    },
    {
      name: 'Annual cycling trips',
      type: 'line',
      showSymbol: false,
      lineStyle: {
        normal: {
          width: 5
        }
      },
      yAxisIndex: 1,
      data: ['36600000', '36500000', '54800000', '62100000', '65700000', '76700000', '87800000', '87600000', '91300000', '98600000', '117100000', '138700000', '153300000', '164300000', '167900000', '178800000', '186200000', '193500000', '197150000', '200800000', '222700000']
    },

  ]
};

option && myChart.setOption(option);

// Child Fatalities

var chartDom = document.getElementById('child');
var myChart = echarts.init(chartDom);
var option;

option = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      // Use axis to trigger tooltip
      type: 'shadow' // 'shadow' as default; can also be 'line' or 'shadow'
    }
  },
  legend: {
    textStyle: {
      fontSize: 14,
      fontFamily: '"Inter",sans-serif'
    }
  },
  grid: {
    left: '0%',
    right: '0%',
    bottom: '0%',
    containLabel: true
  },
  yAxis: {
    type: 'value',
    axisLabel: {
        fontSize: 14,
        fontFamily: '"Inter", sans-serif'
      }
  },
  xAxis: {
    type: 'category',
    axisLabel: {
        fontSize: 14,
        fontFamily: '"Inter", sans-serif'
      },
    data: [
      '2014-2018',
      '2019-2023'
    ]
  },
  series: [
    {
      name: 'SUV or larger',
      type: 'bar',
      stack: 'total',
      label: {
        show: true
      },
      emphasis: {
        focus: 'series'
      },
      itemStyle: {
            color: '#f15d22' },
      data: [16, 42]
    },
    {
      name: 'Sedan or motorcycle',
      type: 'bar',
      stack: 'total',
      label: {
        show: true
      },
      emphasis: {
        focus: 'series'
      },
      itemStyle: {
            color: '#FBD6C8' },
      data: [20, 17]
    }
  ]
};

option && myChart.setOption(option);
