import React from 'react'
import { mapWordcloudData } from '../../../functions/chartBuilders.functions'
import HighchartsReact from 'highcharts-react-official'
import { options } from './wordcould.options'
import Highcharts from 'highcharts'
require('highcharts/modules/wordcloud')(Highcharts)
require('highcharts/modules/boost')(Highcharts)

export default function Worldcould({ width, height, data }) {
  return (
    <HighchartsReact
      highcharts={Highcharts}
      options={optionsMerge(width, height, data)}
      allowChartUpdate={true}
    />
  )
}
const optionsMerge = (width, height, data) => ({
  ...options,
  chart: {
    ...options.chart,
    height,
    width: isNaN(width) ? null : width
  },
  series: [
    { colorByPoint: true, data: mapWordcloudData(data), type: 'wordcloud' }
  ]
})
