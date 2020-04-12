import React, { useState } from 'react'
import { forkedReposCount } from '../../../functions/chartBuilders.functions'
import { WiredCard } from 'wired-card'
import { Row, Col } from 'react-grid-system'

export default function KpiForks({ data }) {
  const [count] = useState(forkedReposCount(data))
  return (
    <wired-card
      elevation="3"
      style={{ width: '100%', color: '#fff', textAlign: 'center' }}
      fill={'#1C2D44'}
    >
      <Row>
        <Col xs={12} sm={12} md={12} lg={12}>
          <h1>{count} Forked Repositories</h1>
        </Col>
      </Row>
    </wired-card>
  )
}
