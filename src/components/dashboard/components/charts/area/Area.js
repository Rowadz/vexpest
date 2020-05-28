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

const scale = (num, inMin, inMax, outMin, outMax) =>
  ((num - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin

const optionsMerge = (data) => {
  const { dataToViz, xAxis } = mapToArea(data)

  const max = Math.max(...dataToViz)
  return {
    title: {
      text: 'Stars By Repo',
      subtext: 'Top 10 only',
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
        show: false,
      },
      splitLine: {
        show: false,
      },
    },
    tooltip: {
      show: true,
      trigger: 'axis',
      formatter: (object) => {
        const x = Object.values(object).filter(({ value }) => +value)
        if (x[0]) {
          const [{ marker, name, value }] = x
          return `${marker} ${name}<br/> ☆stars☆: ${value}`
        }
        return ''
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
        color: ['#3C6E7F'],
        data: dataToViz,
        // type: 'line',
        symbolSize: (data) => scale(data, 1, max, 5, 50),
        type: 'scatter',
        smooth: true,
        // areaStyle: {},
        label: {
          normal: {
            show: true,
            position: 'inside',
            formatter: ({ dataIndex }) =>
              xAxis[dataIndex].length > 10 ? '' : xAxis[dataIndex],
          },
        },
        itemStyle: {
          shadowBlur: 10,
          shadowColor: 'rgba(25, 100, 150, 0.5)',
          shadowOffsetY: 5,
          color: ['#3C6E7F'],
        },
      },
    ],
  }
}
