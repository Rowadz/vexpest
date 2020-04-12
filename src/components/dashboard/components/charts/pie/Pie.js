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
  title,
  legend
}) {
  return (
    <HighchartsReact
      highcharts={Highcharts}
      options={optionsMerge(
        width,
        height,
        data,
        y,
        tooltip,
        mapper,
        title,
        legend
      )}
      allowChartUpdate={true}
    />
  )
}

const optionsMerge = (
  width,
  height,
  data,
  y,
  tooltip,
  mapper,
  title,
  legend
) => ({
  ...options,
  title: {
    text: title || options.title.text
  },
  chart: {
    ...options.chart,
    height,
    width: isNaN(width) ? null : width
  },
  plotOptions: {
    pie: {
      ...options.plotOptions.pie,
      showInLegend: width < 650 ? false : legend
    }
  },
  tooltip: {
    ...(tooltip || options.tooltip)
  },
  series: [{ colorByPoint: true, data: mapPieData(data, y, mapper) }]
})
