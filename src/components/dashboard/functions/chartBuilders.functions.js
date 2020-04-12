const mapPieData = (data = [], y = 'stargazers_count', mapper) =>
  data.map((obj) => ({
    name: obj.name,
    y: mapper ? mapper(obj[y]) : obj[y]
  }))

const mapWordcloudData = (data = []) =>
  data.map(({ watchers_count, name }) => ({ name, weight: watchers_count }))

export { mapWordcloudData, mapPieData }
