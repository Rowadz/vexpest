import React, { useState } from 'react'
import { archivedReposCount } from '../../../functions/chartBuilders.functions'
import { WiredCard } from 'wired-card'
import { Row, Col } from 'react-grid-system'

export default function KpiArchived({ data }) {
  const [count] = useState(archivedReposCount(data))
  return (
    <wired-card
      elevation="3"
      style={{ width: '100%', color: '#fff', textAlign: 'center' }}
      fill={'#424370'}
    >
      <Row>
        <Col xs={12} sm={12} md={12} lg={12}>
          <h1>{count} archived Repos Count</h1>
        </Col>
      </Row>
    </wired-card>
  )
}
