import { graphPlaceHolder } from '../components/charts/starsGraph/starsGraph.options'
import rn from 'random-number'
const mapPieData = (data = [], y = 'stargazers_count', mapper) =>
  data
    .map((obj) => ({
      name: obj.name,
      y: mapper ? mapper(obj[y]) : obj[y],
      value: mapper ? mapper(obj[y]) : obj[y],
    }))
    .filter(({ y }) => y > 0)

const mapWordcloudData = (data = []) =>
  data.map(({ watchers_count, name, html_url }) => ({
    name,
    weight: 1,
    html_url,
  }))

const forkedReposCount = (data = []) =>
  formatNumber(data.filter(({ fork }) => fork).length)
const reposCount = (data = []) =>
  formatNumber(data.filter(({ fork }) => !fork).length)
const starsTotal = (data = []) =>
  formatNumber(
    data.reduce((acc, curr) => acc + (curr.stargazers_count || 0), 0)
  )

const archivedReposCount = (data = []) =>
  formatNumber(data.filter(({ archived }) => archived).length)

const notArchivedReposCount = (data = []) =>
  formatNumber(data.filter(({ archived }) => !archived).length)

const forkedTotal = (data = []) =>
  formatNumber(data.reduce((acc, curr) => acc + (curr.forks_count || 0), 0))

const mapToArea = (data) => {
  data = data.reduce(
    (prev, { name, stargazers_count }) => ({
      ...prev,
      [name]: stargazers_count,
    }),
    {}
  )
  const sorted = Object.keys(data)
    .sort((a, b) => data[a] - data[b])
    .filter((key) => data[key])

  return {
    xAxis: sorted,
    dataToViz: sorted.map((key) => data[key]),
  }
}

const mapToLine = (data) => {
  const set = new Set()
  const map = new Map()
  data.forEach(({ created_at }) => set.add(new Date(created_at).getFullYear()))
  const years = Array.from(set).sort((a, b) => a - b)
  data.forEach(({ created_at }) => {
    const year = new Date(created_at).getFullYear()
    map.set(year, (map.get(year) || 0) + 1)
  })
  const dataToViz = years.map((year) => map.get(year))
  return { years, dataToViz }
}

const languageCounter = (data = []) => {
  const counter = {}
  data
    .filter(({ language }) => language)
    .forEach(({ language }) => {
      counter[language] = (counter[language] || 0) + 1
    })

  const keys = Object.keys(counter)
  return {
    languages: keys,
    values: keys.map((key) => {
      const holder = Array.from({ length: keys.length }).fill(0)
      holder[keys.indexOf(key)] = counter[key]
      return {
        name: key,
        data: holder,
      }
    }),
  }
}

const graphNodesLinks = (data) => {
  const nodes = [
    {
      id: '0',
      name: 'You',
      itemStyle: { normal: { color: '#3C6E7F' } },
      symbolSize: 20,
      x: -266.82776,
      y: 299.6904,
      attributes: { modularity_class: 0 },
    },
    ...graphPlaceHolder.nodes.slice(1, data.length + 1),
  ]
  const links = [
    {
      id: `${0}`,
      source: `${0}`,
      target: `${1}`,
      lineStyle: { normal: {} },
    },
  ]
  const categories = ['You']
  const maxStargazersCount = Math.max(
    ...data.map(({ stargazers_count }) => stargazers_count)
  )
  const scale = (num, inMin, inMax, outMin, outMax) =>
    ((num - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin

  const minStargazersCount = Math.min(
    ...data.map(({ stargazers_count }) => stargazers_count)
  )
  data.forEach(
    ({ name, stargazers_count, size, forks_count, language, fork }, i) => {
      nodes[i + 1] = {
        ...nodes[i + 1],
        id: `${i + 1}`,
        name,
        x:
          nodes[i + 1] && nodes[i + 1].x
            ? nodes[i + 1].x
            : rn({ min: -100, max: 300 }),
        y:
          nodes[i + 1] && nodes[i + 1].y
            ? nodes[i + 1].y
            : rn({ min: -100, max: 200 }),
        symbolSize: scale(
          stargazers_count,
          minStargazersCount,
          maxStargazersCount,
          3,
          150
        ),
        starCount: formatNumber(stargazers_count),
        size: formatNumber(size / 1000),
        forkes: formatNumber(forks_count),
        isFork: fork,
        language,
        label: {
          show:
            scale(
              stargazers_count,
              minStargazersCount,
              maxStargazersCount,
              3,
              150
            ) > 100,
        },
      }
      links.push({
        id: `${i + 1}`,
        source: `${0}`,
        target: `${i + 1}`,
        lineStyle: { normal: {} },
      })
      categories.push(name)
    }
  )
  return { nodes, links, categories }
}

const formatNumber = (num) =>
  num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')

export {
  mapWordcloudData,
  mapPieData,
  forkedReposCount,
  reposCount,
  mapToArea,
  starsTotal,
  forkedTotal,
  languageCounter,
  archivedReposCount,
  notArchivedReposCount,
  formatNumber,
  graphNodesLinks,
  mapToLine,
}
