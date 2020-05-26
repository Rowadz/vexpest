import React from 'react'
import { mapToArea } from '../../../functions/chartBuilders.functions'
import ReactEcharts from 'echarts-for-react'

export default function Area({ data }) {
  return (
    <ReactEcharts
      style={{ height: '700px', width: '100%' }}
      theme={'dark'}
      option={optionsMerge(data)}
    />
  )
}

const optionsMerge = (data) => {
  const { dataToViz, xAxis } = mapToArea(data)
  return {
    title: {
      text: 'Stars By Repo',
      top: 'top',
      left: 'center',
      color: '#fff',
    },
    backgroundColor: 'transparent',
    xAxis: {
      type: 'category',
      data: xAxis,
      axisLabel: {
        rotate: 45,
      },
    },
    tooltip: {
      show: true,
      trigger: 'axis',
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        color: ['#3C6E7F'],
        data: dataToViz,
        type: 'line',
        smooth: true,
        areaStyle: {},
      },
    ],
  }
}
