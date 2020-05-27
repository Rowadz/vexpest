import React from 'react'
import { mapToLine } from '../../../functions/chartBuilders.functions'
import ReactEcharts from 'echarts-for-react'

export default function Line({ data }) {
  return (
    <ReactEcharts
      style={{ height: '500px', width: '100%' }}
      theme={'dark'}
      option={optionsMerge(data)}
    />
  )
}

const optionsMerge = (data) => {
  const { dataToViz, years } = mapToLine(data)
  return {
    title: {
      text: 'Repo Creation By year',
      subtext: 'How man repos this user created each year',
      top: 'top',
      left: 'center',
      color: '#fff',
    },
    backgroundColor: 'transparent',
    xAxis: {
      type: 'category',
      data: years,
      splitLine: {
        show: false,
      },
    },
    tooltip: {
      show: true,
      trigger: 'axis',
      formatter: ([{ data: count, axisValue: year }]) => {
        return `Created <b>${count}</b> Repos in ${year}`
      },
    },
    yAxis: {
      type: 'value',
      splitLine: {
        show: false,
      },
    },
    series: [
      {
        data: dataToViz,
        type: 'line',
        color: ['#3C6E7F'],
        smooth: true,
      },
    ],
  }
}
