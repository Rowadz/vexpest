import React from 'react'
import HighchartsReact from 'highcharts-react-official'
import { options } from './pie.options'
import Highcharts from 'highcharts'
require('highcharts/themes/dark-unica')(Highcharts)

export default function Pie({ width, height }) {
  console.log({ width, height })
  return (
    <HighchartsReact
      highcharts={Highcharts}
      options={optionsMerge(width, height)}
      allowChartUpdate={true}
    />
  )
}

const optionsMerge = (width, height) => ({
  ...options,
  chart: {
    ...options.chart,
    height,
    width: isNaN(width) ? null : width
  }
})
