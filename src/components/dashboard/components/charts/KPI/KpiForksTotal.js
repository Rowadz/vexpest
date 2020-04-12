import React, { useState } from 'react'
import { forkedTotal } from '../../../functions/chartBuilders.functions'
import { WiredCard } from 'wired-card'
import { Row, Col } from 'react-grid-system'

export default function KpiForksTotal({ data }) {
  const [count] = useState(forkedTotal(data))
  return (
    <wired-card
      elevation="3"
      style={{ width: '100%', color: '#fff', textAlign: 'center' }}
      fill={'#A64F03'}
    >
      <Row>
        <Col xs={12} sm={12} md={12} lg={12}>
          <h1>{count} times his/her repos have been Forked</h1>
        </Col>
      </Row>
    </wired-card>
  )
}
