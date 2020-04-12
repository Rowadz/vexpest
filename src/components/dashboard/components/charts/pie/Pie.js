import React from 'react'
import { mapPieData } from '../../../functions/chartBuilders.functions'
import HighchartsReact from 'highcharts-react-official'
import { options } from './pie.options'
import Highcharts from 'highcharts'
require('highcharts/themes/dark-unica')(Highcharts)

export default function Pie({ width, height, data }) {
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
  series: [{ colorByPoint: true, data: mapPieData(data) }]
})
