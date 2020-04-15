const mapPieData = (data = [], y = 'stargazers_count', mapper) =>
  data
    .map((obj) => ({
      name: obj.name,
      y: mapper ? mapper(obj[y]) : obj[y]
    }))
    .filter(({ y }) => y > 0)

const mapWordcloudData = (data = []) =>
  data.map(({ watchers_count, name, html_url }) => ({
    name,
    weight: 1,
    html_url
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
        data: holder
      }
    })
  }
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
  formatNumber
}
