const options = (categories) => ({
  chart: {
    type: 'column',
    backgroundColor: null
  },
  title: {
    text: 'Repositories By Language'
  },
  subtitle: {
    text: 'Source: GitHub public API'
  },
  credits: {
    enabled: false
  },
  xAxis: {
    categories: [...categories],
    crosshair: true
  },
  tooltip: {
    cursor: 'pointer',
    headerFormat: '<span style="font-size:10px">Info</span><br />',
    pointFormat:
      '<span style="color:{series.color};padding:0">{series.name}</span>: <b>{point.y}</b> repo',
    shared: false,
    useHTML: true
  },
  plotOptions: {
    column: {
      pointPadding: 0.2,
      borderWidth: 0,
      cursor: 'pointer'
    }
  }
})

export { options }
