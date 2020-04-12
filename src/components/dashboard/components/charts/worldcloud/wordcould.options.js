const options = {
  title: {
    text: 'All Repositories'
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
    },
    series: {
      cursor: 'pointer',
      events: {
        click: (event) => window.open(event.point.html_url, '_blank').focus()
      }
    }
  },

  tooltip: {
    enabled: false,
    pointFormat: 'number of 👁️: <b>{point.weight}</b>'
  }
}

export { options }
