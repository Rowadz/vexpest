const options = {
  title: {
    text: 'Stars by Repository'
  },
  chart: {
    height: 500,
    plotBackgroundColor: null,
    plotBorderWidth: null,
    plotShadow: false,
    type: 'pie'
    // width: '100vw'
  },
  plotOptions: {
    pie: {
      allowPointSelect: true,
      cursor: 'pointer',
      dataLabels: {
        enabled: true
      }
    }
  },

  tooltip: {
    pointFormat: 'number of 🌟: <b>{point.y}</b>'
  }
}

export { options }
