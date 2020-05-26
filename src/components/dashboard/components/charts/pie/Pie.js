import React from 'react'
import { mapPieData } from '../../../functions/chartBuilders.functions'
// import { options } from './pie.options'
import ReactEcharts from 'echarts-for-react'

export default function Pie({ data, y, tooltip, mapper, title, legend }) {
  return (
    <ReactEcharts
      option={optionsMerge(data, y, tooltip, mapper, title, legend)}
    />
  )
}

const optionsMerge = (data, y, tooltip, mapper, title, legend) => ({
  tooltip: {
    trigger: 'item',
    formatter: '{b} <br/>{c}',
  },
  legend: {
    type: 'scroll',
    orient: 'vertical',
    right: 10,
    top: 20,
    bottom: 20,
    // data: data.legendData,

    // selected: data.selected
  },
  series: [
    {
      type: 'pie',
      // radius: '55%',
      // center: ['50%', '50%'],
      data: mapPieData(data, y, mapper).sort((a, b) => a.value - b.value),
      roseType: 'radius',
      label: {
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
        color: '#c23531',
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
})
