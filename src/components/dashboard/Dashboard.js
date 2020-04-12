import React from 'react'
import { Rnd } from 'react-rnd'
import { WiredRadio } from 'wired-radio'
import { Row, Col } from 'react-grid-system'
import { WiredCard } from 'wired-card'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
require('highcharts/themes/dark-unica')(Highcharts)

const options = {
  title: {
    text: 'My chart'
  },
  chart: {
    height: 500,
    plotBackgroundColor: null,
    plotBorderWidth: null,
    plotShadow: false,
    type: 'pie'
    // width: '100vw'
  },
  series: [
    {
      name: 'Brands',
      colorByPoint: true,
      data: [
        {
          name: 'Chrome',
          y: 61.41,
          sliced: true,
          selected: true
        },
        {
          name: 'Internet Explorer',
          y: 11.84
        },
        {
          name: 'Firefox',
          y: 10.85
        },
        {
          name: 'Edge',
          y: 4.67
        },
        {
          name: 'Safari',
          y: 4.18
        },
        {
          name: 'Sogou Explorer',
          y: 1.64
        },
        {
          name: 'Opera',
          y: 1.6
        },
        {
          name: 'QQ',
          y: 1.2
        },
        {
          name: 'Other',
          y: 2.61
        }
      ]
    }
  ]
}

export default function Dashboard() {
  return (
    <section>
      <wired-card
        elevation="3"
        style={{ width: '100%', color: '#fff' }}
        fill={'#141414'}
      >
        <Row>
          <Col xs={12} sm={12} md={3} lg={3}>
            <wired-radio>Stars</wired-radio>
          </Col>
          <Col xs={12} sm={12} md={3} lg={3}>
            <wired-radio>Forks</wired-radio>
          </Col>
          <Col xs={12} sm={12} md={3} lg={3}>
            <wired-radio>Follower/Following</wired-radio>
          </Col>
          <Col xs={12} sm={12} md={3} lg={3}>
            <wired-radio>Type X</wired-radio>
          </Col>
          <Col xs={12} sm={12} md={3} lg={3}>
            <wired-radio>Type Z</wired-radio>
          </Col>
          <Col xs={12} sm={12} md={3} lg={3}>
            <wired-radio>Type O</wired-radio>
          </Col>
          <Col xs={12} sm={12} md={3} lg={3}>
            <wired-radio>Type P</wired-radio>
          </Col>
          <Col xs={12} sm={12} md={3} lg={3}>
            <wired-radio>Mesh</wired-radio>
          </Col>
        </Row>
      </wired-card>

      <Row>
        <Col xs={12} sm={12} md={12} lg={12}>
          <Rnd
            minHeight={500}
            maxHeight={500}
            minWidth={'50%'}
            style={{ background: '#444444', boxShadow: '0px 0px 10px #595959' }}
            onResize={(e, direction, ref, delta, position) => {
              console.log({
                mappanelheight: ref.offsetHeight,
                mappanelwidth: ref.offsetWidth
              })
            }}
            default={{
              x: 0,
              y: 70,
              width: '100%',
              height: 500,
              minHeight: 500
            }}
          >
            <HighchartsReact
              highcharts={Highcharts}
              options={options}
              allowChartUpdate={true}
            />
          </Rnd>
        </Col>
      </Row>

      <Row>
        <Col xs={12} sm={12} md={12} lg={12}>
          <Rnd
            style={{ background: '#444444', boxShadow: '0px 0px 10px #595959' }}
            default={{
              x: 0,
              y: 670,
              width: '100%',
              height: 500
            }}
          >
            lorem
          </Rnd>
        </Col>
      </Row>
    </section>
  )
}
