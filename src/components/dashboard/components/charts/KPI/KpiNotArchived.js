import React, { useState } from 'react'
import { notArchivedReposCount } from '../../../functions/chartBuilders.functions'
import { WiredCard } from 'wired-card'
import { Row, Col } from 'react-grid-system'

export default function KpiNotArchived({ data }) {
  const [count] = useState(notArchivedReposCount(data))
  return (
    <wired-card
      elevation="3"
      style={{ width: '100%', color: '#fff', textAlign: 'center' }}
      fill={'#730220'}
    >
      <Row>
        <Col xs={12} sm={12} md={12} lg={12}>
          <h1>{count} active Repos Count</h1>
        </Col>
      </Row>
    </wired-card>
  )
}
