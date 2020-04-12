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

const forkedReposCount = (data = []) => data.filter(({ fork }) => fork).length
const reposCount = (data = []) => data.filter(({ fork }) => !fork).length

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

export { mapWordcloudData, mapPieData, forkedReposCount, reposCount, mapToArea }
