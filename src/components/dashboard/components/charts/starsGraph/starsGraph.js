import React from 'react'
import { graphNodesLinks } from '../../../functions/chartBuilders.functions'
// import { options } from './pie.options'
import ReactEcharts from 'echarts-for-react'

export default function StarsGraph({
  data,
  y,
  tooltip,
  mapper,
  title,
  legend,
}) {
  return (
    <ReactEcharts
      style={{ height: '700px', width: '100%' }}
      theme={'dark'}
      option={optionsMerge(data, y, tooltip, mapper, title, legend)}
    />
  )
}

const optionsMerge = (data, y, tooltip, mapper, title, legend) => {
  const { links, nodes, categories } = graphNodesLinks(data)
  console.log({ links, nodes, categories })
  return {
    backgroundColor: 'transparent',
    height: '700px',
    title: {
      text: 'Info Graph',
      //   subtext: 'Default layout',
      top: 'top',
      left: 'center',
      color: '#fff',
    },
    tooltip: {
      formatter: ({ data }) => {
        const { name, symbolSize, size, forkes, language, isFork } = data
        return symbolSize
          ? name === 'You'
            ? 'This is you!'
            : `☆ ${name}: ${symbolSize} ☆ <br/>Size in MB: <b>${size}</b><br/>Forkes: ${forkes}<br/>Language: ${language}<br/> Is Fork: ${isFork}`
          : ''
      },
    },
    legend: [
      {
        selectedMode: 'single',
        data: categories,
        show: true,
        color: '#fff',
      },
    ],
    animationDuration: 1500,
    animationEasingUpdate: 'quinticInOut',
    series: [
      {
        name: 'Repos & Stars',
        type: 'graph',
        layout: 'none',
        data: nodes,
        color: ['#3C6E7F'],
        links: links,
        categories: categories,
        roam: true,
        focusNodeAdjacency: true,
        itemStyle: {
          borderColor: '#fff',
          borderWidth: 1,
          shadowBlur: 10,
          shadowColor: 'rgba(0, 0, 0, 0.3)',
        },
        label: {
          position: 'right',
          formatter: '{b}',
        },
        lineStyle: {
          // color: 'source',
          curveness: 0.3,
        },
        emphasis: {
          lineStyle: {
            width: 10,
          },
        },
      },
    ],
  }
}
