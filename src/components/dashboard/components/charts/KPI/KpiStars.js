import React, { useState } from 'react'
import { starsTotal } from '../../../functions/chartBuilders.functions'
import { WiredCard } from 'wired-card'
import { Row, Col } from 'react-grid-system'

export default function KpiStars({ data }) {
  const [count] = useState(starsTotal(data))
  return (
    <wired-card
      elevation="3"
      style={{ width: '100%', color: '#fff', textAlign: 'center' }}
      fill={'#992E3F'}
    >
      <Row>
        <Col xs={12} sm={12} md={12} lg={12}>
          <h1>{count} Total Stars</h1>
        </Col>
      </Row>
    </wired-card>
  )
}
