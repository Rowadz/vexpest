const mapPieData = (data = [], y = 'stargazers_count', mapper) =>
  data.map((obj) => ({
    name: obj.name,
    y: mapper ? mapper(obj[y]) : obj[y]
  }))

const mapWordcloudData = (data = []) =>
  data.map(({ watchers_count, name, html_url }) => ({
    name,
    weight: 1,
    html_url
  }))

const forkedReposCount = (data = []) => data.filter(({ fork }) => fork).length
const reposCount = (data = []) => data.filter(({ fork }) => !fork).length

export { mapWordcloudData, mapPieData, forkedReposCount, reposCount }
