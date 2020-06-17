import React from 'react'
import { mapToLine } from '../../../functions/chartBuilders.functions'
import {
  darkTheme,
  lightTxtColor,
  darkTxtColor,
  mainColor2,
  mainColor,
} from '../../../../../helpers/magicStrings'
import { InView } from 'react-intersection-observer'
import ReactEcharts from 'echarts-for-react'

export default function Line({ data, theme }) {
  return (
    <InView>
      {({ inView, ref, entry }) => (
        <div ref={ref} style={{ height: '500px', width: '100%' }}>
          {inView ? (
            <ReactEcharts
              style={{ height: '500px', width: '100%' }}
              theme={theme === darkTheme ? 'dark' : 'light'}
              option={optionsMerge(data, theme)}
            />
          ) : (
            ''
          )}
        </div>
      )}
    </InView>
  )
}

const getColorTxt = (theme) =>
  theme === darkTheme ? darkTxtColor : lightTxtColor

const optionsMerge = (data, theme) => {
  const { dataToViz, years } = mapToLine(data)

  return {
    title: {
      text: 'Repo Creation By year',
      subtext: 'How many repos this user created each year',
      top: 'top',
      left: 'center',
      textStyle: {
        color: getColorTxt(theme),
      },
    },
    backgroundColor: 'transparent',
    xAxis: {
      type: 'category',
      data: years,
      splitLine: {
        show: false,
      },
      axisLabel: {
        color: getColorTxt(theme),
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
        color: [theme === darkTheme ? mainColor : mainColor2],
        smooth: true,
      },
    ],
  }
}
