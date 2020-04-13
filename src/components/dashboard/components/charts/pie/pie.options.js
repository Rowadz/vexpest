const options = {
  title: {
    text: 'Stars by Repository'
  },
  chart: {
    height: 500,
    backgroundColor: null,
    plotBackgroundColor: null,
    plotBorderWidth: null,
    plotShadow: false,
    type: 'pie'
    // width: '100vw'
  },

  legend: {
    align: 'right',
    verticalAlign: 'top',
    layout: 'vertical',
    navigation: {
      style: {
        color: '#fff'
      }
    }
  },
  plotOptions: {
    pie: {
      allowPointSelect: true,
      cursor: 'pointer',
      dataLabels: {
        enabled: true
      },
      showInLegend: true
    }
  },
  credits: {
    enabled: false
  },
  responsive: {
    rules: [
      {
        condition: {
          maxWidth: 500
        },
        plotOptions: {
          pie: {
            showInLegend: false
          }
        },
        chartOptions: {
          legend: {
            enabled: false
          }
        }
      }
    ]
  },
  tooltip: {
    pointFormat: 'number of 🌟: <b>{point.y}</b>'
  }
}

export { options }
