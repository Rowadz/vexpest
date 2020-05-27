import React, { useState } from 'react'
import { forkedTotal } from '../../../functions/chartBuilders.functions'
import { Panel } from 'rsuite'
import { Row, Col } from 'react-grid-system'

export default function KpiForksTotal({ data }) {
  const [count] = useState(forkedTotal(data))
  return (
    <Row className="pt-1">
      <Col xs={12} sm={12} md={12} lg={12}>
        <Panel header="How Many Times His/Her Repos Have Been Forked" shaded>
          <h1 className="center">{count} </h1>
        </Panel>
      </Col>
    </Row>
  )
}
