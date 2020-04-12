import React from 'react'
import { mapPieData } from '../../../functions/chartBuilders.functions'
import HighchartsReact from 'highcharts-react-official'
import { options } from './pie.options'
import Highcharts from 'highcharts'
require('highcharts/themes/dark-unica')(Highcharts)

export default function Pie({
  width,
  height,
  data,
  y,
  tooltip,
  mapper,
  title
}) {
  return (
    <HighchartsReact
      highcharts={Highcharts}
      options={optionsMerge(width, height, data, y, tooltip, mapper, title)}
      allowChartUpdate={true}
    />
  )
}

const optionsMerge = (width, height, data, y, tooltip, mapper, title) => ({
  ...options,
  title: {
    text: title || options.title.text
  },
  chart: {
    ...options.chart,
    height,
    width: isNaN(width) ? null : width
  },
  tooltip: {
    ...(tooltip || options.tooltip)
  },
  series: [{ colorByPoint: true, data: mapPieData(data, y, mapper) }]
})
