const options = (categories) => ({
  chart: {
    type: 'column',
    backgroundColor: null
  },
  title: {
    text: 'Repositories By Language'
  },
  subtitle: {
    text: 'Githup public API'
  },
  xAxis: {
    categories,
    crosshair: true
  },
  tooltip: {
    headerFormat: '<span style="font-size:10px">Info</span><table>',
    pointFormat:
      '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
      '<td style="padding:0"><b>{point.y}</b> repo</td></tr>',
    footerFormat: '</table>',
    shared: true,
    useHTML: true
  },
  plotOptions: {
    column: {
      pointPadding: 0.2,
      borderWidth: 0
    }
  }
})

export { options }
