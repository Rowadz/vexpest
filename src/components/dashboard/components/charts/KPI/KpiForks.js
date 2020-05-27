import React, { useState } from 'react'
import { forkedReposCount } from '../../../functions/chartBuilders.functions'
import { Row, Col } from 'react-grid-system'
import { Panel } from 'rsuite'

export default function KpiForks({ data }) {
  const [count] = useState(forkedReposCount(data))
  return (
    <Row className="pt-1">
      <Col xs={12} sm={12} md={12} lg={12}>
        <Panel header="Repositories Forked By This User" shaded>
          <h1 className="center">{count}</h1>
        </Panel>
      </Col>
    </Row>
  )
}
