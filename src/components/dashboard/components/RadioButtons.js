import React from 'react'
import { WiredCard } from 'wired-card'
import { WiredRadio } from 'wired-radio'
import { Row, Col } from 'react-grid-system'

export default function RadioButtons() {
  return (
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
  )
}
