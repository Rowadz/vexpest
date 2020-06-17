import React from 'react'
import { mapPieData } from '../../../functions/chartBuilders.functions'
import ReactEcharts from 'echarts-for-react'
import {
  darkTheme,
  lightTxtColor,
  mainColor2,
  mainColor,
} from '../../../../../helpers/magicStrings'

export default function Pie({ data, theme }) {
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

const getColorTxt = (theme, opacity) =>
  theme === darkTheme ? `rgba(255, 255, 255, ${opacity})` : lightTxtColor

const optionsMerge = (data, theme) => {
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
    colors: [theme === darkTheme ? mainColor : mainColor2],
    legend: {
      type: 'scroll',
      show: checkIfMobile(),
      orient: 'horizontal',
      right: checkIfMobile() ? null : 10,
      top: checkIfMobile() ? null : 20,
      bottom: 20,
      textStyle: {
        color: getColorTxt(theme, 1),
      },
      data: toViz,
      // selected: toViz,
    },
    series: [
      {
        color: theme === darkTheme ? mainColor : mainColor2,
        type: 'pie',
        radius: checkIfMobile() ? '100%' : '55%',
        center: ['50%', '50%'],
        data: toViz,
        roseType: 'radius',
        label: {
          show: !checkIfMobile(),
          color: getColorTxt(theme, 1),
        },
        labelLine: {
          lineStyle: {
            color: getColorTxt(theme, 0.3),
          },
          smooth: 0.2,
          length: 10,
          length2: 20,
        },
        itemStyle: {
          color: theme === darkTheme ? mainColor : mainColor2,
          // shadowBlur: 200,
          // shadowColor: 'rgba(0, 0, 0, 0.5)',
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
