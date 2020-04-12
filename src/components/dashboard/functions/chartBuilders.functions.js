const mapPieData = (data = []) =>
  data.map(({ name, stargazers_count }) => ({ name, y: stargazers_count }))

const mapWordcloudData = (data = []) =>
  data.map(({ watchers_count, name }) => ({ name, weight: watchers_count }))

export { mapWordcloudData, mapPieData }
