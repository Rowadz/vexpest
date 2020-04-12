import React from 'react'
import { Rnd } from 'react-rnd'
import { WiredRadio } from 'wired-radio'
import { Row, Col } from 'react-grid-system'
import { WiredCard } from 'wired-card'

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
            style={{ background: '#444444', boxShadow: '0px 0px 10px #595959' }}
            default={{
              x: 0,
              y: 70,
              width: '100%',
              height: 500
            }}
          >
            lorem
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
