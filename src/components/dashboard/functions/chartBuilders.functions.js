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

export { mapWordcloudData, mapPieData }
