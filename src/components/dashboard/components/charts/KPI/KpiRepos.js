import React, { useState } from 'react'
import { WiredCard } from 'wired-card'
import { reposCount } from '../../../functions/chartBuilders.functions'
import { Row, Col } from 'react-grid-system'

export default function KpiRepos({ data }) {
  const [count] = useState(reposCount(data))
  return (
    <wired-card
      elevation="3"
      style={{ width: '100%', color: '#fff', textAlign: 'center' }}
      fill={'#591228'}
    >
      <Row>
        <Col xs={12} sm={12} md={12} lg={12}>
          <h1>{count} Repositories</h1>
        </Col>
      </Row>
    </wired-card>
  )
}
