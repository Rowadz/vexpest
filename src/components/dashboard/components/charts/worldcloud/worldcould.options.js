const options = {
  title: {
    text: 'Watchers by Repository'
  },
  chart: {
    height: 500,
    backgroundColor: null,
    plotBackgroundColor: null,
    plotBorderWidth: null,
    plotShadow: false
    // width: '100vw'
  },
  plotOptions: {
    wordcloud: {
      allowPointSelect: true,
      cursor: 'pointer',
      dataLabels: {
        enabled: true
      }
    }
  },

  tooltip: {
    pointFormat: 'number of 👁️: <b>{point.weight}</b>'
  }
}

export { options }
