
var chartDom = document.getElementById('LPI');
var myChart = echarts.init(chartDom);
var option;

const colors2 = ['#2BC2C2', '#FF912A'];
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
    data: ['LPI Installations','Pedestrian Fatalities']
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
      name: 'Fatalities',
      position: 'left',   
      alignTicks: true,
      axisLine: {
        show: true
      },
    {
      type: 'value',
      name: 'Installations',
      position: 'right',
      minInterval: 1,
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


