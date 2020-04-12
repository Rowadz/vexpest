const mapPieData = (data = []) =>
  data.map(({ name, stargazers_count }) => ({ name, y: stargazers_count }))

const mapWordcloudData = (data = []) =>
  data.map(({ stargazers_count, name }) => ({ name, weight: stargazers_count }))

export { mapWordcloudData, mapPieData }
