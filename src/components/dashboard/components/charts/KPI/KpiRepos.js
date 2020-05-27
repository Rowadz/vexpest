import React, { useState } from 'react'
// import { WiredCard } from 'wired-card'
import { Panel } from 'rsuite'
import { reposCount } from '../../../functions/chartBuilders.functions'
import { Row, Col } from 'react-grid-system'

export default function KpiRepos({ data }) {
  const [count] = useState(reposCount(data))
  return (
    <Row className="pt-1">
      <Col xs={12} sm={12} md={12} lg={12}>
        <Panel
          header="Repositories Created (archive/active) Excluding Private Ones"
          shaded
        >
          <h1 className="center">{count} </h1>
        </Panel>
      </Col>
    </Row>
  )
}
