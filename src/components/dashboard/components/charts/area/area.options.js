const options = ({ pointStart }) => ({
  title: {
    text: 'Repositories Rate By Years'
  },
  subtitle: {
    text: 'Source: GitHub public API'
  },
  chart: {
    height: 500,
    backgroundColor: null,
    plotBackgroundColor: null,
    plotBorderWidth: null,
    plotShadow: false,
    type: 'area'
  },
  credits: {
    enabled: false
  },
  plotOptions: {
    area: {
      pointStart,
      cursor: 'pointer',
      marker: {
        enabled: false,
        symbol: 'circle',
        radius: 2,
        states: {
          hover: {
            enabled: true
          }
        }
      }
    }
  },
  tooltip: {
    pointFormat: 'You have created {point.y} repos in this date'
  }
})

export { options }
