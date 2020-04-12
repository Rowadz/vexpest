const mapWordcloudData = (data = []) =>
  data.map(({ stargazers_count, name }) => ({ name, weight: stargazers_count }))
