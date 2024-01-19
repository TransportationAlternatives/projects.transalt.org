// LPI vs Pedestrian Fatalities

var chartDom = document.getElementById('LPI');
var myChart = echarts.init(chartDom);
var option;

const colors = ['#355e1c', '#f15d22'];
option = {
  color: colors,
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
    data: ['Pedestrian Fatalities', 'LPI Installations']
  },
  xAxis: [
    {
      type: 'category',
      axisTick: {
        alignWithLabel: true
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
      }
    },
    {
      type: 'value',
      name: 'Fatalities',
      position: 'left',   
      alignTicks: true,
      axisLine: {
        show: true
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
      data: [
        282, 699, 1475, 2307, 3180, 4155, 4845, 5327, 5944, 6173
      ]
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
      ]
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
  legend: {},
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: {
    type: 'value',
    axisLabel: {
      formatter: '{value}%'
    }
  },
  yAxis: {
    type: 'category',
    data: ['Jaywalking', 'Biking on Sidewalk','Use of Force Against Drivers']
  },
  series: [
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
  legend: {},
  grid: {
    left: '0%',
    right: '0%',
    bottom: '0%',
    containLabel: true
  },
  yAxis: {
    type: 'value'
  },
  xAxis: {
    type: 'category',
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
      itemStyle: {
            color: '#f15d22' },
      data: [140, 139, 149, 108, 116, 124, 97, 126, 121, 100]
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
      data: [20, 14, 18, 24, 10, 28, 25, 19, 19, 29]
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
      data: [99, 81, 65, 92, 79, 68, 120, 115, 100, 110]
    },
    {
      name: 'Other Motorist',
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
  ]
};

option && myChart.setOption(option);


// Fatalities per 100,000

var chartDom = document.getElementById('fatals100');
var myChart = echarts.init(chartDom);
var option;

const colors100 = ['#393D00', '#f15d22','#ACCCD4'];

option = {
    color: colors100,
  tooltip: {
    trigger: 'axis'
  },
  legend: {
    data: ['Black', 'Hispanic or Latino', 'White',]
  },
  grid: {
    left: '%',
    right: '1%',
    bottom: '0%',
    containLabel: true,

  },
  xAxis: {
    type: 'category',
    boundaryGap: true,
    data: ['2014', '2015', '2016', '2017', '2018', '2019', '2020']
  },
  yAxis: {
    type: 'value',
    name: 'Fatalities per 100,000',
    containLabel: true,
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
    },
    {
      name: 'Hispanic or Latino',
      type: 'line',
      showSymbol: false,
      data: [4.2, 2.8, 4.1, 3.3, 3.5, 3.8, 4.5],
      lineStyle: {
        color: '#f15d22',
        width: 5
      }
    },
    {
      name: 'White',
      type: 'line',
      showSymbol: false,
      data: [3, 2.7, 1.9, 2.2, 2, 2.6, 2.4],
      lineStyle: {
        color: '#ACCCD4',
        width: 5
      }
    }
  ]
};

option && myChart.setOption(option);

// Heatmap 

var chartDom = document.getElementById('dawn');
var myChart = echarts.init(chartDom);
var option;

// prettier-ignore
const hours = [
    '2 p.m.','3 p.m.','4 p.m.','5 p.m.','6 p.m.','7 p.m.','8 p.m.'
];
// prettier-ignore
const days = [
    'December 1','November', 'October','September','August','July','June','May','April','March','February','January'
];
// prettier-ignore
const data = [[10, 10, 5], [0, 1, 1], [0, 2, 0], [0, 3, 0], [0, 4, 0], [0, 5, 0], [0, 6, 0], [0, 7, 0], [0, 8, 0], [0, 9, 0], [0, 10, 0], [0, 11, 2], [0, 12, 4], [0, 13, 1], [0, 14, 1], [0, 15, 3], [0, 16, 4], [0, 17, 6], [0, 18, 4], [0, 19, 4], [0, 20, 3], [0, 21, 3], [0, 22, 2], [0, 23, 5], [1, 0, 7], [1, 1, 0], [1, 2, 0], [1, 3, 0], [1, 4, 0], [1, 5, 0], [1, 6, 0], [1, 7, 0], [1, 8, 0], [1, 9, 0], [1, 10, 5], [1, 11, 2], [1, 12, 2], [1, 13, 6], [1, 14, 9], [1, 15, 11], [1, 16, 6], [1, 17, 7], [1, 18, 8], [1, 19, 12], [1, 20, 5], [1, 21, 5], [1, 22, 7], [1, 23, 2], [2, 0, 1], [2, 1, 1], [2, 2, 0], [2, 3, 0], [2, 4, 0], [2, 5, 0], [2, 6, 0], [2, 7, 0], [2, 8, 0], [2, 9, 0], [2, 10, 3], [2, 11, 2], [2, 12, 1], [2, 13, 9], [2, 14, 8], [2, 15, 10], [2, 16, 6], [2, 17, 5], [2, 18, 5], [2, 19, 5], [2, 20, 7], [2, 21, 4], [2, 22, 2], [2, 23, 4], [3, 0, 7], [3, 1, 3], [3, 2, 0], [3, 3, 0], [3, 4, 0], [3, 5, 0], [3, 6, 0], [3, 7, 0], [3, 8, 1], [3, 9, 0], [3, 10, 5], [3, 11, 4], [3, 12, 7], [3, 13, 14], [3, 14, 13], [3, 15, 12], [3, 16, 9], [3, 17, 5], [3, 18, 5], [3, 19, 10], [3, 20, 6], [3, 21, 4], [3, 22, 4], [3, 23, 1], [4, 0, 1], [4, 1, 3], [4, 2, 0], [4, 3, 0], [4, 4, 0], [4, 5, 1], [4, 6, 0], [4, 7, 0], [4, 8, 0], [4, 9, 2], [4, 10, 4], [4, 11, 4], [4, 12, 2], [4, 13, 4], [4, 14, 4], [4, 15, 14], [4, 16, 12], [4, 17, 1], [4, 18, 8], [4, 19, 5], [4, 20, 3], [4, 21, 7], [4, 22, 3], [4, 23, 0], [5, 0, 2], [5, 1, 1], [5, 2, 0], [5, 3, 3], [5, 4, 0], [5, 5, 0], [5, 6, 0], [5, 7, 0], [5, 8, 2], [5, 9, 0], [5, 10, 4], [5, 11, 1], [5, 12, 5], [5, 13, 10], [5, 14, 5], [5, 15, 7], [5, 16, 11], [5, 17, 6], [5, 18, 0], [5, 19, 5], [5, 20, 3], [5, 21, 4], [5, 22, 2], [5, 23, 0], [6, 0, 1], [6, 1, 0], [6, 2, 0], [6, 3, 0], [6, 4, 0], [6, 5, 0], [6, 6, 0], [6, 7, 0], [6, 8, 0], [6, 9, 0], [6, 10, 1], [6, 11, 0], [6, 12, 2], [6, 13, 1], [6, 14, 3], [6, 15, 4], [6, 16, 0], [6, 17, 0], [6, 18, 0], [6, 19, 0], [6, 20, 1], [6, 21, 2], [6, 22, 2], [6, 23, 6]]
    .map(function (item) {
    return [item[1], item[0], item[2] || '-'];
});
option = {
  tooltip: {
    position: 'top'
  },
  grid: {
    height: '50%',
    top: '10%'
  },
  xAxis: {
    type: 'category',
    data: hours,
    splitArea: {
      show: true
    }
  },
  yAxis: {
    type: 'category',
    data: days,
    splitArea: {
      show: true
    }
  },
  visualMap: {
    min: 0,
    max: 500,
    calculable: true,
    orient: 'horizontal',
    left: 'center',
    bottom: '15%'
  },
  series: [
    {
      name: 'Punch Card',
      type: 'heatmap',
      data: data,
      label: {
        show: true
      },
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }
  ]
};

option && myChart.setOption(option);

// VMT 

var chartDom = document.getElementById('vmt');
var myChart = echarts.init(chartDom);
var option;

option = {
  xAxis: {
    type: 'category',
    boundaryGap: true
  },
  yAxis: {
    type: 'value',
    min: 15000000000,
  },
    grid: {
    left: '0%',
    right: '0%',
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
      markArea: {
        itemStyle: {
          color: 'rgba(200, 200, 200, 0.4)'
        },
        data: [
          [
            {
              name: '2023 estimate',
              xAxis: '2022'
            },
            {
              xAxis: '2023'
            }
          ]
        ]
      },
      data: [
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
    data: ['Annual cycling trips', 'Streets with a protected bike lane']
  },
  xAxis: [
    {
      type: 'category',
      axisTick: {
        alignWithLabel: true
      },
      // prettier-ignore
      data: ['1980', '1990', '2000', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022']
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
        formatter: '{value}%'
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
      }
    }
  ],
  series: [
    {
      name: 'Streets with a protected bike lane',
      type: 'line',
      showSymbol: false,
      lineStyle: {
        normal: {
          width: 5
        }
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
  legend: {},
  grid: {
    left: '0%',
    right: '0%',
    bottom: '0%',
    containLabel: true
  },
  yAxis: {
    type: 'value'
  },
  xAxis: {
    type: 'category',
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