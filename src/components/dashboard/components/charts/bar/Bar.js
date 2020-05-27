import React from 'react'
import { languageCounter } from '../../../functions/chartBuilders.functions'
import ReactEcharts from 'echarts-for-react'

export default function Area({ data }) {
  return (
    <ReactEcharts
      style={{ height: '500px', width: '100%' }}
      theme={'dark'}
      option={optionsMerge(data)}
    />
  )
}

const optionsMerge = (data) => {
  const { languages, values } = languageCounter(data)
  console.log(values)
  return {
    title: {
      text: 'Languages Count By Repo',
      top: 'top',
      left: 'center',
      color: '#fff',
    },
    backgroundColor: 'transparent',
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow',
      },
    },
    legend: {
      data: languages,
      bottom: 'bottom',
      type: 'scroll',
      orient: 'horizontal',
      bottom: 20,
      textStyle: {
        color: '#fff',
      },
    },
    color: [
      '#3C6E7F',
      '#5EB4E6',
      '#294466',
      '#398CBF',
      '#1F598C',
      '#143C8C',
      '#60B9D2',
      '#01485B',
      '#0893B8',
      '#C8E7EF',
      '#075473',
      '#092B40',
      '#032340',
      '#8BFAFF',
      '#3E84E6',
      '#27528F',
      '#2A599C',
    ],
    tooltip: {
      show: true,
      trigger: 'axis',
      formatter: (object) => {
        const x = Object.values(object).filter(({ value }) => +value)
        if (x[0]) {
          const [{ marker, name, value }] = x
          return `${marker} ${name} ${value}`
        }
        return ''
      },
    },
    // grid: {
    //   left: '3%',
    //   right: '4%',
    //   bottom: '3%',
    //   containLabel: true,
    // },
    xAxis: {
      type: 'value',
      splitLine: {
        show: false,
      },
      boundaryGap: [0, 0.01],
    },
    yAxis: {
      type: 'category',
      data: languages,
      splitLine: {
        show: false,
      },
    },
    series: values,
  }
}
