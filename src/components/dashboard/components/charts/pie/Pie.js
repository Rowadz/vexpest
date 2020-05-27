import React from 'react'
import { mapPieData } from '../../../functions/chartBuilders.functions'
import ReactEcharts from 'echarts-for-react'

export default function Pie({ data }) {
  return (
    <ReactEcharts
      style={{ height: '700px', width: '100%' }}
      theme={'dark'}
      option={optionsMerge(data)}
    />
  )
}
const checkIfMobile = () =>
  /Mobi/.test(navigator.userAgent) || /Mobi|Android/i.test(navigator.userAgent)

const optionsMerge = (data) => {
  const toViz = mapPieData(data, 'size', (d) => d / 1000)
    .slice(0, 15)
    .sort((a, b) => b.value - a.value)
  return {
    title: {
      text: 'Repos Size in MB',
      subtext: 'Only 15',
      top: 'top',
      left: 'center',
      color: '#fff',
    },
    tooltip: {
      trigger: 'item',
      formatter: '{b} <br/>{c} MB',
    },
    backgroundColor: 'transparent',
    colors: ['#3C6E7F'],
    legend: {
      type: 'scroll',
      show: checkIfMobile(),
      orient: 'horizontal',
      right: checkIfMobile() ? null : 10,
      top: checkIfMobile() ? null : 20,
      bottom: 20,
      textStyle: {
        color: '#fff',
      },
      data: toViz,
      // selected: toViz,
    },
    series: [
      {
        color: ['#3C6E7F'],
        type: 'pie',
        radius: '55%',
        center: ['50%', '50%'],
        data: toViz,
        roseType: 'radius',
        label: {
          show: !checkIfMobile(),
          color: 'rgba(255, 255, 255, 1)',
        },
        labelLine: {
          lineStyle: {
            color: 'rgba(255, 255, 255, 0.3)',
          },
          smooth: 0.2,
          length: 10,
          length2: 20,
        },
        itemStyle: {
          color: '#3C6E7F',
          shadowBlur: 200,
          shadowColor: 'rgba(0, 0, 0, 0.5)',
        },

        animationType: 'scale',
        animationEasing: 'elasticOut',
        animationDelay: function (idx) {
          return Math.random() * 200
        },
      },
    ],
  }
}
