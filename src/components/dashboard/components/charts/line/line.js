import React from 'react'
import { mapToLine } from '../../../functions/chartBuilders.functions'
import {
  darkTheme,
  mainColor2,
  mainColor,
  mainColor3,
  lightTheme,
} from '../../../../../helpers/magicStrings'
import { InView } from 'react-intersection-observer'
import ReactEcharts from 'echarts-for-react'

export default function Line({ data, theme }) {
  return (() => {
    let oneTime = false
    const getChart = () => (
      <ReactEcharts
        style={{ height: '500px', width: '100%' }}
        theme={theme === darkTheme ? 'dark' : 'light'}
        option={optionsMerge(data, theme)}
      />
    )
    const updateOneTime = () => {
      oneTime = true
      return getChart()
    }
    return (
      <InView>
        {({ inView, ref, entry }) => (
          <div ref={ref} style={{ height: '500px', width: '100%' }}>
            {inView && !oneTime ? getChart() : updateOneTime()}
          </div>
        )}
      </InView>
    )
  })()
}

const optionsMerge = (data, theme) => {
  const { dataToViz, years } = mapToLine(data)

  return {
    title: {
      text: 'Repo Creation By year',
      subtext: 'How many repos this user created each year',
      top: 'top',
      left: 'center',
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
        color: [
          theme === darkTheme
            ? mainColor
            : theme === lightTheme
            ? mainColor2
            : mainColor3,
        ],
        smooth: true,
      },
    ],
  }
}
