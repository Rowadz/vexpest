const options = ({ pointStart }) => ({
  title: {
    text: 'Repositories Rate By Years'
  },
  chart: {
    height: 500,
    backgroundColor: null,
    plotBackgroundColor: null,
    plotBorderWidth: null,
    plotShadow: false,
    type: 'area'
  },
  plotOptions: {
    area: {
      pointStart,
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
    pointFormat: 'You have {point.y} repos in {point.x}'
  }
})

export { options }
