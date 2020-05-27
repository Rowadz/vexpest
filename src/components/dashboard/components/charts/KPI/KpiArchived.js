import React, { useState } from 'react'
import { archivedReposCount } from '../../../functions/chartBuilders.functions'
import { Row, Col } from 'react-grid-system'
import { Panel } from 'rsuite'

export default function KpiArchived({ data }) {
  const [count] = useState(archivedReposCount(data))
  return (
    <Row className="pt-1">
      <Col xs={12} sm={12} md={12} lg={12}>
        <Panel header="Archived Repos Count" shaded>
          <h1 className="center">{count}</h1>
        </Panel>
      </Col>
    </Row>
  )
}
