import React from 'react'
import RadioButtons from './components/RadioButtons'
import DragDrop from './components/DragDrop'
import Pie from './components/charts/Pie'
import { Row, Col } from 'react-grid-system'

export default function Dashboard() {
  return (
    <section>
      <RadioButtons></RadioButtons>
      <Row>
        <Col xs={12} sm={12} md={12} lg={12}>
          <DragDrop child={<Pie />} y={70} x={0} />
        </Col>
      </Row>
    </section>
  )
}
