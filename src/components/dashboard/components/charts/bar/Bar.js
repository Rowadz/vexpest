import React from 'react'
import { languageCounter } from '../../../functions/chartBuilders.functions'
import HighchartsReact from 'highcharts-react-official'
import { options } from './bar.options'
import Highcharts from 'highcharts'
require('highcharts/modules/wordcloud')(Highcharts)
require('highcharts/modules/boost')(Highcharts)

export default function Bar({ width, height, data }) {
  return (
    <HighchartsReact
      highcharts={Highcharts}
      options={optionsMerge(width, height, data)}
      allowChartUpdate={true}
    />
  )
}
const optionsMerge = (width, height, data) => {
  const { languages, values } = languageCounter(data)
  const op = options(languages)
  return {
    ...op,
    chart: {
      ...op.chart,
      height,
      width: isNaN(width) ? null : width
    },
    series: values
  }
}
