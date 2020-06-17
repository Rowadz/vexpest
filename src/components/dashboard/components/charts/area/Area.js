import React from 'react'
import { mapToArea } from '../../../functions/chartBuilders.functions'
import ReactEcharts from 'echarts-for-react'
import {
  darkTheme,
  lightTxtColor,
  darkTxtColor,
  mainColor2,
  mainColor,
} from '../../../../../helpers/magicStrings'

export default function Area({ data, theme }) {
  return (
    <ReactEcharts
      style={{ height: '700px', width: '100%' }}
      theme={theme === darkTheme ? 'dark' : 'light'}
      option={optionsMerge(data, theme)}
    />
  )
}

const checkIfMobile = () =>
  /Mobi/.test(navigator.userAgent) || /Mobi|Android/i.test(navigator.userAgent)

const scale = (num, inMin, inMax, outMin, outMax) =>
  ((num - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin

const getColorTxt = (theme) =>
  theme === darkTheme ? darkTxtColor : lightTxtColor

const optionsMerge = (data, theme) => {
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
        color: theme === darkTheme ? mainColor : mainColor2,
        data: dataToViz,
        // type: 'line',
        symbolSize: (data) => scale(data, 1, max, 5, 50),
        type: 'scatter',
        smooth: true,
        // areaStyle: {},
        label: {
          normal: {
            color: getColorTxt(theme),
            show: true,
            position: 'inside',
            formatter: ({ dataIndex }) =>
              xAxis[dataIndex].length > (checkIfMobile() ? 3 : 10)
                ? ''
                : xAxis[dataIndex],
          },
        },
        itemStyle: {
          // shadowBlur: 10,
          // shadowColor: 'rgba(25, 100, 150, 0.5)',
          // shadowOffsetY: 5,
          color: theme === darkTheme ? mainColor : mainColor2,
        },
      },
    ],
  }
}
