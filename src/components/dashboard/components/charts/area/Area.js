import React from 'react'
import { mapToArea } from '../../../functions/chartBuilders.functions'
import { options } from './area.options'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

export default function Area({ width, height, data }) {
  return (
    <HighchartsReact
      highcharts={Highcharts}
      options={optionsMerge(width, height, data)}
      allowChartUpdate={true}
    />
  )
}

const optionsMerge = (width, height, data) => {
  const { years, dataToViz } = mapToArea(data)
  const op = options(years[0])
  const x = {
    ...op,
    chart: {
      ...op.chart,
      height,
      width: isNaN(width) ? null : width
    },
    xAxis: {
      allowDecimals: false,
      title: {
        text: 'Years'
      },
      categories: years
    },
    yAxis: {
      title: {
        text: 'Nuclear weapon states'
      }
    },

    series: [{ name: 'Repositories', data: dataToViz }]
  }
  return x
}
