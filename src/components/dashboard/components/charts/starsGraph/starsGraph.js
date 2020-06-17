import React from 'react'
import { graphNodesLinks } from '../../../functions/chartBuilders.functions'
import ReactEcharts from 'echarts-for-react'
import { InView } from 'react-intersection-observer'
import {
  darkTheme,
  lightTxtColor,
  darkTxtColor,
  mainColor2,
  mainColor,
} from '../../../../../helpers/magicStrings'

export default function StarsGraph({ data, theme }) {
  return (() => {
    let oneTime = false
    const getChart = () => (
      <ReactEcharts
        style={{ height: '700px', width: '100%' }}
        theme={theme === darkTheme ? 'dark' : 'light'}
        option={optionsMerge(data, theme)}
      />
    )
    const updateOneTime = () => {
      oneTime = true
      return getChart()
    }
    return (
      <InView>
        {({ inView, ref, entry }) => (
          <div ref={ref} style={{ height: '700px', width: '100%' }}>
            {inView && !oneTime ? getChart() : updateOneTime()}
          </div>
        )}
      </InView>
    )
  })()
}

const getColorTxt = (theme) =>
  theme === darkTheme ? darkTxtColor : lightTxtColor

const optionsMerge = (data, theme) => {
  const { links, nodes, categories } = graphNodesLinks(data)
  return {
    backgroundColor: 'transparent',
    height: '700px',
    title: {
      text: 'Info Graph',
      subtext: 'you can scroll in here!',
      top: 'top',
      left: 'center',
      color: '#fff',
    },
    tooltip: {
      formatter: ({ data }) => {
        const {
          name,
          symbolSize,
          size,
          forkes,
          language,
          isFork,
          starCount,
        } = data
        return symbolSize
          ? name === 'You'
            ? 'This is you!'
            : `☆ ${name}: ${starCount} ☆ <br/>Size in MB: <b>${size}</b><br/>Forkes: ${forkes}<br/>Language: ${language}<br/> Is Fork: ${isFork}`
          : ''
      },
    },
    legend: [
      {
        selectedMode: 'single',
        data: categories,
        show: true,
        color: getColorTxt(theme),
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
        color: theme === darkTheme ? mainColor : mainColor2,
        links: links,
        categories: categories,
        roam: true,
        focusNodeAdjacency: true,
        itemStyle: {
          borderColor: getColorTxt(theme),
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
          color: getColorTxt(theme),
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
