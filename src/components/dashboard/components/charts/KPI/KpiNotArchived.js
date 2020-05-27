import React, { useState } from 'react'
import { notArchivedReposCount } from '../../../functions/chartBuilders.functions'
import { Row, Col } from 'react-grid-system'
import { Panel } from 'rsuite'

export default function KpiNotArchived({ data }) {
  const [count] = useState(notArchivedReposCount(data))
  return (
    <Row className="pt-1">
      <Col xs={12} sm={12} md={12} lg={12}>
        <Panel header="Active Repos Count" shaded>
          <h1 className="center">{count} </h1>
        </Panel>
      </Col>
    </Row>
  )
}
