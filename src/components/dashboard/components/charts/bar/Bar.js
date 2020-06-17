import React from 'react'
import { languageCounter } from '../../../functions/chartBuilders.functions'
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
      style={{ height: '500px', width: '100%' }}
      theme={theme === darkTheme ? 'dark' : 'light'}
      option={optionsMerge(data, theme)}
    />
  )
}
const checkIfMobile = () =>
  /Mobi/.test(navigator.userAgent) || /Mobi|Android/i.test(navigator.userAgent)

const getColorTxt = (theme) =>
  theme === darkTheme ? darkTxtColor : lightTxtColor

const optionsMerge = (data, theme) => {
  const { languages, values } = languageCounter(data)
  return {
    title: {
      text: 'Languages Count By Repo',
      top: 'top',
      left: 'center',
      color: '#fff',
    },
    backgroundColor: 'transparent',
    legend: {
      data: languages,
      type: 'scroll',
      orient: 'horizontal',
      bottom: 20,
      textStyle: {
        color: getColorTxt(theme),
      },
    },
    // to fix the cut off labels on x/y xAxis/yAxis
    // grid: {
    // bottom: 0,
    //   left: 0,
    //   containLabel: true,
    // },
    color:
      theme === darkTheme
        ? [
            mainColor,
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
          ]
        : mainColor2,
    tooltip: {
      axisPointer: {
        type: 'shadow',
      },
      show: true,
      trigger: 'axis',
      formatter: (object) => {
        const x = Object.values(object).filter(({ value }) => +value)
        if (x[0]) {
          const [{ marker, name, value }] = x
          return `${marker} ${name}: <b>${value}</b>`
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
      axisLabel: {
        show: !checkIfMobile(),
      },
      type: 'category',
      data: languages,
      splitLine: {
        show: false,
      },
    },
    series: values,
  }
}
