import React from 'react'
import { mapToArea } from '../../../functions/chartBuilders.functions'
import { options } from './area.options'
import Highcharts from 'highcharts'

export default function Area({ width, height, data }) {
  return (
    <HighchartsReact
      highcharts={Highcharts}
      options={optionsMerge(width, height, data)}
      allowChartUpdate={true}
    />
  )
}

const optionsMerge = (width, height, { years, dataToViz }) => {
  const op = options()
  return {
    ...op,
    chart: {
      ...op.chart,
      height,
      width: isNaN(width) ? null : width
    },
    xAxis: {
      categories: years
    },
    series: [{ name: 'Repositories', data: dataToViz }]
  }
}
